const codeSnippets = [
  `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
  `const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x <= pivot);
  const right = arr.slice(1).filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}`
];

const textSnippets = [
  "The quick brown fox jumps over the lazy dog while the autumn leaves fall gently to the ground creating a colorful carpet of nature's beauty.",
  "Programming is both an art and a science requiring creativity logic and attention to detail as developers craft elegant solutions to complex problems."
];

class KeyPolarity {
  constructor() {
    this.mode = 'text';
    this.currentText = '';
    this.typedText = '';
    this.startTime = null;
    this.wpm = 0;
    this.accuracy = 100;
    this.isFinished = false;
    this.timerOption = 30;
    this.timeLeft = 30;
    this.isActive = false;
    this.timerInterval = null;

    this.initializeElements();
    this.addEventListeners();
    this.resetTest();
  }

  initializeElements() {
    this.textMode = document.getElementById('textMode');
    this.codeMode = document.getElementById('codeMode');
    this.textDisplay = document.getElementById('textDisplay');
    this.resetButton = document.getElementById('resetButton');
    this.wpmDisplay = document.getElementById('wpm');
    this.accuracyDisplay = document.getElementById('accuracy');
    this.timeLeftDisplay = document.getElementById('timeLeft');
    this.timerButtons = document.querySelectorAll('.timer-buttons button');
  }

  addEventListeners() {
    this.textMode.addEventListener('click', () => this.setMode('text'));
    this.codeMode.addEventListener('click', () => this.setMode('code'));
    this.resetButton.addEventListener('click', () => this.resetTest());
    this.textDisplay.addEventListener('keydown', (e) => this.handleKeyDown(e));
    this.timerButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.timerOption = parseInt(button.dataset.time);
        this.timerButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        this.resetTest();
      });
    });
  }

  setMode(newMode) {
    this.mode = newMode;
    this.textMode.classList.toggle('active', newMode === 'text');
    this.codeMode.classList.toggle('active', newMode === 'code');
    this.textDisplay.classList.toggle('text', newMode === 'text');
    this.textDisplay.classList.toggle('code', newMode === 'code');
    this.resetTest();
  }

  resetTest() {
    const snippets = this.mode === 'text' ? textSnippets : codeSnippets;
    this.currentText = snippets[Math.floor(Math.random() * snippets.length)];
    this.typedText = '';
    this.startTime = null;
    this.wpm = 0;
    this.accuracy = 100;
    this.isFinished = false;
    this.timeLeft = this.timerOption;
    this.isActive = false;
    clearInterval(this.timerInterval);
    this.updateDisplay();
    this.updateStats();
  }

  updateDisplay() {
    this.textDisplay.innerHTML = this.currentText.split('').map((char, index) => {
      let className = '';
      if (index < this.typedText.length) {
        className = this.typedText[index] === char ? 'correct' : 'incorrect';
      }
      return `<span class="${className}">${char}</span>`;
    }).join('');
  }

  updateStats() {
    this.wpmDisplay.textContent = this.wpm;
    this.accuracyDisplay.textContent = this.accuracy;
    this.timeLeftDisplay.textContent = this.timeLeft;
  }

  calculateWPM(typed, elapsed) {
    const words = typed.trim().split(/\s+/).length;
    const minutes = elapsed / 60000;
    return Math.round(words / minutes);
  }

  calculateAccuracy(typed, target) {
    let correct = 0;
    const minLength = Math.min(typed.length, target.length);
    for (let i = 0; i < minLength; i++) {
      if (typed[i] === target[i]) correct++;
    }
    return Math.round((correct / typed.length) * 100) || 100;
  }

  getIndentation(text, currentPosition) {
    const lastNewline = text.lastIndexOf('\n', currentPosition - 1);
    const currentLine = text.slice(lastNewline + 1, currentPosition);
    const match = currentLine.match(/^[ ]*/);
    let indentation = match ? match[0] : '';

    if (currentLine.trim().endsWith('{')) {
      indentation += '  ';
    }

    return indentation;
  }

  handleKeyDown(e) {
    if (this.isFinished) return;

    if (!this.isActive) {
      this.isActive = true;
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => {
        this.timeLeft--;
        this.updateStats();
        if (this.timeLeft === 0) {
          this.isFinished = true;
          this.isActive = false;
          clearInterval(this.timerInterval);
        }
      }, 1000);
    }

    if (e.key === 'Enter' && this.mode === 'code') {
      e.preventDefault();
      const indentation = this.getIndentation(this.currentText, this.typedText.length);
      this.typedText += '\n' + indentation;
      this.updateDisplay();
      return;
    }

    if (e.key === 'Tab' && this.mode === 'code') {
      e.preventDefault();
      this.typedText += '  ';
      this.updateDisplay();
      return;
    }

    if (e.key === 'Backspace') {
      if (this.typedText.length > 0) {
        const lastCompleteWordIndex = this.typedText.lastIndexOf(' ');
        const lastChar = this.typedText[this.typedText.length - 1];
        if (lastChar === ' ' || this.typedText.length <= lastCompleteWordIndex + 1) {
          this.typedText = this.typedText.slice(0, -1);
          this.updateDisplay();
        }
      }
      return;
    }

    if (e.key.length === 1) {
      this.typedText += e.key;
      this.updateDisplay();

      if (!this.startTime) {
        this.startTime = Date.now();
      }

      const elapsed = Date.now() - this.startTime;
      this.wpm = this.calculateWPM(this.typedText, elapsed);
      this.accuracy = this.calculateAccuracy(this.typedText, this.currentText);
      this.updateStats();

      if (this.typedText === this.currentText) {
        this.isFinished = true;
        this.isActive = false;
        clearInterval(this.timerInterval);
      }
    }
  }
}

// Initialize the application
new KeyPolarity();