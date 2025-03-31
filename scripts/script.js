let currentSnippet = 0;
let input = '';
let startTime = null;
let lastWordIndex = 0;
let currentWordStart = 0;
let isCompleted = false;
let timerInterval = null;
let timeLeft = 60; // default timer value
let selectedTime = 60; // store the selected time
let currentMode = 'code'; // 'code' or 'english'

const elements = {
  input: document.getElementById('input'),
  codeDisplay: document.getElementById('code-display'),
  startPrompt: document.getElementById('start-prompt'),
  completionScreen: document.getElementById('completion-screen'),
  timer: document.getElementById('timer'),
  timerSelect: document.getElementById('timer-select'),
  modeSelect: document.getElementById('mode-select'),
  typingArea: document.getElementById('typing-area'),
  stats: {
    wpm: document.getElementById('wpm'),
    accuracy: document.getElementById('accuracy'),
    errors: document.getElementById('errors'),
    final: {
      wpm: document.getElementById('final-wpm'),
      accuracy: document.getElementById('final-accuracy'),
      errors: document.getElementById('final-errors')
    }
  }
};

// Mode selection functionality
elements.modeSelect.addEventListener('change', () => {
  if (!startTime) { // Only allow changing mode before starting
    currentMode = elements.modeSelect.value;
    elements.typingArea.classList.toggle('english-mode', currentMode === 'english');
    reset();
  }
});

// Timer selection functionality
elements.timerSelect.addEventListener('change', () => {
  if (!startTime) { // Only allow changing time before starting
    selectedTime = parseInt(elements.timerSelect.value);
    timeLeft = selectedTime;
    elements.timer.textContent = timeLeft;
  }
});

function startTimer() {
  if (timerInterval) return;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    elements.timer.textContent = timeLeft;
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      completeTest();
    }
  }, 1000);
}

function getCurrentText() {
  if (currentMode === 'code') {
    return codeSnippets[currentSnippet].code;
  } else {
    return englishSnippets[currentSnippet].text;
  }
}

function getNextLineIndentation(currentPosition) {
  if (currentMode === 'english') return '';
  
  const code = getCurrentText();
  const nextNewlineIndex = code.indexOf('\n', currentPosition);
  if (nextNewlineIndex === -1) return '';

  const nextLineStart = nextNewlineIndex + 1;
  const indentMatch = code.slice(nextLineStart).match(/^[\s]*/);
  return indentMatch ? indentMatch[0] : '';
}

function findLastWordBreakIndex(text, currentIndex) {
  const breakChars = new Set([' ', '\n', '{', '}', '(', ')', ';', ',', '.']);
  for (let i = currentIndex - 1; i >= 0; i--) {
    if (breakChars.has(text[i])) {
      return i + 1;
    }
  }
  return 0;
}

function isWordComplete(text, position) {
  const currentText = getCurrentText();
  const nextChar = currentText[position];
  const breakChars = new Set([' ', '\n', '{', '}', '(', ')', ';', ',', '.']);
  return breakChars.has(nextChar) && text[position - 1] === currentText[position - 1];
}

function calculateStats() {
  if (!startTime) return;

  const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
  const words = input.length / 5; // assume average word length of 5
  const wpm = Math.round(words / timeElapsed);

  let correctChars = 0;
  let totalChars = 0;

  // Compare characters, ignoring indentation differences
  let textIndex = 0;
  let inputIndex = 0;
  const currentText = getCurrentText();

  while (inputIndex < input.length && textIndex < currentText.length) {
    const inputChar = input[inputIndex];
    const textChar = currentText[textIndex];

    // Skip whitespace in both strings
    if (/\s/.test(inputChar) && /\s/.test(textChar)) {
      inputIndex++;
      textIndex++;
      continue;
    }

    // Skip additional whitespace in either string
    if (/\s/.test(inputChar)) {
      inputIndex++;
      continue;
    }
    if (/\s/.test(textChar)) {
      textIndex++;
      continue;
    }

    totalChars++;
    if (inputChar === textChar) {
      correctChars++;
    }

    inputIndex++;
    textIndex++;
  }

  const accuracy = Math.round((correctChars / totalChars) * 100) || 100;
  const errors = totalChars - correctChars;

  // Update stats display
  elements.stats.wpm.textContent = wpm;
  elements.stats.accuracy.textContent = `${accuracy}%`;
  elements.stats.errors.textContent = errors;

  return { wpm, accuracy, errors };
}

function updateDisplay() {
  const currentText = getCurrentText();
  elements.codeDisplay.innerHTML = currentText.split('').map((char, i) => {
    const inputChar = input[i];
    let className = '';
    
    if (inputChar !== undefined) {
      className = (char === inputChar || (/\s/.test(char) && /\s/.test(inputChar)))
        ? 'correct'
        : 'incorrect';
    }
    
    return `<span class="${className}">${char}</span>`;
  }).join('');
}

function completeTest() {
  isCompleted = true;
  const stats = calculateStats();
  
  // Update final stats
  elements.stats.final.wpm.textContent = stats.wpm;
  elements.stats.final.accuracy.textContent = `${stats.accuracy}%`;
  elements.stats.final.errors.textContent = stats.errors;
  
  // Show completion screen
  elements.completionScreen.classList.remove('hidden');
  elements.input.disabled = true;
  
  // Clear timer
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function checkCompletion() {
  const currentText = getCurrentText();
  const normalizedInput = input.replace(/\s+/g, ' ').trim();
  const normalizedText = currentText.replace(/\s+/g, ' ').trim();
  
  if (normalizedInput === normalizedText) {
    completeTest();
  }
}

function isCurrentWordComplete() {
  const lastChar = input[input.length - 1];
  const breakChars = new Set([' ', '\n', '{', '}', '(', ')', ';', ',', '.']);
  return breakChars.has(lastChar);
}

function handleInput(e) {
  // Prevent tab key
  if (e.key === 'Tab') {
    e.preventDefault();
    return;
  }

  const newInput = e.target.value;
  
  // Handle backspace/undo
  if (newInput.length < input.length) {
    // Only allow backspace if the current word is not complete
    if (isCurrentWordComplete()) {
      e.preventDefault();
      e.target.value = input;
      return;
    }
    input = newInput;
    updateDisplay();
    return;
  }

  if (!startTime) {
    startTime = Date.now();
    elements.startPrompt.style.display = 'none';
    startTimer();
  }

  // Handle new line with auto-indentation
  if (newInput.endsWith('\n') && currentMode === 'code') {
    const indentation = getNextLineIndentation(newInput.length - 1);
    if (indentation) {
      const inputWithIndent = newInput + indentation;
      input = inputWithIndent;
      e.target.value = inputWithIndent;
      
      // Set cursor position after indentation
      requestAnimationFrame(() => {
        const newPosition = inputWithIndent.length;
        e.target.setSelectionRange(newPosition, newPosition);
      });
      updateDisplay();
      return;
    }
  }

  // Update word tracking when a word break character is typed
  const breakChars = new Set([' ', '\n', '{', '}', '(', ')', ';', ',', '.']);
  if (breakChars.has(newInput[newInput.length - 1])) {
    if (isWordComplete(newInput, newInput.length - 1)) {
      lastWordIndex = newInput.length;
      currentWordStart = newInput.length;
    }
  } else {
    // Update current word start when starting a new word
    if (newInput.length > input.length && breakChars.has(input[input.length - 1])) {
      currentWordStart = input.length;
    }
  }

  input = newInput;
  updateDisplay();
  calculateStats();
  checkCompletion();
}

function reset() {
  if (currentMode === 'code') {
    currentSnippet = (currentSnippet + 1) % codeSnippets.length;
  } else {
    currentSnippet = (currentSnippet + 1) % englishSnippets.length;
  }
  
  input = '';
  startTime = null;
  lastWordIndex = 0;
  currentWordStart = 0;
  isCompleted = false;
  timeLeft = selectedTime; // Use the selected time when resetting
  
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  
  elements.timer.textContent = timeLeft;
  elements.input.value = '';
  elements.input.disabled = false;
  elements.completionScreen.classList.add('hidden');
  elements.startPrompt.style.display = 'flex';
  
  elements.stats.wpm.textContent = '0';
  elements.stats.accuracy.textContent = '100%';
  elements.stats.errors.textContent = '0';
  
  updateDisplay();
}

// Event listeners
elements.input.addEventListener('input', handleInput);
elements.input.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
  }
});
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('try-again').addEventListener('click', reset);

// Initial setup
updateDisplay();