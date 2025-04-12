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

// Sample course data
const courses = [
    {
        title: "Python for Beginners",
        description: "Learn Python programming from scratch with this comprehensive course",
        thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
        difficulty: "beginner",
        language: "english",
        tags: ["python", "programming", "beginner"],
        link: "https://www.youtube.com/playlist?list=PLAYLIST_ID"
    }
];

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

// Function to debounce search input to prevent excessive filtering
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Function to filter courses
function filterCourses() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const languageFilter = document.getElementById('languageFilter').value;
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    const programmingLanguageFilter = document.getElementById('programmingLanguageFilter').value;
    const contentTypeFilter = document.getElementById('contentTypeFilter').value;

    // Use cached results if filters haven't changed
    if (window.cachedFilters && 
        window.cachedFilters.searchTerm === searchTerm &&
        window.cachedFilters.languageFilter === languageFilter &&
        window.cachedFilters.difficultyFilter === difficultyFilter &&
        window.cachedFilters.programmingLanguageFilter === programmingLanguageFilter &&
        window.cachedFilters.contentTypeFilter === contentTypeFilter &&
        window.cachedResults) {
        return window.cachedResults;
    }

    // Cache current filter values
    window.cachedFilters = {
        searchTerm,
        languageFilter,
        difficultyFilter,
        programmingLanguageFilter,
        contentTypeFilter
    };

    const filteredCourses = courses.filter(course => {
        // Search term matching - check if search term is empty or matches any course property
        const matchesSearch = searchTerm === '' || 
            course.title.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm) ||
            course.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        // Filter matching
        const matchesLanguage = languageFilter === 'all' || course.language.toLowerCase() === languageFilter.toLowerCase();
        const matchesDifficulty = difficultyFilter === 'all' || course.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
        const matchesProgrammingLanguage = programmingLanguageFilter === 'all' || 
            course.tags.some(tag => tag.toLowerCase() === programmingLanguageFilter.toLowerCase());
        const matchesContentType = contentTypeFilter === 'all' || 
            (contentTypeFilter === 'playlist' && course.link.includes('playlist')) ||
            (contentTypeFilter === 'oneshot' && !course.link.includes('playlist'));

        return matchesSearch && matchesLanguage && matchesDifficulty && 
               matchesProgrammingLanguage && matchesContentType;
    });

    // Cache results
    window.cachedResults = filteredCourses;
    return filteredCourses;
}

// Function to render courses with optimized DOM manipulation
function renderCourses(coursesToRender) {
    const container = document.getElementById('coursesContainer');
    
    if (coursesToRender.length === 0) {
        container.innerHTML = '<div class="no-results">No courses found matching your criteria</div>';
        return;
    }
    
    // Create a document fragment for better performance
    const fragment = document.createDocumentFragment();
    
    // Create a temporary container to hold the HTML
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = coursesToRender.map(course => createCourseCard(course)).join('');
    
    // Append all child nodes to the fragment
    while (tempContainer.firstChild) {
        fragment.appendChild(tempContainer.firstChild);
    }
    
    // Clear the container and append the fragment
    container.innerHTML = '';
    container.appendChild(fragment);
}

// Function to update the course display
function updateCourses() {
    const filteredCourses = filterCourses();
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

// Function to extract YouTube video/playlist ID from URL
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Function to extract YouTube playlist ID from URL
function extractPlaylistId(url) {
    const regExp = /[?&]list=([^#&?]*)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

// Function to add a new course from YouTube link
function addNewCourse(youtubeUrl, exactYouTubeTitle, description, difficulty, language, tags) {
    const videoId = extractYouTubeId(youtubeUrl);
    const playlistId = extractPlaylistId(youtubeUrl);
    
    if (!videoId && !playlistId) {
        alert('Invalid YouTube URL');
        return false;
    }

    const contentType = playlistId ? 'playlist' : 'oneshot';
    const link = youtubeUrl;
    const thumbnail = `https://img.youtube.com/vi/${videoId || playlistId}/maxresdefault.jpg`;

    const newCourse = {
        title: exactYouTubeTitle,
        description,
        difficulty,
        language,
        tags: [...tags, contentType],
        link,
        thumbnail
    };

    courses.push(newCourse);
    updateCourses();
    return true;
}

// Function to add multiple courses from a playlist
function addPlaylistCourses(playlistUrl, exactPlaylistTitle, description, difficulty, language, tags) {
    const playlistId = extractPlaylistId(playlistUrl);
    
    if (!playlistId) {
        alert('Invalid playlist URL');
        return false;
    }

    return addNewCourse(
        playlistUrl,
        exactPlaylistTitle,
        description,
        difficulty,
        language,
        [...tags, 'playlist']
    );
}

// Function to add a one-shot video course
function addOneShotCourse(videoUrl, exactVideoTitle, description, difficulty, language, tags) {
    const videoId = extractYouTubeId(videoUrl);
    
    if (!videoId) {
        alert('Invalid video URL');
        return false;
    }

    return addNewCourse(
        videoUrl,
        exactVideoTitle,
        description,
        difficulty,
        language,
        [...tags, 'oneshot']
    );
}

// Add event listeners when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Clear existing courses
    courses.length = 0;
    
    // Course data structure
    const coursesData = {
        "Python": {
            "Hindi": [
                {
                    title: "Complete Python Tutorial for Beginners to Advanced in Hindi",
                    url: "https://www.youtube.com/playlist?list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7",
                    description: "A comprehensive Python tutorial covering everything from basics to advanced concepts in Hindi.",
                    difficulty: "intermediate",
                    tags: ["python", "hindi", "playlist"]
                },
                {
                    title: "Python Full Course in Hindi",
                    url: "https://www.youtube.com/watch?v=eTyI-M50Hu4",
                    description: "Complete Python programming course in Hindi for beginners.",
                    difficulty: "beginner",
                    tags: ["python", "hindi", "oneshot"]
                },
                {
                    title: "Python for Beginners | #100DaysOfCode in Hindi",
                    url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
                    description: "100 days of Python coding challenge in Hindi for beginners.",
                    difficulty: "beginner",
                    tags: ["python", "hindi", "playlist"]
                },
                {
                    title: "Python Tutorial for Beginners [Hindi] | Free Full Course",
                    url: "https://www.youtube.com/playlist?list=PLf0LpPWikpPe5gc6fT9wDj3Y6e97z6ZD_",
                    description: "Free Python tutorial for beginners in Hindi.",
                    difficulty: "beginner",
                    tags: ["python", "hindi", "playlist"]
                },
                {
                    title: "Python Full Course for free (2024)",
                    url: "https://www.youtube.com/watch?v=ix9cRaBkVe0",
                    description: "Complete Python course for 2024 in Hindi.",
                    difficulty: "beginner",
                    tags: ["python", "hindi", "oneshot"]
                }
            ],
            "English": [
                {
                    title: "Python Full Course for free",
                    url: "https://www.youtube.com/watch?v=XKHEtdqhLK8",
                    description: "Complete Python programming course for beginners.",
                    difficulty: "beginner",
                    tags: ["python", "english", "oneshot"]
                },
                {
                    title: "Python for Beginners – Full Course",
                    url: "https://www.youtube.com/watch?v=eWRfhZUzrAc",
                    description: "Comprehensive Python course for beginners.",
                    difficulty: "beginner",
                    tags: ["python", "english", "oneshot"]
                },
                {
                    title: "Python Full Course (2024)",
                    url: "https://www.youtube.com/watch?v=ix9cRaBkVe0",
                    description: "Updated Python course for 2024.",
                    difficulty: "beginner",
                    tags: ["python", "english", "oneshot"]
                },
                {
                    title: "Python for Beginners - Learn Python in 1 Hour",
                    url: "https://www.youtube.com/watch?v=ix9cRaBkVe0",
                    description: "Quick Python introduction for beginners in 1 hour.",
                    difficulty: "beginner",
                    tags: ["python", "english", "oneshot"]
                }
            ]
        },
        "Java": {
            "Hindi": [
                {
                    title: "Java Tutorials For Beginners In Hindi",
                    url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
                    description: "Java programming tutorials for beginners in Hindi.",
                    difficulty: "beginner",
                    tags: ["java", "hindi", "playlist"]
                },
                {
                    title: "Java Full Course Playlist in Hindi",
                    url: "https://www.youtube.com/playlist?list=PL8zXmpLDpGTyj5p94pWMnZizgAfxSj5le",
                    description: "Complete Java course in Hindi.",
                    difficulty: "intermediate",
                    tags: ["java", "hindi", "playlist"]
                },
                {
                    title: "Java Tutorials For Beginners in Hindi",
                    url: "https://www.youtube.com/playlist?list=PLf0LpPWikpPcHwAmwfVQ_hYLXadsOIpQJ",
                    description: "Java tutorials for beginners in Hindi.",
                    difficulty: "beginner",
                    tags: ["java", "hindi", "playlist"]
                },
                {
                    title: "Java Full Course Playlist",
                    url: "https://www.youtube.com/watch?v=XaEEOv2XDLQ",
                    description: "Complete Java programming course.",
                    difficulty: "intermediate",
                    tags: ["java", "hindi", "oneshot"]
                }
            ],
            "English": [
                {
                    title: "Java Full Course for free",
                    url: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
                    description: "Complete Java programming course for beginners.",
                    difficulty: "beginner",
                    tags: ["java", "english", "oneshot"]
                },
                {
                    title: "Java Programming for Beginners – Full Course",
                    url: "https://www.youtube.com/watch?v=A74TOX803D0",
                    description: "Comprehensive Java course for beginners.",
                    difficulty: "beginner",
                    tags: ["java", "english", "oneshot"]
                },
                {
                    title: "Java Full Course (2025)",
                    url: "https://www.youtube.com/watch?v=xTtL8E4LzTQ",
                    description: "Updated Java course for 2025.",
                    difficulty: "intermediate",
                    tags: ["java", "english", "oneshot"]
                },
                {
                    title: "Java Full Course | Java Tutorial for Beginners",
                    url: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
                    description: "Java tutorial for beginners.",
                    difficulty: "beginner",
                    tags: ["java", "english", "oneshot"]
                }
            ]
        },
        "JavaScript": {
            "Hindi": [
                {
                    title: "JavaScript Tutorials for Beginners in Hindi",
                    url: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
                    description: "JavaScript tutorials for beginners in Hindi.",
                    difficulty: "beginner",
                    tags: ["javascript", "hindi", "playlist"]
                },
                {
                    title: "JavaScript Mastery Course in Hindi (2024)",
                    url: "https://www.youtube.com/playlist?list=PLwgFb6VsUj_l3XGLgZTf5lXq9rPAQ9COu",
                    description: "Advanced JavaScript course in Hindi for 2024.",
                    difficulty: "advanced",
                    tags: ["javascript", "hindi", "playlist"]
                },
                {
                    title: "JavaScript Course (Hindi)",
                    url: "https://www.youtube.com/playlist?list=PLkW9FMxqUvyb5GYGth_2Q32iQqT933VT2",
                    description: "Complete JavaScript course in Hindi.",
                    difficulty: "intermediate",
                    tags: ["javascript", "hindi", "playlist"]
                },
                {
                    title: "JavaScript Full Course ❤️ | Lecture 1",
                    url: "https://www.youtube.com/watch?v=ajdRvxDWH4w",
                    description: "JavaScript full course lecture series.",
                    difficulty: "beginner",
                    tags: ["javascript", "hindi", "oneshot"]
                }
            ],
            "English": [
                {
                    title: "JavaScript Tutorial Full Course - Beginner to Pro",
                    url: "https://www.youtube.com/watch?v=EerdGm-ehJQ",
                    description: "Complete JavaScript course from beginner to professional level.",
                    difficulty: "intermediate",
                    tags: ["javascript", "english", "oneshot"]
                },
                {
                    title: "JavaScript Full Course for free (2024)",
                    url: "https://www.youtube.com/watch?v=lfmg-EJ8gm4",
                    description: "Updated JavaScript course for 2024.",
                    difficulty: "beginner",
                    tags: ["javascript", "english", "oneshot"]
                },
                {
                    title: "JavaScript Full Course (2022)",
                    url: "https://www.youtube.com/watch?v=lI1ae4REbFM",
                    description: "JavaScript course from 2022.",
                    difficulty: "intermediate",
                    tags: ["javascript", "english", "oneshot"]
                },
                {
                    title: "Learn JavaScript!",
                    url: "https://www.youtube.com/playlist?list=PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA",
                    description: "JavaScript learning playlist.",
                    difficulty: "beginner",
                    tags: ["javascript", "english", "playlist"]
                }
            ]
        },
        "C": {
            "Hindi": [
                {
                    title: "C Language Tutorials In Hindi",
                    url: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR",
                    description: "C programming tutorials in Hindi.",
                    difficulty: "beginner",
                    tags: ["c", "hindi", "playlist"]
                },
                {
                    title: "C Language Full Course in Hindi",
                    url: "https://www.youtube.com/playlist?list=PLnSDvcENZlwA--vXWNxUJaIpgbF4cd2AS",
                    description: "Complete C programming course in Hindi.",
                    difficulty: "intermediate",
                    tags: ["c", "hindi", "playlist"]
                },
                {
                    title: "C Full Course in Hindi",
                    url: "https://www.youtube.com/playlist?list=PL_aBYbH6j5ycI4EJqTEafbkFWQATyB9ty",
                    description: "C programming full course in Hindi.",
                    difficulty: "intermediate",
                    tags: ["c", "hindi", "playlist"]
                },
                {
                    title: "C Programming Tutorials in Hindi",
                    url: "https://www.youtube.com/playlist?list=PLu4-mSyb4l4QWA2GUltRBxxaliYo_7767",
                    description: "C programming tutorials in Hindi.",
                    difficulty: "beginner",
                    tags: ["c", "hindi", "playlist"]
                }
            ],
            "English": [
                {
                    title: "C Programming Full Course for Beginners",
                    url: "https://www.youtube.com/watch?v=0Sg6QHmlFJE",
                    description: "Complete C programming course for beginners.",
                    difficulty: "beginner",
                    tags: ["c", "english", "oneshot"]
                },
                {
                    title: "C Language - Complete Course",
                    url: "https://www.youtube.com/playlist?list=PLJZeYayD",
                    description: "Complete C programming language course.",
                    difficulty: "intermediate",
                    tags: ["c", "english", "playlist"]
                }
            ]
        }
    };
    
    // Add courses from the data structure
    for (const language in coursesData) {
        for (const langType in coursesData[language]) {
            coursesData[language][langType].forEach(course => {
                const isPlaylist = course.url.includes('playlist');
                if (isPlaylist) {
                    addPlaylistCourses(
                        course.url,
                        course.title,
                        course.description,
                        course.difficulty,
                        langType.toLowerCase(),
                        course.tags
                    );
                } else {
                    addOneShotCourse(
                        course.url,
                        course.title,
                        course.description,
                        course.difficulty,
                        langType.toLowerCase(),
                        course.tags
                    );
                }
            });
        }
    }
    
    // Add event listener for search input with debouncing
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', debounce(function() {
        updateCourses();
    }, 300));
    
    // Add event listeners for all filters
    const filters = [
        'languageFilter',
        'difficultyFilter',
        'programmingLanguageFilter',
        'contentTypeFilter'
    ];
    
    filters.forEach(filterId => {
        document.getElementById(filterId).addEventListener('change', updateCourses);
    });
    
    // Initial render of courses
    updateCourses();
    
    // Add event listeners for quiz buttons
    document.getElementById('startQuiz').addEventListener('click', startQuiz);
    document.getElementById('backQuestion').addEventListener('click', goBack);
    document.getElementById('nextQuestion').addEventListener('click', goNext);
    document.getElementById('submitQuiz').addEventListener('click', showResult);
    document.getElementById('skipQuizIntro').addEventListener('click', skipQuiz);
    document.getElementById('skipQuizQuestion').addEventListener('click', skipQuiz);
    document.getElementById('skipQuizResult').addEventListener('click', skipQuiz);
    document.getElementById('startLearning').addEventListener('click', closeQuizModal);
    
    // Show quiz modal when page loads
    showQuizModal();
}); 