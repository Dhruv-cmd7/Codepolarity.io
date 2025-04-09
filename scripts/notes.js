// Sample notes data
const notesData = [
    {
        id: 1,
        title: "Python Basics",
        description: "A comprehensive guide to Python programming fundamentals including variables, data types, control structures, and functions.",
        tags: ["Python", "Basics", "Programming"],
        language: "python",
        category: "basics"
    },
    {
        id: 2,
        title: "JavaScript DOM Manipulation",
        description: "Learn how to interact with the Document Object Model using JavaScript. Includes event handling and dynamic content creation.",
        tags: ["JavaScript", "DOM", "Web Development"],
        language: "javascript",
        category: "advanced"
    },
    {
        id: 3,
        title: "Data Structures in Java",
        description: "Detailed explanation of fundamental data structures implemented in Java, including arrays, linked lists, stacks, and queues.",
        tags: ["Java", "Data Structures", "Algorithms"],
        language: "java",
        category: "data-structures"
    },
    {
        id: 4,
        title: "C++ Object-Oriented Programming",
        description: "Master object-oriented programming concepts in C++ including classes, inheritance, polymorphism, and encapsulation.",
        tags: ["C++", "OOP", "Programming"],
        language: "cpp",
        category: "advanced"
    }
];

// DOM Elements
const notesContainer = document.getElementById('notesContainer');
const searchInput = document.getElementById('searchInput');
const languageFilter = document.getElementById('languageFilter');
const categoryFilter = document.getElementById('categoryFilter');
const generateBtn = document.getElementById('generateNote');
const aiResponse = document.getElementById('aiResponse');
const noteContent = document.getElementById('noteContent');
const loadingOverlay = document.getElementById('loadingOverlay');
const saveNoteBtn = document.getElementById('saveNote');
const downloadNoteBtn = document.getElementById('downloadNote');

// Initialize notes display
function initializeNotes() {
    displayNotes(notesData);
    setupEventListeners();
}

// Display notes in the container
function displayNotes(notes) {
    notesContainer.innerHTML = '';
    notes.forEach(note => {
        const noteCard = createNoteCard(note);
        notesContainer.appendChild(noteCard);
    });
}

// Create a note card element
function createNoteCard(note) {
    const card = document.createElement('div');
    card.className = 'note-card';
    card.innerHTML = `
        <div class="note-content">
            <h3 class="note-title">${note.title}</h3>
            <p class="note-description">${note.description}</p>
            <div class="note-tags">
                ${note.tags.map(tag => `<span class="note-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    return card;
}

// Filter notes based on search and filters
function filterNotes() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedLanguage = languageFilter.value;
    const selectedCategory = categoryFilter.value;

    const filteredNotes = notesData.filter(note => {
        const matchesSearch = note.title.toLowerCase().includes(searchTerm) ||
                            note.description.toLowerCase().includes(searchTerm) ||
                            note.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        const matchesLanguage = selectedLanguage === 'all' || note.language === selectedLanguage;
        const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;

        return matchesSearch && matchesLanguage && matchesCategory;
    });

    displayNotes(filteredNotes);
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', filterNotes);
    languageFilter.addEventListener('change', filterNotes);
    categoryFilter.addEventListener('change', filterNotes);
    generateBtn.addEventListener('click', generateNote);
    saveNoteBtn.addEventListener('click', saveNote);
    downloadNoteBtn.addEventListener('click', downloadNote);
}

// Generate note using Perplexity AI
async function generateNote() {
    const topic = document.getElementById('topicInput').value;
    const language = document.getElementById('languageSelect').value;
    const difficulty = document.getElementById('difficultySelect').value;
    const context = document.getElementById('additionalContext').value;

    if (!topic) {
        alert('Please enter a topic');
        return;
    }

    showLoading();

    try {
        // Construct the prompt for Perplexity AI
        const prompt = `Create a comprehensive coding note about ${topic} in ${language}. 
                       Difficulty level: ${difficulty}. 
                       Additional context: ${context || 'None provided'}. 
                       Include code examples, explanations, and best practices.`;

        // Make API call to Perplexity AI
        const response = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_PERPLEXITY_API_KEY' // Replace with actual API key
            },
            body: JSON.stringify({
                model: 'pplx-7b-online',
                messages: [{
                    role: 'system',
                    content: 'You are a helpful coding instructor creating detailed programming notes.'
                }, {
                    role: 'user',
                    content: prompt
                }]
            })
        });

        const data = await response.json();
        
        // Display the generated note
        displayGeneratedNote(data.choices[0].message.content);
    } catch (error) {
        console.error('Error generating note:', error);
        alert('Error generating note. Please try again.');
    } finally {
        hideLoading();
    }
}

// Display the generated note
function displayGeneratedNote(content) {
    noteContent.innerHTML = formatNoteContent(content);
    aiResponse.style.display = 'block';
}

// Format the note content with proper styling
function formatNoteContent(content) {
    // Convert markdown-style content to HTML
    let formattedContent = content
        .replace(/\n/g, '<br>')
        .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            return `<pre><code class="language-${lang || 'plaintext'}">${code.trim()}</code></pre>`;
        })
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>');

    return formattedContent;
}

// Save note to local storage
function saveNote() {
    const title = document.getElementById('topicInput').value;
    const content = noteContent.innerHTML;
    
    if (!title || !content) {
        alert('No note to save');
        return;
    }

    const savedNotes = JSON.parse(localStorage.getItem('savedNotes') || '[]');
    savedNotes.push({
        id: Date.now(),
        title,
        content,
        date: new Date().toISOString()
    });

    localStorage.setItem('savedNotes', JSON.stringify(savedNotes));
    alert('Note saved successfully!');
}

// Download note as HTML file
function downloadNote() {
    const title = document.getElementById('topicInput').value;
    const content = noteContent.innerHTML;
    
    if (!title || !content) {
        alert('No note to download');
        return;
    }

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${title}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                pre {
                    background: #f4f4f4;
                    padding: 15px;
                    border-radius: 5px;
                    overflow-x: auto;
                }
                code {
                    font-family: 'Courier New', Courier, monospace;
                }
            </style>
        </head>
        <body>
            <h1>${title}</h1>
            ${content}
        </body>
        </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Show loading overlay
function showLoading() {
    loadingOverlay.style.display = 'flex';
}

// Hide loading overlay
function hideLoading() {
    loadingOverlay.style.display = 'none';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', initializeNotes); 