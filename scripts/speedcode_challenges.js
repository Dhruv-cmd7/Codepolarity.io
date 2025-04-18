// Monaco Editor setup
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs' }});
require(['vs/editor/editor.main'], function() {
  // Initialize Monaco Editor
  const editor = monaco.editor.create(document.getElementById('editor'), {
    value: 'def twoSum(nums, target):\n    # Your code here\n    pass',
    language: 'python',
    theme: 'vs-dark',
    automaticLayout: true,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    fontSize: 16,
    lineNumbers: 'on',
    roundedSelection: false,
    scrollbar: {
      vertical: 'visible',
      horizontal: 'visible'
    },
    readOnly: false,
    cursorStyle: 'line',
    cursorBlinking: 'smooth',
    contextmenu: true,
    wordWrap: 'on',
    lineHeight: 24,
    padding: { top: 16 }
  });

  // Typing performance tracking
  let startTime = null;
  let totalKeystrokes = 0;
  let correctKeystrokes = 0;
  let backspaceCount = 0;
  let errorCount = 0;
  let lastKeyTime = null;
  let hesitationMap = new Map();
  let currentLine = 0;

  // Initialize performance tracking
  function initPerformanceTracking() {
    startTime = Date.now();
    totalKeystrokes = 0;
    correctKeystrokes = 0;
    backspaceCount = 0;
    errorCount = 0;
    lastKeyTime = null;
    hesitationMap.clear();
    currentLine = 0;
    updateStats();
  }

  // Update performance statistics
  function updateStats() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000; // in seconds
    const minutes = elapsedTime / 60;
    
    // Calculate WPM (assuming 5 characters per word)
    const wpm = Math.round((correctKeystrokes / 5) / minutes) || 0;
    const accuracy = Math.round((correctKeystrokes / totalKeystrokes) * 100) || 100;
    
    // Update UI
    document.getElementById('wpm').textContent = wpm;
    document.getElementById('accuracy').textContent = accuracy + '%';
    document.getElementById('errorCount').textContent = errorCount;
    
    // Update time left
    const timeLeft = Math.max(0, 30 - Math.floor(elapsedTime));
    document.getElementById('timeLeft').textContent = timeLeft + 's';
    
    if (timeLeft === 0) {
      endChallenge();
    }
  }

  // Track typing performance
  editor.onKeyDown((e) => {
    if (!startTime) {
      initPerformanceTracking();
    }
    
    const currentTime = Date.now();
    totalKeystrokes++;
    
    // Track backspace
    if (e.keyCode === 8) { // Backspace
      backspaceCount++;
      errorCount++;
    } else {
      correctKeystrokes++;
    }
    
    // Track hesitation
    if (lastKeyTime) {
      const timeSinceLastKey = currentTime - lastKeyTime;
      if (timeSinceLastKey > 1000) { // More than 1 second is considered hesitation
        const position = editor.getPosition();
        const line = position.lineNumber;
        const key = `${line}:${position.column}`;
        hesitationMap.set(key, (hesitationMap.get(key) || 0) + timeSinceLastKey);
      }
    }
    
    lastKeyTime = currentTime;
    updateStats();
  });

  // Language selection
  document.getElementById('languageSelect').addEventListener('change', (e) => {
    const language = e.target.value;
    monaco.editor.setModelLanguage(editor.getModel(), language);
    
    // Update starter code based on language
    let starterCode = '';
    switch (language) {
      case 'python':
        starterCode = 'def twoSum(nums, target):\n    # Your code here\n    pass';
        break;
      case 'javascript':
        starterCode = 'function twoSum(nums, target) {\n    // Your code here\n}';
        break;
      case 'java':
        starterCode = 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your code here\n    }\n}';
        break;
      case 'cpp':
        starterCode = 'class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Your code here\n    }\n};';
        break;
    }
    editor.setValue(starterCode);
  });

  // Run button functionality
  document.getElementById('runButton').addEventListener('click', async () => {
    const code = editor.getValue();
    const language = document.getElementById('languageSelect').value;
    
    try {
      // Test cases for Two Sum problem
      const testCases = [
        {
          input: { nums: [2, 7, 11, 15], target: 9 },
          expected: [0, 1]
        },
        {
          input: { nums: [3, 2, 4], target: 6 },
          expected: [1, 2]
        },
        {
          input: { nums: [3, 3], target: 6 },
          expected: [0, 1]
        }
      ];

      let passedTests = 0;
      const testResults = document.getElementById('testResults');
      testResults.innerHTML = '';

      // Evaluate each test case
      for (const testCase of testCases) {
        let result;
        try {
          // Execute code based on language
          switch (language) {
            case 'python':
              // For Python, we'll use a simple string evaluation
              const pythonCode = `
${code}
result = twoSum(${JSON.stringify(testCase.input.nums)}, ${testCase.input.target})
`;
              result = await executePython(pythonCode);
              break;

            case 'javascript':
              // For JavaScript, we'll use Function constructor
              const jsCode = `
${code}
return twoSum(${JSON.stringify(testCase.input.nums)}, ${testCase.input.target});
`;
              result = new Function(jsCode)();
              break;

            case 'java':
              // For Java, we'll use a simple string evaluation
              const javaCode = `
${code}
int[] result = twoSum(new int[]${JSON.stringify(testCase.input.nums)}, ${testCase.input.target});
return result;
`;
              result = await executeJava(javaCode);
              break;

            case 'cpp':
              // For C++, we'll use a simple string evaluation
              const cppCode = `
${code}
vector<int> result = twoSum(vector<int>${JSON.stringify(testCase.input.nums)}, ${testCase.input.target});
return result;
`;
              result = await executeCpp(cppCode);
              break;
          }

          // Normalize the result
          if (!Array.isArray(result)) {
            result = [];
          }
          
          // Convert all elements to numbers and sort
          result = result.map(x => Number(x)).sort((a, b) => a - b);
          
          // Normalize the expected result
          const expected = testCase.expected.map(x => Number(x)).sort((a, b) => a - b);
          
          // Check if result matches expected output
          const isCorrect = result.length === 2 && 
                           result[0] === expected[0] && 
                           result[1] === expected[1];
          
          if (isCorrect) passedTests++;
          
          // Add test case result to display
          testResults.innerHTML += `
            <div class="test-case ${isCorrect ? 'success' : 'failure'}">
              <span class="test-number">Test Case ${testCases.indexOf(testCase) + 1}</span>
              <span class="test-input">Input: nums = [${testCase.input.nums}], target = ${testCase.input.target}</span>
              <span class="test-expected">Expected: [${testCase.expected}]</span>
              <span class="test-result">Result: [${result}]</span>
              <span class="test-status">${isCorrect ? '✓ Passed' : '✗ Failed'}</span>
            </div>
          `;
        } catch (error) {
          console.error('Test case error:', error);
          testResults.innerHTML += `
            <div class="test-case error">
              <span class="test-number">Test Case ${testCases.indexOf(testCase) + 1}</span>
              <span class="test-error">Error: ${error.message}</span>
              <span class="test-status">✗ Error</span>
            </div>
          `;
        }
      }

      // Update test case count in result popup
      document.getElementById('resultTests').textContent = `${passedTests}/${testCases.length}`;

      // Add performance feedback
      const feedback = document.getElementById('performanceFeedback');
      if (passedTests === testCases.length) {
        feedback.innerHTML = `
          <p>Great job! Your solution passed all test cases.</p>
          <p>Here are some tips to improve your code:</p>
          <ul>
            <li>Consider adding comments to explain your approach</li>
            <li>Check if you can optimize the time or space complexity</li>
            <li>Add input validation to handle edge cases</li>
          </ul>
        `;
      } else {
        feedback.innerHTML = `
          <p>Your solution passed ${passedTests} out of ${testCases.length} test cases.</p>
          <p>Here are some suggestions to improve your code:</p>
          <ul>
            <li>Check if your solution handles all edge cases</li>
            <li>Verify that your return type matches the expected output</li>
            <li>Make sure your indices are correct and in the right order</li>
          </ul>
        `;
      }

    } catch (error) {
      console.error('Error running code:', error);
      testResults.innerHTML = `
        <div class="test-case error">
          <span class="test-error">Error: ${error.message}</span>
        </div>
      `;
    }
  });

  // Helper functions for language execution
  async function executePython(code) {
    try {
      // Initialize Pyodide if not already initialized
      if (!window.pyodide) {
        window.pyodide = await loadPyodide();
      }
      
      // Execute Python code
      await window.pyodide.runPythonAsync(code);
      
      // Get the result
      const result = window.pyodide.globals.get('result');
      return result.toJs();
    } catch (error) {
      console.error('Python execution error:', error);
      throw error;
    }
  }

  async function executeJava(code) {
    try {
      // Initialize GraalVM if not already initialized
      if (!window.graal) {
        window.graal = await loadGraalVM();
      }
      
      // Execute Java code
      const result = await window.graal.evalJava(code);
      return result;
    } catch (error) {
      console.error('Java execution error:', error);
      throw error;
    }
  }

  async function executeCpp(code) {
    try {
      // Initialize Emscripten if not already initialized
      if (!window.Module) {
        window.Module = await loadEmscripten();
      }
      
      // Execute C++ code
      const result = await window.Module.ccall('twoSum', 'array', ['array', 'number'], [code]);
      return result;
    } catch (error) {
      console.error('C++ execution error:', error);
      throw error;
    }
  }

  // Submit button functionality
  document.getElementById('submitButton').addEventListener('click', () => {
    endChallenge();
  });

  // End challenge and show results
  function endChallenge() {
    const popup = document.getElementById('resultPopup');
    const wpm = document.getElementById('wpm').textContent;
    const accuracy = document.getElementById('accuracy').textContent;
    const timeLeft = document.getElementById('timeLeft').textContent;
    
    // Update result popup
    document.getElementById('resultWpm').textContent = wpm;
    document.getElementById('resultAccuracy').textContent = accuracy;
    document.getElementById('resultTime').textContent = timeLeft;
    
    // Generate performance feedback
    const feedback = generatePerformanceFeedback();
    document.getElementById('performanceFeedback').innerHTML = feedback;
    
    // Show popup
    popup.style.display = 'flex';
  }

  // Generate performance feedback
  function generatePerformanceFeedback() {
    let feedback = '';
    
    // Analyze hesitation points
    const topHesitationPoints = Array.from(hesitationMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    
    if (topHesitationPoints.length > 0) {
      feedback += '<p>Areas where you slowed down:</p><ul>';
      topHesitationPoints.forEach(([position, time]) => {
        const [line, col] = position.split(':');
        feedback += `<li>Line ${line}, column ${col} (${Math.round(time/1000)}s hesitation)</li>`;
      });
      feedback += '</ul>';
    }
    
    // Add general feedback
    const accuracy = parseInt(document.getElementById('accuracy').textContent);
    if (accuracy < 90) {
      feedback += '<p>Your typing accuracy could be improved. Try to focus on accuracy before speed.</p>';
    }
    
    if (backspaceCount > 10) {
      feedback += '<p>You used backspace frequently. Consider planning your code structure before typing.</p>';
    }
    
    return feedback;
  }

  // Popup button handlers
  document.getElementById('nextChallenge').addEventListener('click', () => {
    // Load next challenge
    document.getElementById('resultPopup').style.display = 'none';
    initPerformanceTracking();
  });

  document.getElementById('retryButton').addEventListener('click', () => {
    document.getElementById('resultPopup').style.display = 'none';
    initPerformanceTracking();
    editor.setValue(editor.getModel().getValue());
  });

  document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('resultPopup').style.display = 'none';
  });

  // Solution panel functionality
  const solutionPanel = document.getElementById('solutionPanel');
  const showSolutionButton = document.getElementById('showSolutionButton');
  const closeSolutionButton = document.getElementById('closeSolutionButton');
  const solutionTabs = document.querySelectorAll('.solution-tab');
  const solutionCodeBlocks = document.querySelectorAll('.solution-code-block');

  showSolutionButton.addEventListener('click', () => {
    solutionPanel.style.display = 'block';
    // Scroll to the solution panel
    solutionPanel.scrollIntoView({ behavior: 'smooth' });
  });

  closeSolutionButton.addEventListener('click', () => {
    solutionPanel.style.display = 'none';
  });

  solutionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and code blocks
      solutionTabs.forEach(t => t.classList.remove('active'));
      solutionCodeBlocks.forEach(block => block.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Show corresponding code block
      const lang = tab.dataset.lang;
      document.getElementById(`${lang}Solution`).classList.add('active');
    });
  });

  // Add solution button to result popup
  document.getElementById('submitButton').addEventListener('click', () => {
    const popup = document.getElementById('resultPopup');
    const popupButtons = document.querySelector('.popup-buttons');
    
    // Create and add solution button if it doesn't exist
    if (!document.getElementById('showSolutionInPopup')) {
      const solutionButton = document.createElement('button');
      solutionButton.id = 'showSolutionInPopup';
      solutionButton.className = 'next-btn';
      solutionButton.textContent = 'Show Solution';
      solutionButton.addEventListener('click', () => {
        popup.style.display = 'none';
        solutionPanel.style.display = 'block';
        solutionPanel.scrollIntoView({ behavior: 'smooth' });
      });
      popupButtons.insertBefore(solutionButton, popupButtons.firstChild);
    }
  });

  // Initialize
  initPerformanceTracking();
}); 