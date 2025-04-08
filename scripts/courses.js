// Quiz functionality
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let quizStarted = false;

const quizQuestions = [
    {
        question: "What is your programming experience level?",
        options: [
            { text: "No programming experience", value: 1 },
            { text: "Basic understanding of programming concepts", value: 2 },
            { text: "Some programming experience in one language", value: 3 },
            { text: "Experience in multiple programming languages", value: 4 },
            { text: "Professional programming experience", value: 5 }
        ]
    },
    {
        question: "How familiar are you with basic programming concepts?",
        options: [
            { text: "Not familiar at all", value: 1 },
            { text: "Know basic concepts (variables, loops)", value: 2 },
            { text: "Understand functions and arrays", value: 3 },
            { text: "Familiar with OOP concepts", value: 4 },
            { text: "Advanced understanding of programming paradigms", value: 5 }
        ]
    },
    {
        question: "Have you worked with any specific programming languages?",
        options: [
            { text: "No specific language experience", value: 1 },
            { text: "Basic HTML/CSS", value: 2 },
            { text: "One programming language (Python/JavaScript)", value: 3 },
            { text: "Multiple programming languages", value: 4 },
            { text: "Advanced knowledge of multiple languages", value: 5 }
        ]
    },
    {
        question: "How comfortable are you with problem-solving?",
        options: [
            { text: "Not comfortable with coding problems", value: 1 },
            { text: "Can solve basic problems", value: 2 },
            { text: "Can solve moderate problems", value: 3 },
            { text: "Good at solving complex problems", value: 4 },
            { text: "Expert at solving complex problems", value: 5 }
        ]
    }
];

let answers = [];

function startQuiz() {
    quizStarted = true;
    document.getElementById('quizIntro').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    showQuestion();
    updateNavigationButtons();
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        if (answers[currentQuestion] === index) {
            button.classList.add('selected');
            selectedOption = index;
        }
        button.textContent = option.text;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
    
    updateProgress();
    updateNavigationButtons();
}

function selectOption(index) {
    selectedOption = index;
    answers[currentQuestion] = index;
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, i) => {
        option.classList.toggle('selected', i === index);
    });
}

function updateNavigationButtons() {
    const backButton = document.getElementById('backQuestion');
    const nextButton = document.getElementById('nextQuestion');
    const submitButton = document.getElementById('submitQuiz');

    // Show/hide back button
    backButton.style.display = currentQuestion === 0 ? 'none' : 'block';

    // Show/hide next and submit buttons
    if (currentQuestion === quizQuestions.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    } else {
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
    }
}

function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        selectedOption = answers[currentQuestion];
        showQuestion();
    }
}

function goNext() {
    if (selectedOption === null) {
        alert('Please select an option before proceeding.');
        return;
    }

    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        selectedOption = null;
        showQuestion();
    } else {
        showResult();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
}

function showResult() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    
    const level = getProgrammingLevel();
    document.getElementById('resultLevel').textContent = level.title;
    document.getElementById('resultDescription').textContent = level.description;

    // Auto-select difficulty filter based on quiz result
    const difficultyFilter = document.getElementById('difficultyFilter');
    difficultyFilter.value = level.title.toLowerCase();
    
    // Update courses display with the new filter
    updateCourses();
}

function getProgrammingLevel() {
    const totalScore = answers.reduce((sum, answer) => sum + quizQuestions[0].options[answer].value, 0);
    const averageScore = totalScore / quizQuestions.length;

    if (averageScore <= 2) {
        return {
            title: "Beginner",
            description: "You're just starting your programming journey. Take advantage of our free courses to build a strong foundation."
        };
    } else if (averageScore <= 3.5) {
        return {
            title: "Intermediate",
            description: "You have a good foundation in programming. Keep practicing and explore more complex concepts to enhance your skills."
        };
    } else {
        return {
            title: "Advanced",
            description: "You have a strong understanding of programming concepts! Consider exploring advanced topics and contributing to open-source projects."
        };
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    answers = [];
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    showQuestion();
}

// Function to show the quiz modal
function showQuizModal() {
    const modal = document.getElementById('quizModal');
    modal.style.display = 'flex';
}

// Function to close the quiz modal
function closeQuizModal() {
    const modal = document.getElementById('quizModal');
    modal.style.display = 'none';
    restartQuiz();
}

// Function to handle skip quiz
function skipQuiz() {
    closeQuizModal();
}

// Empty courses array
const courses = [];

// Function to create a course card
function createCourseCard(course) {
    return `
        <div class="course-card">
            <div class="difficulty-badge difficulty-${course.difficulty}">${course.difficulty}</div>
            <img src="${course.thumbnail}" alt="${course.title}" class="thumbnail">
            <div class="course-content">
                <h2 class="course-title">${course.title}</h2>
                <p class="course-description">${course.description}</p>
                <div class="tags">
                    ${course.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${course.link}" target="_blank" class="course-link">Watch Course</a>
            </div>
        </div>
    `;
}

// Function to render courses
function renderCourses(coursesToRender) {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = coursesToRender.map(course => createCourseCard(course)).join('');
}

// Function to filter courses based on search input and filters
function filterCourses(searchTerm, languageFilter, difficultyFilter, programmingLanguageFilter, contentTypeFilter) {
    searchTerm = searchTerm.toLowerCase();
    return courses.filter(course => {
        const matchesSearch = 
            course.title.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm) ||
            course.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        const matchesLanguage = languageFilter === 'all' || course.language === languageFilter;
        const matchesDifficulty = difficultyFilter === 'all' || course.difficulty === difficultyFilter;
        
        // Check if course tags include the selected programming language
        const matchesProgrammingLanguage = programmingLanguageFilter === 'all' || 
            course.tags.some(tag => tag.toLowerCase() === programmingLanguageFilter);
        
        // Check if the course matches the selected content type
        const matchesContentType = contentTypeFilter === 'all' || 
            (contentTypeFilter === 'playlist' && course.link.includes('playlist')) ||
            (contentTypeFilter === 'oneshot' && !course.link.includes('playlist'));
        
        return matchesSearch && matchesLanguage && matchesDifficulty && 
               matchesProgrammingLanguage && matchesContentType;
    });
}

// Function to update courses based on all filters
function updateCourses() {
    const searchInput = document.getElementById('searchInput');
    const languageFilter = document.getElementById('languageFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const programmingLanguageFilter = document.getElementById('programmingLanguageFilter');
    const contentTypeFilter = document.getElementById('contentTypeFilter');

    const filteredCourses = filterCourses(
        searchInput.value,
        languageFilter.value,
        difficultyFilter.value,
        programmingLanguageFilter.value,
        contentTypeFilter.value
    );
    renderCourses(filteredCourses);
}

// Function to update filter count
function updateFilterCount() {
    const languageFilter = document.getElementById('languageFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const programmingLanguageFilter = document.getElementById('programmingLanguageFilter');
    const contentTypeFilter = document.getElementById('contentTypeFilter');
    
    let count = 0;
    if (languageFilter.value !== 'all') count++;
    if (difficultyFilter.value !== 'all') count++;
    if (programmingLanguageFilter.value !== 'all') count++;
    if (contentTypeFilter.value !== 'all') count++;
    
    document.querySelector('.filter-count').textContent = count;
}

// Function to reset filters
function resetFilters() {
    const languageFilter = document.getElementById('languageFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const programmingLanguageFilter = document.getElementById('programmingLanguageFilter');
    const contentTypeFilter = document.getElementById('contentTypeFilter');
    
    languageFilter.value = 'all';
    difficultyFilter.value = 'all';
    programmingLanguageFilter.value = 'all';
    contentTypeFilter.value = 'all';
    
    updateFilterCount();
    updateCourses();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Show quiz modal automatically when page loads
    showQuizModal();

    // Add event listeners for skip buttons
    const skipButtons = document.querySelectorAll('#skipQuiz');
    skipButtons.forEach(button => {
        button.addEventListener('click', skipQuiz);
    });

    // Add event listeners for quiz navigation
    document.getElementById('startQuiz').addEventListener('click', startQuiz);
    document.getElementById('backQuestion').addEventListener('click', goBack);
    document.getElementById('nextQuestion').addEventListener('click', goNext);
    document.getElementById('submitQuiz').addEventListener('click', showResult);
    document.getElementById('startLearning').addEventListener('click', closeQuizModal);

    // Render empty courses initially
    renderCourses(courses);

    // Get filter elements
    const searchInput = document.getElementById('searchInput');
    const languageFilter = document.getElementById('languageFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const programmingLanguageFilter = document.getElementById('programmingLanguageFilter');
    const contentTypeFilter = document.getElementById('contentTypeFilter');

    // Add event listeners for all filters
    searchInput.addEventListener('input', updateCourses);
    languageFilter.addEventListener('change', () => {
        updateFilterCount();
        updateCourses();
    });
    difficultyFilter.addEventListener('change', () => {
        updateFilterCount();
        updateCourses();
    });
    programmingLanguageFilter.addEventListener('change', () => {
        updateFilterCount();
        updateCourses();
    });
    contentTypeFilter.addEventListener('change', () => {
        updateFilterCount();
        updateCourses();
    });

    // Add event listeners for filter actions
    document.querySelector('.apply-filters').addEventListener('click', updateCourses);
    document.querySelector('.reset-filters').addEventListener('click', resetFilters);

    // Initialize filter count
    updateFilterCount();
}); 