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
    },
    {
        id: 5,
        title: "React Hooks Fundamentals",
        description: "Understanding React Hooks like useState, useEffect, useContext, and custom hooks for functional components.",
        tags: ["React", "JavaScript", "Web Development", "Frontend"],
        language: "javascript",
        category: "frameworks"
    },
    {
        id: 6,
        title: "Python Data Analysis with Pandas",
        description: "Learn how to use Pandas for data manipulation, analysis, and visualization in Python.",
        tags: ["Python", "Data Science", "Pandas", "Data Analysis"],
        language: "python",
        category: "advanced"
    },
    {
        id: 7,
        title: "Java Spring Boot Microservices",
        description: "Building scalable microservices architecture using Spring Boot, including service discovery, configuration, and API gateways.",
        tags: ["Java", "Spring Boot", "Microservices", "Backend"],
        language: "java",
        category: "frameworks"
    },
    {
        id: 8,
        title: "C# ASP.NET Core Web API",
        description: "Creating RESTful APIs with ASP.NET Core, including routing, controllers, middleware, and authentication.",
        tags: ["C#", "ASP.NET", "Web API", "Backend"],
        language: "csharp",
        category: "frameworks"
    },
    {
        id: 9,
        title: "JavaScript Promises and Async/Await",
        description: "Understanding asynchronous programming in JavaScript with Promises, async/await, and handling asynchronous operations.",
        tags: ["JavaScript", "Asynchronous", "Programming"],
        language: "javascript",
        category: "advanced"
    },
    {
        id: 10,
        title: "Python Machine Learning Basics",
        description: "Introduction to machine learning concepts and implementation using Python libraries like scikit-learn and TensorFlow.",
        tags: ["Python", "Machine Learning", "Data Science", "AI"],
        language: "python",
        category: "advanced"
    },
    {
        id: 11,
        title: "C++ STL Containers",
        description: "Overview of Standard Template Library containers in C++, including vectors, lists, maps, and sets.",
        tags: ["C++", "STL", "Data Structures", "Programming"],
        language: "cpp",
        category: "data-structures"
    },
    {
        id: 12,
        title: "Java Design Patterns",
        description: "Common design patterns in Java, including creational, structural, and behavioral patterns with practical examples.",
        tags: ["Java", "Design Patterns", "Software Architecture", "OOP"],
        language: "java",
        category: "advanced"
    },
    {
        id: 13,
        title: "JavaScript ES6+ Features",
        description: "Modern JavaScript features introduced in ES6 and later, including arrow functions, destructuring, spread/rest operators, and modules.",
        tags: ["JavaScript", "ES6", "Modern JavaScript", "Programming"],
        language: "javascript",
        category: "basics"
    },
    {
        id: 14,
        title: "Python Web Scraping",
        description: "Techniques for extracting data from websites using Python libraries like Beautiful Soup, Scrapy, and Selenium.",
        tags: ["Python", "Web Scraping", "Data Extraction", "Automation"],
        language: "python",
        category: "advanced"
    },
    {
        id: 15,
        title: "C# LINQ Fundamentals",
        description: "Understanding Language Integrated Query (LINQ) in C# for querying collections, databases, and XML.",
        tags: ["C#", "LINQ", "Data Querying", "Programming"],
        language: "csharp",
        category: "basics"
    },
    {
        id: 16,
        title: "C++ Memory Management",
        description: "Understanding memory management in C++, including stack vs heap, pointers, references, and smart pointers.",
        tags: ["C++", "Memory Management", "Pointers", "Programming"],
        language: "cpp",
        category: "advanced"
    },
    {
        id: 17,
        title: "Java Multithreading",
        description: "Concurrent programming in Java using threads, synchronization, thread pools, and the Executor framework.",
        tags: ["Java", "Multithreading", "Concurrency", "Programming"],
        language: "java",
        category: "advanced"
    },
    {
        id: 18,
        title: "JavaScript Testing with Jest",
        description: "Writing and running tests for JavaScript applications using the Jest testing framework.",
        tags: ["JavaScript", "Testing", "Jest", "Quality Assurance"],
        language: "javascript",
        category: "frameworks"
    },
    {
        id: 19,
        title: "Python Flask Web Development",
        description: "Building web applications with Flask, including routing, templates, forms, and database integration.",
        tags: ["Python", "Flask", "Web Development", "Backend"],
        language: "python",
        category: "frameworks"
    },
    {
        id: 20,
        title: "C# Entity Framework Core",
        description: "Working with Entity Framework Core for database access, including code-first approach, migrations, and relationships.",
        tags: ["C#", "Entity Framework", "Database", "ORM"],
        language: "csharp",
        category: "frameworks"
    }
];

// DOM Elements
const notesContainer = document.getElementById('notesContainer');
const searchInput = document.getElementById('searchInput');
const languageFilter = document.getElementById('languageFilter');
const categoryFilter = document.getElementById('categoryFilter');

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
    
    // Add click event to open the note
    card.addEventListener('click', () => {
        openNote(note);
    });
    
    return card;
}

// Function to open a note
function openNote(note) {
    // Create a modal to display the full note content
    const modal = document.createElement('div');
    modal.className = 'note-modal';
    
    // Create a search query based on the note title and tags
    const searchQuery = `${note.title} ${note.tags.join(' ')}`;
    
    // Get direct links to the most relevant pages
    const geeksforgeeksLink = getGeeksforGeeksDirectLink(note);
    const w3schoolsLink = getW3SchoolsDirectLink(note);
    
    // Create the modal content
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${note.title}</h2>
            <div class="note-details">
                <p>${note.description}</p>
                <div class="note-tags">
                    ${note.tags.map(tag => `<span class="note-tag">${tag}</span>`).join('')}
                </div>
                <div class="note-meta">
                    <span>Language: ${note.language}</span>
                    <span>Category: ${note.category}</span>
                </div>
                <div class="geeksforgeeks-content">
                    <h3>Learning Resources</h3>
                    <div class="resources-tabs">
                        <button class="resource-tab active" data-tab="geeksforgeeks">GeeksforGeeks</button>
                        <button class="resource-tab" data-tab="w3schools">W3Schools</button>
                    </div>
                    <div class="resource-content" id="geeksforgeeks-content">
                        <div class="geeksforgeeks-links">
                            <a href="${geeksforgeeksLink}" target="_blank" class="resource-link">
                                <i class="fas fa-external-link-alt"></i> View on GeeksforGeeks
                            </a>
                            <div class="resource-articles">
                                <h4>Related Articles</h4>
                                <ul>
                                    ${generateGeeksforGeeksArticles(note)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="resource-content" id="w3schools-content" style="display: none;">
                        <div class="w3schools-links">
                            <a href="${w3schoolsLink}" target="_blank" class="resource-link">
                                <i class="fas fa-external-link-alt"></i> View on W3Schools
                            </a>
                            <div class="resource-articles">
                                <h4>Related Tutorials</h4>
                                <ul>
                                    ${generateW3SchoolsArticles(note)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add the modal to the document
    document.body.appendChild(modal);
    
    // Add event listener to close the modal
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Close modal when clicking outside of it
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Add event listeners for tabs
    const tabs = modal.querySelectorAll('.resource-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all content
            const contents = modal.querySelectorAll('.resource-content');
            contents.forEach(content => content.style.display = 'none');
            
            // Show selected content
            const selectedContent = modal.querySelector(`#${tab.dataset.tab}-content`);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
        });
    });
}

// Function to get the most relevant direct link to GeeksforGeeks
function getGeeksforGeeksDirectLink(note) {
    // Base URL for GeeksforGeeks
    const baseUrl = 'https://www.geeksforgeeks.org';
    
    // Determine the most relevant page based on language and category
    if (note.language === 'python') {
        if (note.category === 'basics') {
            return `${baseUrl}/python-programming-language/`;
        } else if (note.category === 'advanced') {
            return `${baseUrl}/advanced-python-programming/`;
        } else if (note.category === 'data-structures') {
            return `${baseUrl}/python-data-structures/`;
        } else if (note.category === 'algorithms') {
            return `${baseUrl}/python-algorithms/`;
        } else if (note.category === 'frameworks') {
            return `${baseUrl}/python-frameworks/`;
        }
        return `${baseUrl}/python-programming-language/`;
    } else if (note.language === 'javascript') {
        if (note.category === 'basics') {
            return `${baseUrl}/javascript/`;
        } else if (note.category === 'advanced') {
            return `${baseUrl}/advanced-javascript/`;
        } else if (note.category === 'frameworks') {
            return `${baseUrl}/javascript-frameworks/`;
        }
        return `${baseUrl}/javascript/`;
    } else if (note.language === 'java') {
        if (note.category === 'basics') {
            return `${baseUrl}/java/`;
        } else if (note.category === 'advanced') {
            return `${baseUrl}/advanced-java/`;
        } else if (note.category === 'data-structures') {
            return `${baseUrl}/java-data-structures/`;
        } else if (note.category === 'algorithms') {
            return `${baseUrl}/java-algorithms/`;
        } else if (note.category === 'frameworks') {
            return `${baseUrl}/java-frameworks/`;
        }
        return `${baseUrl}/java/`;
    } else if (note.language === 'cpp') {
        if (note.category === 'basics') {
            return `${baseUrl}/c-plus-plus/`;
        } else if (note.category === 'advanced') {
            return `${baseUrl}/advanced-cpp/`;
        } else if (note.category === 'data-structures') {
            return `${baseUrl}/cpp-data-structures/`;
        } else if (note.category === 'algorithms') {
            return `${baseUrl}/cpp-algorithms/`;
        }
        return `${baseUrl}/c-plus-plus/`;
    } else if (note.language === 'csharp') {
        if (note.category === 'basics') {
            return `${baseUrl}/csharp-programming-language/`;
        } else if (note.category === 'advanced') {
            return `${baseUrl}/advanced-csharp/`;
        } else if (note.category === 'frameworks') {
            return `${baseUrl}/csharp-frameworks/`;
        }
        return `${baseUrl}/csharp-programming-language/`;
    }
    
    // Default to the main page if no specific match
    return baseUrl;
}

// Function to get the most relevant direct link to W3Schools
function getW3SchoolsDirectLink(note) {
    // Base URL for W3Schools
    const baseUrl = 'https://www.w3schools.com';
    
    // Determine the most relevant page based on language and category
    if (note.language === 'python') {
        if (note.category === 'basics') {
            return `${baseUrl}/python/`;
        } else if (note.category === 'advanced') {
            return `${baseUrl}/python/python_reference.asp`;
        } else if (note.category === 'data-structures') {
            return `${baseUrl}/python/python_lists.asp`;
        }
        return `${baseUrl}/python/`;
    } else if (note.language === 'javascript') {
        if (note.category === 'basics') {
            return `${baseUrl}/js/`;
        } else if (note.category === 'advanced') {
            return `${baseUrl}/js/js_advanced.asp`;
        } else if (note.category === 'frameworks') {
            return `${baseUrl}/js/js_frameworks.asp`;
        }
        return `${baseUrl}/js/`;
    } else if (note.language === 'java') {
        if (note.category === 'basics') {
            return `${baseUrl}/java/`;
        } else if (note.category === 'advanced') {
            return `${baseUrl}/java/java_ref.asp`;
        }
        return `${baseUrl}/java/`;
    } else if (note.language === 'cpp') {
        if (note.category === 'basics') {
            return `${baseUrl}/cpp/`;
        } else if (note.category === 'advanced') {
            return `${baseUrl}/cpp/cpp_ref.asp`;
        }
        return `${baseUrl}/cpp/`;
    } else if (note.language === 'csharp') {
        if (note.category === 'basics') {
            return `${baseUrl}/cs/`;
        } else if (note.category === 'advanced') {
            return `${baseUrl}/cs/cs_ref.asp`;
        }
        return `${baseUrl}/cs/`;
    }
    
    // Default to the main page if no specific match
    return baseUrl;
}

// Function to generate mock GeeksforGeeks articles based on the note
function generateGeeksforGeeksArticles(note) {
    // This is a mock implementation that generates relevant articles based on the note
    const articles = [];
    const baseUrl = 'https://www.geeksforgeeks.org';
    
    // Add articles based on the note's language and category
    if (note.language === 'python') {
        articles.push({
            title: `Python ${note.title}`,
            url: `${baseUrl}/python-programming-language/`
        });
        
        if (note.category === 'basics') {
            articles.push({
                title: 'Python Basics',
                url: `${baseUrl}/python-basics/`
            });
        } else if (note.category === 'advanced') {
            articles.push({
                title: 'Advanced Python',
                url: `${baseUrl}/advanced-python-programming/`
            });
        }
    } else if (note.language === 'javascript') {
        articles.push({
            title: `JavaScript ${note.title}`,
            url: `${baseUrl}/javascript/`
        });
        
        if (note.category === 'frameworks') {
            articles.push({
                title: 'JavaScript Frameworks',
                url: `${baseUrl}/javascript-frameworks/`
            });
        }
    } else if (note.language === 'java') {
        articles.push({
            title: `Java ${note.title}`,
            url: `${baseUrl}/java/`
        });
    } else if (note.language === 'cpp') {
        articles.push({
            title: `C++ ${note.title}`,
            url: `${baseUrl}/c-plus-plus/`
        });
    } else if (note.language === 'csharp') {
        articles.push({
            title: `C# ${note.title}`,
            url: `${baseUrl}/csharp-programming-language/`
        });
    }
    
    // Add a generic article based on the category
    if (note.category === 'data-structures') {
        articles.push({
            title: 'Data Structures',
            url: `${baseUrl}/data-structures/`
        });
    } else if (note.category === 'algorithms') {
        articles.push({
            title: 'Algorithms',
            url: `${baseUrl}/fundamentals-of-algorithms/`
        });
    }
    
    // Generate HTML for the articles
    return articles.map(article => `
        <li>
            <a href="${article.url}" target="_blank">
                <i class="fas fa-book"></i> ${article.title}
            </a>
        </li>
    `).join('');
}

// Function to generate mock W3Schools articles based on the note
function generateW3SchoolsArticles(note) {
    // This is a mock implementation that generates relevant W3Schools tutorials based on the note
    const articles = [];
    const baseUrl = 'https://www.w3schools.com';
    
    // Add articles based on the note's language and category
    if (note.language === 'python') {
        articles.push({
            title: `Python ${note.title}`,
            url: `${baseUrl}/python/`
        });
        
        if (note.category === 'basics') {
            articles.push({
                title: 'Python Tutorial',
                url: `${baseUrl}/python/python_intro.asp`
            });
        } else if (note.category === 'advanced') {
            articles.push({
                title: 'Python Advanced',
                url: `${baseUrl}/python/python_reference.asp`
            });
        }
    } else if (note.language === 'javascript') {
        articles.push({
            title: `JavaScript ${note.title}`,
            url: `${baseUrl}/js/`
        });
        
        if (note.category === 'frameworks') {
            articles.push({
                title: 'JavaScript Frameworks',
                url: `${baseUrl}/js/js_frameworks.asp`
            });
        }
    } else if (note.language === 'java') {
        articles.push({
            title: `Java ${note.title}`,
            url: `${baseUrl}/java/`
        });
    } else if (note.language === 'cpp') {
        articles.push({
            title: `C++ ${note.title}`,
            url: `${baseUrl}/cpp/`
        });
    } else if (note.language === 'csharp') {
        articles.push({
            title: `C# ${note.title}`,
            url: `${baseUrl}/cs/`
        });
    }
    
    // Add a generic article based on the category
    if (note.category === 'data-structures') {
        articles.push({
            title: 'Data Structures',
            url: `${baseUrl}/dsa/`
        });
    } else if (note.category === 'algorithms') {
        articles.push({
            title: 'Algorithms',
            url: `${baseUrl}/dsa/dsa_algorithms.php`
        });
    }
    
    // Generate HTML for the articles
    return articles.map(article => `
        <li>
            <a href="${article.url}" target="_blank">
                <i class="fas fa-graduation-cap"></i> ${article.title}
            </a>
        </li>
    `).join('');
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
}

// Show error message
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    errorText.textContent = message;
    errorMessage.style.display = 'block';
}

// Hide error message
function hideError() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', initializeNotes); 