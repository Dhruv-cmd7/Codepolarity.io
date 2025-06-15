// Initialize Monaco Editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
require(['vs/editor/editor.main'], function() {
    // Default templates for different languages
    const templates = {
        javascript: '// Start coding here...\n',
        html: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Hello World!</h1>\n</body>\n</html>',
        css: `/* Add your CSS styles here */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Add more styles below */`,
        python: `# Python code template
def main():
    # Your code here
    print("Hello, World!")
    
    # Example: Working with numbers
    num1 = 10
    num2 = 5
    print(f"Sum: {num1 + num2}")
    print(f"Difference: {num1 - num2}")
    print(f"Product: {num1 * num2}")
    print(f"Division: {num1 / num2}")
    
    # Example: Working with strings
    name = "Python"
    print(f"Welcome to {name} programming!")
    
    # Example: Working with lists
    fruits = ["apple", "banana", "orange"]
    print("\\nFruits list:")
    for fruit in fruits:
        print(f"- {fruit}")
    
    # Example: Working with dictionaries
    person = {
        "name": "John",
        "age": 30,
        "city": "New York"
    }
    print("\\nPerson details:")
    for key, value in person.items():
        print(f"{key}: {value}")

if __name__ == "__main__":
    main()`
    };

    // Create editor instance
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: templates.javascript,
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: {
            enabled: true
        },
        fontSize: 14,
        lineNumbers: 'on',
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
    });

    // Language selector
    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', (e) => {
        const language = e.target.value;
        monaco.editor.setModelLanguage(editor.getModel(), language);
        // Set template for the selected language
        editor.setValue(templates[language] || '');
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    let isDarkTheme = true;
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    
    themeToggle.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark-theme');
        monaco.editor.setTheme(isDarkTheme ? 'vs-dark' : 'vs-light');
        themeToggle.innerHTML = isDarkTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Split view toggle
    const splitViewToggle = document.getElementById('split-view-toggle');
    const splitViewSection = document.querySelector('.split-view-section');
    const splitViewMode = document.getElementById('split-view-mode');
    const splitViewContent = document.getElementById('split-view-content');

    splitViewToggle.addEventListener('click', () => {
        splitViewSection.style.display = splitViewSection.style.display === 'none' ? 'flex' : 'none';
    });

    splitViewMode.addEventListener('change', (e) => {
        const mode = e.target.value;
        if (mode === 'notes') {
            splitViewContent.innerHTML = `
                <textarea class="notes-editor" placeholder="Take notes here..."></textarea>
            `;
        }
    });

    // Run button functionality
    const runButton = document.getElementById('run-button');
    const outputContent = document.getElementById('output-content');
    const clearOutput = document.getElementById('clear-output');

    // Create preview iframe for HTML/CSS
    const previewFrame = document.createElement('iframe');
    previewFrame.style.width = '100%';
    previewFrame.style.height = '100%';
    previewFrame.style.border = 'none';
    previewFrame.style.display = 'none';
    previewFrame.style.backgroundColor = '#ffffff';
    outputContent.appendChild(previewFrame);

    // Function to update preview
    function updatePreview(content, isHTML = false) {
        // Clear previous content
        outputContent.innerHTML = '';
        outputContent.appendChild(previewFrame);
        
        // Show preview frame
        previewFrame.style.display = 'block';
        
        // Set content
        if (isHTML) {
            previewFrame.srcdoc = content;
        } else {
            previewFrame.srcdoc = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>${content}</style>
                </head>
                <body>
                    <div class="container">
                        <h1>CSS Preview</h1>
                        
                        <section class="text-elements">
                            <h2>Text Elements</h2>
                            <p>This is a regular paragraph with some <strong>bold</strong> and <em>italic</em> text.</p>
                            <p class="highlight">This is a highlighted paragraph.</p>
                            <blockquote>This is a blockquote element.</blockquote>
                        </section>

                        <section class="lists">
                            <h2>Lists</h2>
                            <ul>
                                <li>Unordered list item 1</li>
                                <li>Unordered list item 2</li>
                                <li>Unordered list item 3</li>
                            </ul>
                            <ol>
                                <li>Ordered list item 1</li>
                                <li>Ordered list item 2</li>
                                <li>Ordered list item 3</li>
                            </ol>
                        </section>

                        <section class="forms">
                            <h2>Form Elements</h2>
                            <form>
                                <div class="form-group">
                                    <label for="text-input">Text Input:</label>
                                    <input type="text" id="text-input" placeholder="Enter text">
                                </div>
                                <div class="form-group">
                                    <label for="number-input">Number Input:</label>
                                    <input type="number" id="number-input" placeholder="Enter number">
                                </div>
                                <div class="form-group">
                                    <label for="textarea">Textarea:</label>
                                    <textarea id="textarea" placeholder="Enter long text"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="select">Select:</label>
                                    <select id="select">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                                <button type="submit">Submit Button</button>
                            </form>
                        </section>

                        <section class="boxes">
                            <h2>Boxes and Cards</h2>
                            <div class="box">This is a box with a class</div>
                            <div class="card">
                                <h3>Card Title</h3>
                                <p>This is a card with some content.</p>
                                <button>Card Button</button>
                            </div>
                        </section>

                        <section class="buttons">
                            <h2>Buttons</h2>
                            <button class="primary">Primary Button</button>
                            <button class="secondary">Secondary Button</button>
                            <button class="outline">Outline Button</button>
                        </section>

                        <section class="grid">
                            <h2>Grid Layout</h2>
                            <div class="grid-container">
                                <div class="grid-item">Grid Item 1</div>
                                <div class="grid-item">Grid Item 2</div>
                                <div class="grid-item">Grid Item 3</div>
                                <div class="grid-item">Grid Item 4</div>
                            </div>
                        </section>
                    </div>
                </body>
                </html>
            `;
        }
    }

    // Function to execute Python code using Pyodide
    async function executePython(code) {
        try {
            // Check if Pyodide is loaded
            if (!window.pyodide) {
                outputContent.innerHTML = 'Loading Python environment...\n';
                await new Promise(resolve => {
                    const checkPyodide = setInterval(() => {
                        if (window.pyodide) {
                            clearInterval(checkPyodide);
                            resolve();
                        }
                    }, 100);
                });
            }

            // Clear previous output
            outputContent.innerHTML = 'Running Python code...\n';

            // Set up stdout capture
            window.pyodide.runPython(`
                import sys
                from io import StringIO
                sys.stdout = StringIO()
            `);

            // Run the Python code
            try {
                await window.pyodide.runPythonAsync(code);
            } catch (error) {
                return `Python Error: ${error.message}`;
            }

            // Get the output
            const stdout = window.pyodide.runPython("sys.stdout.getvalue()");
            return stdout || "No output";
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }

    runButton.addEventListener('click', async () => {
        const code = editor.getValue();
        const language = languageSelector.value;
        
        try {
            if (language === 'javascript') {
                outputContent.innerHTML = 'Running code...\n';
                const result = await executeJavaScript(code);
                outputContent.innerHTML = result;
            } else if (language === 'html') {
                updatePreview(code, true);
            } else if (language === 'css') {
                updatePreview(code, false);
            } else if (language === 'python') {
                const result = await executePython(code);
                outputContent.innerHTML = result;
            } else {
                outputContent.innerHTML = 'Language execution not implemented yet.\n';
            }
        } catch (error) {
            outputContent.innerHTML = `Error: ${error.message}\n`;
        }
    });

    clearOutput.addEventListener('click', () => {
        outputContent.innerHTML = '';
        previewFrame.style.display = 'none';
    });

    // Save functionality
    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', () => {
        const code = editor.getValue();
        const language = languageSelector.value;
        
        // Save to localStorage
        const savedCode = {
            code,
            language,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('lastSavedCode', JSON.stringify(savedCode));
        alert('Code saved successfully!');
    });

    // Load last saved code
    const lastSavedCode = localStorage.getItem('lastSavedCode');
    if (lastSavedCode) {
        const { code, language } = JSON.parse(lastSavedCode);
        editor.setValue(code);
        languageSelector.value = language;
        monaco.editor.setModelLanguage(editor.getModel(), language);
    }

    // Helper function to execute JavaScript code
    async function executeJavaScript(code) {
        return new Promise((resolve, reject) => {
            try {
                // Create a safe execution environment
                const safeEval = new Function('console', `
                    const originalConsole = console;
                    const output = [];
                    console = {
                        log: (...args) => {
                            output.push(args.join(' '));
                            originalConsole.log(...args);
                        },
                        error: (...args) => {
                            output.push('Error: ' + args.join(' '));
                            originalConsole.error(...args);
                        }
                    };
                    try {
                        ${code}
                    } catch (error) {
                        console.error(error.message);
                    }
                    return output.join('\\n');
                `);
                
                const result = safeEval(console);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }
}); 