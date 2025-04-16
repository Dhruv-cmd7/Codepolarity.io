// Code Editor JavaScript

// Global variables
let editor;
let currentFile = null;
let openFiles = [];
let fileTree = [];
let currentTheme = 'vs-dark';
let currentLanguage = 'plaintext';

// Initialize Monaco Editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs' } });

require(['vs/editor/editor.main'], function() {
  // Initialize the editor
  editor = monaco.editor.create(document.getElementById('monaco-editor-container'), {
    value: '// Welcome to Codepolarity Code Editor\n// Start coding here...',
    language: 'javascript',
    theme: currentTheme,
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
    tabSize: 2,
    insertSpaces: true,
    wordWrap: 'on',
    folding: true,
    links: true,
    contextmenu: true,
    mouseWheelZoom: true,
    suggestOnTriggerCharacters: true,
    acceptSuggestionOnEnter: 'on',
    tabCompletion: 'on',
    wordBasedSuggestions: 'on',
    parameterHints: {
      enabled: true
    },
    formatOnPaste: true,
    formatOnType: true,
    autoIndent: 'full',
    renderWhitespace: 'selection',
    renderControlCharacters: true,
    renderIndentGuides: true,
    renderLineHighlight: 'all',
    scrollbar: {
      vertical: 'visible',
      horizontal: 'visible',
      useShadows: false,
      verticalScrollbarSize: 10,
      horizontalScrollbarSize: 10
    }
  });

  // Set up event listeners
  setupEventListeners();
  
  // Initialize file tree
  initializeFileTree();
  
  // Create a default tab
  createTab('untitled-1.js', 'javascript');
});

// Set up event listeners
function setupEventListeners() {
  // Menu item event listeners
  document.getElementById('new-file').addEventListener('click', createNewFile);
  document.getElementById('open-file').addEventListener('click', openFile);
  document.getElementById('save-file').addEventListener('click', saveFile);
  document.getElementById('save-as').addEventListener('click', saveFileAs);
  document.getElementById('exit').addEventListener('click', exitEditor);
  
  document.getElementById('undo').addEventListener('click', () => editor.trigger('keyboard', 'undo'));
  document.getElementById('redo').addEventListener('click', () => editor.trigger('keyboard', 'redo'));
  document.getElementById('cut').addEventListener('click', () => editor.trigger('keyboard', 'cut'));
  document.getElementById('copy').addEventListener('click', () => editor.trigger('keyboard', 'copy'));
  document.getElementById('paste').addEventListener('click', () => editor.trigger('keyboard', 'paste'));
  document.getElementById('find').addEventListener('click', () => editor.trigger('keyboard', 'actions.find'));
  document.getElementById('replace').addEventListener('click', () => editor.trigger('keyboard', 'editor.action.startFindReplaceAction'));
  
  document.getElementById('toggle-sidebar').addEventListener('click', toggleSidebar);
  document.getElementById('toggle-terminal').addEventListener('click', toggleTerminal);
  document.getElementById('zoom-in').addEventListener('click', () => editor.trigger('keyboard', 'editor.action.fontZoomIn'));
  document.getElementById('zoom-out').addEventListener('click', () => editor.trigger('keyboard', 'editor.action.fontZoomOut'));
  document.getElementById('reset-zoom').addEventListener('click', () => editor.trigger('keyboard', 'editor.action.fontZoomReset'));
  
  document.getElementById('run-code').addEventListener('click', runCode);
  document.getElementById('stop-code').addEventListener('click', stopCode);
  
  document.getElementById('change-theme').addEventListener('click', changeTheme);
  document.getElementById('editor-settings').addEventListener('click', openEditorSettings);
  
  // Sidebar icon event listeners
  document.querySelectorAll('.sidebar-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const panel = icon.getAttribute('data-panel');
      switchPanel(panel);
    });
  });
  
  // File explorer action event listeners
  document.getElementById('new-folder').addEventListener('click', createNewFolder);
  document.getElementById('new-file-explorer').addEventListener('click', createNewFile);
  document.getElementById('refresh-explorer').addEventListener('click', refreshFileExplorer);
  
  // Output panel action event listeners
  document.getElementById('clear-output').addEventListener('click', clearOutput);
  
  // Editor event listeners
  editor.onDidChangeModelContent(() => {
    updateStatusBar();
  });
  
  editor.onDidChangeCursorPosition(() => {
    updateStatusBar();
  });
  
  editor.onDidChangeModelLanguage(() => {
    updateStatusBar();
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl+S to save
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      saveFile();
    }
    
    // Ctrl+N to new file
    if (e.ctrlKey && e.key === 'n') {
      e.preventDefault();
      createNewFile();
    }
    
    // Ctrl+O to open file
    if (e.ctrlKey && e.key === 'o') {
      e.preventDefault();
      openFile();
    }
    
    // Ctrl+R to run code
    if (e.ctrlKey && e.key === 'r') {
      e.preventDefault();
      runCode();
    }
  });
}

// Initialize file tree with some mock data
function initializeFileTree() {
  fileTree = [
    {
      name: 'project',
      type: 'folder',
      children: [
        {
          name: 'src',
          type: 'folder',
          children: [
            { name: 'index.js', type: 'file', language: 'javascript' },
            { name: 'styles.css', type: 'file', language: 'css' }
          ]
        },
        {
          name: 'public',
          type: 'folder',
          children: [
            { name: 'index.html', type: 'file', language: 'html' }
          ]
        },
        { name: 'package.json', type: 'file', language: 'json' }
      ]
    }
  ];
  
  renderFileTree();
}

// Render file tree in the explorer
function renderFileTree() {
  const fileTreeElement = document.querySelector('.file-tree');
  fileTreeElement.innerHTML = '';
  
  function renderNode(node, level = 0) {
    const item = document.createElement('div');
    item.className = 'file-tree-item';
    item.style.paddingLeft = `${level * 20}px`;
    
    const icon = document.createElement('img');
    icon.src = node.type === 'folder' 
      ? '../assets/images/folder.svg' 
      : getFileIcon(node.language || getFileLanguage(node.name));
    icon.alt = node.type;
    
    const name = document.createElement('span');
    name.textContent = node.name;
    
    item.appendChild(icon);
    item.appendChild(name);
    
    if (node.type === 'file') {
      item.addEventListener('click', () => openFileFromTree(node));
    }
    
    fileTreeElement.appendChild(item);
    
    if (node.type === 'folder' && node.children) {
      node.children.forEach(child => renderNode(child, level + 1));
    }
  }
  
  fileTree.forEach(node => renderNode(node));
}

// Get file icon based on language
function getFileIcon(language) {
  const iconMap = {
    'javascript': '../assets/images/javascript.svg',
    'typescript': '../assets/images/typescript.svg',
    'html': '../assets/images/html.svg',
    'css': '../assets/images/css.svg',
    'json': '../assets/images/json.svg',
    'python': '../assets/images/python.svg',
    'java': '../assets/images/java.svg',
    'cpp': '../assets/images/cpp.svg',
    'csharp': '../assets/images/csharp.svg',
    'php': '../assets/images/php.svg',
    'ruby': '../assets/images/ruby.svg',
    'go': '../assets/images/go.svg',
    'rust': '../assets/images/rust.svg',
    'swift': '../assets/images/swift.svg',
    'kotlin': '../assets/images/kotlin.svg',
    'default': '../assets/images/file.svg'
  };
  
  return iconMap[language] || iconMap.default;
}

// Get language from file extension
function getFileLanguage(filename) {
  const extension = filename.split('.').pop().toLowerCase();
  const languageMap = {
    'js': 'javascript',
    'ts': 'typescript',
    'jsx': 'javascript',
    'tsx': 'typescript',
    'html': 'html',
    'htm': 'html',
    'css': 'css',
    'scss': 'scss',
    'less': 'less',
    'json': 'json',
    'py': 'python',
    'java': 'java',
    'cpp': 'cpp',
    'c': 'c',
    'h': 'cpp',
    'cs': 'csharp',
    'php': 'php',
    'rb': 'ruby',
    'go': 'go',
    'rs': 'rust',
    'swift': 'swift',
    'kt': 'kotlin',
    'kts': 'kotlin'
  };
  
  return languageMap[extension] || 'plaintext';
}

// Create a new file
function createNewFile() {
  const fileName = prompt('Enter file name:', 'untitled.js');
  if (fileName) {
    createTab(fileName, getFileLanguage(fileName));
  }
}

// Create a new folder
function createNewFolder() {
  const folderName = prompt('Enter folder name:', 'New Folder');
  if (folderName) {
    // In a real implementation, this would create a folder in the file system
    alert('Folder creation is mocked for now. In a real implementation, this would create a folder in the file system.');
  }
}

// Open a file
function openFile() {
  // In a real implementation, this would open a file picker
  alert('File opening is mocked for now. In a real implementation, this would open a file picker.');
}

// Open a file from the file tree
function openFileFromTree(file) {
  createTab(file.name, file.language || getFileLanguage(file.name));
}

// Save the current file
function saveFile() {
  if (currentFile) {
    // In a real implementation, this would save the file to the file system
    alert(`File "${currentFile}" saved successfully!`);
  } else {
    saveFileAs();
  }
}

// Save the current file as a new file
function saveFileAs() {
  const fileName = prompt('Enter file name:', 'untitled.js');
  if (fileName) {
    // In a real implementation, this would save the file to the file system
    alert(`File "${fileName}" saved successfully!`);
    currentFile = fileName;
    updateStatusBar();
  }
}

// Exit the editor
function exitEditor() {
  if (confirm('Are you sure you want to exit? Any unsaved changes will be lost.')) {
    window.location.href = 'Home_page.html';
  }
}

// Toggle the sidebar
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('collapsed');
}

// Toggle the terminal
function toggleTerminal() {
  const terminal = document.querySelector('.terminal-panel');
  if (terminal) {
    terminal.classList.toggle('hidden');
  } else {
    // Create terminal panel if it doesn't exist
    const terminalPanel = document.createElement('div');
    terminalPanel.className = 'terminal-panel';
    terminalPanel.innerHTML = `
      <div class="panel-header">
        <h3>TERMINAL</h3>
        <div class="panel-actions">
          <button class="panel-action" id="clear-terminal">
            <img src="../assets/images/clear.svg" alt="Clear" />
          </button>
        </div>
      </div>
      <div class="terminal-container">
        <div class="terminal-output" id="terminal-output"></div>
        <div class="terminal-input-line">
          <span class="terminal-prompt">$</span>
          <input type="text" class="terminal-input" id="terminal-input" autofocus />
        </div>
      </div>
    `;
    
    document.querySelector('.editor-area').appendChild(terminalPanel);
    
    // Add event listener for terminal input
    const terminalInput = document.getElementById('terminal-input');
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const command = terminalInput.value;
        executeTerminalCommand(command);
        terminalInput.value = '';
      }
    });
    
    // Add event listener for clear terminal button
    document.getElementById('clear-terminal').addEventListener('click', () => {
      document.getElementById('terminal-output').innerHTML = '';
    });
  }
}

// Execute a terminal command (mocked)
function executeTerminalCommand(command) {
  const terminalOutput = document.getElementById('terminal-output');
  const outputLine = document.createElement('div');
  outputLine.className = 'terminal-line';
  
  const commandLine = document.createElement('div');
  commandLine.className = 'terminal-command';
  commandLine.innerHTML = `<span class="terminal-prompt">$</span> ${command}`;
  
  const resultLine = document.createElement('div');
  resultLine.className = 'terminal-result';
  
  // Mock command execution
  switch (command.trim()) {
    case 'ls':
      resultLine.textContent = 'index.js  styles.css  index.html  package.json';
      break;
    case 'pwd':
      resultLine.textContent = '/home/user/project';
      break;
    case 'node -v':
      resultLine.textContent = 'v14.17.0';
      break;
    case 'npm -v':
      resultLine.textContent = '6.14.13';
      break;
    case 'git --version':
      resultLine.textContent = 'git version 2.30.1';
      break;
    case 'python --version':
      resultLine.textContent = 'Python 3.9.5';
      break;
    case 'java -version':
      resultLine.textContent = 'openjdk version "11.0.11" 2021-04-20';
      break;
    default:
      resultLine.textContent = `Command not found: ${command}`;
  }
  
  outputLine.appendChild(commandLine);
  outputLine.appendChild(resultLine);
  terminalOutput.appendChild(outputLine);
  
  // Scroll to bottom
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Run the current code
function runCode() {
  const code = editor.getValue();
  const language = editor.getModel().getLanguageId();
  
  // Clear previous output
  clearOutput();
  
  // Add a loading message
  appendOutput('Running code...\n');
  
  // Mock code execution
  setTimeout(() => {
    // In a real implementation, this would send the code to a backend server for execution
    let output = '';
    
    switch (language) {
      case 'javascript':
        try {
          // Create a safe environment for evaluation
          const safeEval = new Function('console', `
            let output = '';
            const safeConsole = {
              log: (...args) => { output += args.join(' ') + '\\n'; },
              error: (...args) => { output += 'Error: ' + args.join(' ') + '\\n'; },
              warn: (...args) => { output += 'Warning: ' + args.join(' ') + '\\n'; },
              info: (...args) => { output += 'Info: ' + args.join(' ') + '\\n'; }
            };
            try {
              ${code}
            } catch (error) {
              safeConsole.error(error.message);
            }
            return output;
          `);
          
          output = safeEval(console);
        } catch (error) {
          output = `Error: ${error.message}\n`;
        }
        break;
        
      case 'python':
        output = 'Python execution is mocked. In a real implementation, this would send the code to a Python interpreter.\n';
        output += 'Sample output:\n';
        output += 'Hello, World!\n';
        output += 'The sum of 5 and 3 is 8\n';
        break;
        
      case 'java':
        output = 'Java execution is mocked. In a real implementation, this would send the code to a Java compiler and JVM.\n';
        output += 'Sample output:\n';
        output += 'Hello, World!\n';
        output += 'The sum of 5 and 3 is 8\n';
        break;
        
      case 'cpp':
        output = 'C++ execution is mocked. In a real implementation, this would send the code to a C++ compiler.\n';
        output += 'Sample output:\n';
        output += 'Hello, World!\n';
        output += 'The sum of 5 and 3 is 8\n';
        break;
        
      default:
        output = `Execution for ${language} is not supported yet.`;
    }
    
    appendOutput(output);
  }, 500);
}

// Stop the current code execution
function stopCode() {
  // In a real implementation, this would stop the code execution
  appendOutput('\nCode execution stopped.');
}

// Change the editor theme
function changeTheme() {
  const themes = ['vs-dark', 'vs-light', 'hc-black'];
  const currentIndex = themes.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % themes.length;
  currentTheme = themes[nextIndex];
  
  monaco.editor.setTheme(currentTheme);
  
  // Update status bar
  document.getElementById('theme').textContent = `Theme: ${currentTheme === 'vs-dark' ? 'Dark' : currentTheme === 'vs-light' ? 'Light' : 'High Contrast'}`;
}

// Open editor settings
function openEditorSettings() {
  // In a real implementation, this would open a settings panel
  alert('Editor settings are mocked for now. In a real implementation, this would open a settings panel.');
}

// Switch between sidebar panels
function switchPanel(panel) {
  // Update active icon
  document.querySelectorAll('.sidebar-icon').forEach(icon => {
    icon.classList.remove('active');
    if (icon.getAttribute('data-panel') === panel) {
      icon.classList.add('active');
    }
  });
  
  // Update active panel
  document.querySelectorAll('.sidebar-panel').forEach(p => {
    p.classList.remove('active');
  });
  
  const targetPanel = document.getElementById(`${panel}-panel`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }
}

// Create a new tab
function createTab(fileName, language) {
  // Check if the file is already open
  const existingTab = openFiles.find(file => file.name === fileName);
  if (existingTab) {
    activateTab(fileName);
    return;
  }
  
  // Create a new tab
  const tab = document.createElement('div');
  tab.className = 'tab';
  tab.setAttribute('data-file', fileName);
  
  const tabTitle = document.createElement('div');
  tabTitle.className = 'tab-title';
  tabTitle.textContent = fileName;
  
  const tabClose = document.createElement('div');
  tabClose.className = 'tab-close';
  tabClose.innerHTML = '×';
  tabClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeTab(fileName);
  });
  
  tab.appendChild(tabTitle);
  tab.appendChild(tabClose);
  
  tab.addEventListener('click', () => {
    activateTab(fileName);
  });
  
  document.querySelector('.tabs').appendChild(tab);
  
  // Add to open files
  openFiles.push({
    name: fileName,
    language: language,
    content: editor.getValue()
  });
  
  // Set the model language
  editor.getModel().setValue('');
  monaco.editor.setModelLanguage(editor.getModel(), language);
  
  // Update current file
  currentFile = fileName;
  currentLanguage = language;
  
  // Activate the tab
  activateTab(fileName);
  
  // Update status bar
  updateStatusBar();
}

// Activate a tab
function activateTab(fileName) {
  // Update active tab
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.getAttribute('data-file') === fileName) {
      tab.classList.add('active');
    }
  });
  
  // Find the file in open files
  const file = openFiles.find(f => f.name === fileName);
  if (file) {
    // Save current content
    if (currentFile) {
      const currentFileIndex = openFiles.findIndex(f => f.name === currentFile);
      if (currentFileIndex !== -1) {
        openFiles[currentFileIndex].content = editor.getValue();
      }
    }
    
    // Set the model content and language
    editor.getModel().setValue(file.content);
    monaco.editor.setModelLanguage(editor.getModel(), file.language);
    
    // Update current file
    currentFile = fileName;
    currentLanguage = file.language;
    
    // Update status bar
    updateStatusBar();
  }
}

// Close a tab
function closeTab(fileName) {
  // Remove the tab
  const tab = document.querySelector(`.tab[data-file="${fileName}"]`);
  if (tab) {
    tab.remove();
  }
  
  // Remove from open files
  const fileIndex = openFiles.findIndex(f => f.name === fileName);
  if (fileIndex !== -1) {
    openFiles.splice(fileIndex, 1);
  }
  
  // If the closed tab was active, activate another tab
  if (currentFile === fileName) {
    if (openFiles.length > 0) {
      activateTab(openFiles[openFiles.length - 1].name);
    } else {
      // No tabs left, create a new one
      createTab('untitled-1.js', 'javascript');
    }
  }
}

// Update the status bar
function updateStatusBar() {
  // Update language mode
  document.getElementById('language-mode').textContent = currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1);
  
  // Update line and column
  const position = editor.getPosition();
  if (position) {
    document.getElementById('line-col').textContent = `Ln ${position.lineNumber}, Col ${position.column}`;
  }
  
  // Update indent
  const model = editor.getModel();
  if (model) {
    const indentSize = model.getOptions().tabSize;
    document.getElementById('indent').textContent = `Spaces: ${indentSize}`;
  }
}

// Append text to the output panel
function appendOutput(text) {
  const outputContent = document.getElementById('output-content');
  outputContent.textContent += text;
  
  // Scroll to bottom
  outputContent.scrollTop = outputContent.scrollHeight;
}

// Clear the output panel
function clearOutput() {
  document.getElementById('output-content').textContent = '';
}

// Refresh the file explorer
function refreshFileExplorer() {
  // In a real implementation, this would refresh the file tree from the file system
  renderFileTree();
} 