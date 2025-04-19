// Initialize Monaco Editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
require(['vs/editor/editor.main'], function() {
    // Create editor instance
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: '// Start coding here...\n',
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

    runButton.addEventListener('click', async () => {
        const code = editor.getValue();
        const language = languageSelector.value;
        
        try {
            outputContent.innerHTML = '';
            outputContent.innerHTML += 'Running code...\n';
            
            if (language === 'javascript') {
                // Execute JavaScript code
                const result = await executeJavaScript(code);
                outputContent.innerHTML += result;
            } else {
                // For other languages, we would call a backend API
                outputContent.innerHTML += 'Language execution not implemented yet.\n';
            }
        } catch (error) {
            outputContent.innerHTML += `Error: ${error.message}\n`;
        }
    });

    clearOutput.addEventListener('click', () => {
        outputContent.innerHTML = '';
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