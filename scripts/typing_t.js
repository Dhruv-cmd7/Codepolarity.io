const codeSnippets = {
  random: [
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
}`,
    `class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  insert(value) {
    if (value < this.value) {
      if (!this.left) this.left = new BinaryTree(value);
      else this.left.insert(value);
    } else {
      if (!this.right) this.right = new BinaryTree(value);
      else this.right.insert(value);
    }
  }
}`,
    `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
}`,
    `const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}`,
    `class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    this.items.push(element);
  }
  
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}`,
    `const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}`,
    `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
    `class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(element) {
    this.items.push(element);
  }
  
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}`,
    `const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}`
  ],
  javascript: [
    `// JavaScript: Promise.all implementation
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    
    if (promises.length === 0) {
      resolve(results);
      return;
    }
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}`,
    `// JavaScript: Event Emitter
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return () => this.off(event, listener);
  }
  
  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }
  
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(...args));
  }
}`
  ],
  python: [
    `# Python: Decorator with arguments
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)
def greet(name):
    print(f"Hello, {name}!")
    return f"Greeted {name}"`,
    `# Python: Context Manager
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
        
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()
            
# Usage:
# with FileManager('data.txt', 'w') as f:
#     f.write('Hello, World!')`
  ],
  java: [
    `// Java: Singleton Pattern
public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}`,
    `// Java: Builder Pattern
public class User {
    private final String firstName;
    private final String lastName;
    private final int age;
    private final String email;
    
    private User(UserBuilder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
        this.email = builder.email;
    }
    
    public static class UserBuilder {
        private final String firstName;
        private final String lastName;
        private int age;
        private String email;
        
        public UserBuilder(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        
        public UserBuilder age(int age) {
            this.age = age;
            return this;
        }
        
        public UserBuilder email(String email) {
            this.email = email;
            return this;
        }
        
        public User build() {
            return new User(this);
        }
    }
}`
  ],
  cpp: [
    `// C++: Smart Pointer Implementation
template<typename T>
class SmartPointer {
private:
    T* ptr;
    int* refCount;
    
public:
    SmartPointer(T* p = nullptr) : ptr(p) {
        refCount = new int(1);
    }
    
    SmartPointer(const SmartPointer& other) : ptr(other.ptr), refCount(other.refCount) {
        (*refCount)++;
    }
    
    ~SmartPointer() {
        (*refCount)--;
        if (*refCount == 0) {
            delete ptr;
            delete refCount;
        }
    }
    
    T& operator*() { return *ptr; }
    T* operator->() { return ptr; }
};`,
    `// C++: Template Function
template<typename T>
T findMax(const std::vector<T>& arr) {
    if (arr.empty()) {
        throw std::runtime_error("Array is empty");
    }
    
    T max = arr[0];
    for (const T& element : arr) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}`
  ]
};

const textSnippets = {
  random: [
    "The quick brown fox jumps over the lazy dog while the autumn leaves fall gently to the ground creating a colorful carpet of nature's beauty.",
    "Programming is both an art and a science requiring creativity logic and attention to detail as developers craft elegant solutions to complex problems.",
    "The ancient ruins stood silently in the moonlight, their weathered stones telling stories of civilizations long forgotten, while the wind whispered secrets of the past.",
    "In the bustling city streets, neon signs flickered and traffic flowed like rivers of light, while street performers filled the air with melodies that echoed between skyscrapers.",
    "The chef carefully arranged the ingredients on the marble counter, each element chosen for its flavor and texture, creating a masterpiece that would delight the senses.",
    "Through the telescope, distant galaxies sparkled like diamonds in the velvet sky, each star a sun to worlds we may never know, yet they fill us with wonder and awe.",
    "The garden bloomed with vibrant colors, butterflies danced from flower to flower, and the sweet scent of roses carried on the gentle breeze of a perfect summer day.",
    "In the quiet library, dust motes danced in sunbeams streaming through stained glass windows, while ancient books whispered stories of knowledge waiting to be discovered.",
    "The ocean waves crashed against the rocky shore, their rhythm like a heartbeat, while seagulls soared overhead and the salty breeze carried the promise of adventure.",
    "In the digital age, information flows like electricity through networks of light, connecting minds across continents and creating a world where distance is measured in milliseconds."
  ],
  nature: [
    "The forest whispered with life as sunlight filtered through the canopy, dappling the forest floor with golden spots that danced with the gentle sway of branches overhead.",
    "A rainbow arched across the sky after the storm, its vibrant colors painting a bridge between the dark clouds and the newly washed earth below, where puddles reflected the beauty above.",
    "The desert stretched endlessly before them, its golden dunes rising and falling like waves frozen in time, while the wind carved intricate patterns in the sand that would be gone by morning."
  ],
  technology: [
    "The quantum computer hummed quietly in its climate-controlled chamber, its qubits entangled in states that defied classical physics, processing information in ways that seemed almost magical.",
    "Virtual reality headsets transported users to digital realms where the laws of physics were mere suggestions, and imagination was the only limit to what could be experienced and created.",
    "Artificial intelligence algorithms analyzed vast datasets, finding patterns invisible to human eyes, and making predictions that would reshape industries and societies in ways previously unimaginable."
  ],
  literature: [
    "The old book's pages were yellowed with age, their edges slightly tattered, but the words within still held the power to transport readers to distant lands and times long past.",
    "The poet's pen danced across the page, each word carefully chosen to evoke emotions and images that would resonate with readers long after the ink had dried and the page had been turned.",
    "The novelist crafted characters with such depth and complexity that they seemed to step off the page and into the reader's imagination, becoming as real as any person they had ever met."
  ],
  science: [
    "The microscope revealed a hidden world of intricate structures, each cell a universe of activity where countless processes worked in perfect harmony to sustain life in its most fundamental form.",
    "The particle accelerator sent subatomic particles racing around its circular track at nearly the speed of light, their collisions creating conditions that hadn't existed since the earliest moments of the universe.",
    "The telescope captured light that had traveled across space for millions of years, bringing images of distant galaxies and nebulae that painted a picture of cosmic beauty and mystery."
  ]
};

class KeyPolarity {
  constructor() {
    this.initializeElements();
    this.addEventListeners();
    this.mode = 'text';
    this.currentCategory = 'random';
    this.typedText = '';
    this.currentIndex = 0;
    this.startTime = null;
    this.wpm = 0;
    this.accuracy = 100;
    this.isFinished = false;
    this.timeLimit = 30; // Default time limit in seconds
    this.timeLeft = this.timeLimit;
    this.isActive = false;
    this.timerInterval = null;
    this.isResetting = false;
    this.resetTimeout = null;
    this.targetText = '';
    this.zoomLevel = 100;
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
    this.zoomButtons = document.querySelectorAll('.zoom-buttons button');
    this.zoomLevelDisplay = document.getElementById('zoomLevel');
    this.toggleSidebar = document.getElementById('toggleSidebar');
    this.snippetSidebar = document.querySelector('.snippet-sidebar');
    this.textSnippets = document.getElementById('textSnippets');
    this.codeSnippets = document.getElementById('codeSnippets');
    
    // Add popup elements
    this.resultPopup = document.getElementById('resultPopup');
    this.resultWpm = document.getElementById('resultWpm');
    this.resultAccuracy = document.getElementById('resultAccuracy');
    this.resultTime = document.getElementById('resultTime');
    this.retryButton = document.getElementById('retryButton');
    this.closePopup = document.getElementById('closePopup');
  }

  addEventListeners() {
    this.textMode.addEventListener('click', () => this.setMode('text'));
    this.codeMode.addEventListener('click', () => this.setMode('code'));
    this.resetButton.addEventListener('click', () => this.resetTest());
    this.textDisplay.addEventListener('keydown', (e) => this.handleKeyDown(e));
    this.timerButtons.forEach(button => {
      button.addEventListener('click', () => {
        const time = parseInt(button.dataset.time);
        this.timeLimit = time;
        this.timeLeft = time;
        
        // Update active state
        this.timerButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Reset the test with new time limit
        this.resetTest();
      });
    });
    this.zoomButtons.forEach(button => {
      button.addEventListener('click', () => {
        const delta = parseInt(button.dataset.delta);
        this.adjustZoom(delta);
      });
    });
    this.toggleSidebar.addEventListener('click', () => this.toggleSidebarView());
    
    // Add event listeners for snippet selection
    this.textSnippets.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => this.selectSnippet('text', li.textContent.toLowerCase()));
    });
    
    this.codeSnippets.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => this.selectSnippet('code', li.textContent.toLowerCase()));
    });

    // Add popup event listeners
    this.retryButton.addEventListener('click', () => {
      this.hideResultPopup();
      this.resetTest();
    });

    this.closePopup.addEventListener('click', () => {
      this.hideResultPopup();
    });

    // Close popup when clicking outside
    this.resultPopup.addEventListener('click', (e) => {
      if (e.target === this.resultPopup) {
        this.hideResultPopup();
      }
    });
  }

  toggleSidebarView() {
    this.snippetSidebar.classList.toggle('collapsed');
    const icon = this.toggleSidebar.querySelector('svg');
    if (this.snippetSidebar.classList.contains('collapsed')) {
      icon.innerHTML = '<path d="m9 18 6-6-6-6"/>';
    } else {
      icon.innerHTML = '<path d="m15 18-6-6 6-6"/>';
    }
  }

  selectSnippet(mode, category) {
    if (mode === this.mode && !this.isResetting) {
      this.currentCategory = category;
      
      // Update active state in UI
      const listItems = mode === 'text' ? 
        this.textSnippets.querySelectorAll('li') : 
        this.codeSnippets.querySelectorAll('li');
      
      listItems.forEach(li => {
        li.classList.toggle('active', li.textContent.toLowerCase() === category);
      });
      
      this.debouncedReset();
    }
  }

  setMode(newMode) {
    if (this.mode !== newMode && !this.isResetting) {
      this.mode = newMode;
      this.textMode.classList.toggle('active', newMode === 'text');
      this.codeMode.classList.toggle('active', newMode === 'code');
      this.textDisplay.classList.toggle('text', newMode === 'text');
      this.textDisplay.classList.toggle('code', newMode === 'code');
      
      // Reset category to random when switching modes
      this.currentCategory = 'random';
      
      // Update active states in UI
      this.textSnippets.querySelectorAll('li').forEach(li => {
        li.classList.toggle('active', newMode === 'text' && li.textContent.toLowerCase() === 'random');
      });
      
      this.codeSnippets.querySelectorAll('li').forEach(li => {
        li.classList.toggle('active', newMode === 'code' && li.textContent.toLowerCase() === 'random');
      });
      
      this.debouncedReset();
    }
  }

  debouncedReset() {
    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
    }
    
    this.resetTimeout = setTimeout(() => {
      this.resetTest();
    }, 100);
  }

  resetTest() {
    if (this.isResetting) return;
    
    this.isResetting = true;
    
    // Clear any existing intervals
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    
    // Get new snippet
    const snippets = this.mode === 'text' ? textSnippets[this.currentCategory] : codeSnippets[this.currentCategory];
    this.targetText = snippets[Math.floor(Math.random() * snippets.length)];
    
    // Reset state
    this.typedText = '';
    this.currentIndex = 0;
    this.startTime = null;
    this.wpm = 0;
    this.accuracy = 100;
    this.isFinished = false;
    this.timeLeft = this.timeLimit;
    this.isActive = false;
    
    // Update UI
    requestAnimationFrame(() => {
      this.updateDisplay();
      this.updateStats();
      this.isResetting = false;
    });
  }

  updateDisplay() {
    const fragment = document.createDocumentFragment();
    this.targetText.split('').forEach((char, index) => {
      const span = document.createElement('span');
      if (index < this.currentIndex) {
        span.className = this.typedText[index] === char ? 'correct' : 'incorrect';
      }
      span.textContent = char;
      fragment.appendChild(span);
    });
    
    this.textDisplay.innerHTML = '';
    this.textDisplay.appendChild(fragment);
  }

  updateStats() {
    if (!this.startTime) return;
    
    const elapsed = (Date.now() - this.startTime) / 1000;
    const typed = this.currentIndex;
    const target = this.targetText.length;
    
    const wpm = this.calculateWPM(typed, elapsed);
    const accuracy = this.calculateAccuracy(typed, target);
    
    this.wpmDisplay.textContent = Math.round(wpm);
    this.accuracyDisplay.textContent = Math.round(accuracy);
    this.timeLeftDisplay.textContent = Math.max(0, Math.ceil(this.timeLimit - elapsed));
    
    // Show popup when timer reaches zero
    if (elapsed >= this.timeLimit && !this.isFinished) {
      this.isFinished = true;
      this.isActive = false;
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.showResultPopup();
    }
  }

  calculateWPM(typed, elapsed) {
    if (elapsed === 0) return 0;
    // Calculate WPM based on characters typed (5 characters = 1 word)
    const words = typed / 5;
    const minutes = elapsed / 60;
    return words / minutes;
  }

  calculateAccuracy(typed, target) {
    if (typed === 0) return 100;
    let correct = 0;
    const minLength = Math.min(typed, target);
    for (let i = 0; i < minLength; i++) {
      if (this.typedText[i] === this.targetText[i]) correct++;
    }
    return (correct / typed) * 100;
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

    // Prevent space bar from scrolling the page
    if (e.key === ' ') {
      e.preventDefault();
    }

    if (!this.isActive) {
      this.isActive = true;
      this.startTime = Date.now();
      
      // Start the timer
      this.timerInterval = setInterval(() => {
        const elapsed = (Date.now() - this.startTime) / 1000;
        this.timeLeft = Math.max(0, this.timeLimit - elapsed);
        this.updateStats();
        
        if (elapsed >= this.timeLimit) {
          this.isFinished = true;
          this.isActive = false;
          clearInterval(this.timerInterval);
          this.timerInterval = null;
          this.showResultPopup();
        }
      }, 1000);
    }

    if (e.key === 'Enter' && this.mode === 'code') {
      e.preventDefault();
      const indentation = this.getIndentation(this.targetText, this.currentIndex);
      this.typedText += '\n' + indentation;
      this.currentIndex += '\n'.length + indentation.length;
      this.updateDisplay();
      this.scrollToCurrentPosition();
      return;
    }

    if (e.key === 'Tab' && this.mode === 'code') {
      e.preventDefault();
      this.typedText += '  ';
      this.currentIndex += 2;
      this.updateDisplay();
      this.scrollToCurrentPosition();
      return;
    }

    if (e.key === 'Backspace') {
      if (this.typedText.length > 0) {
        this.typedText = this.typedText.slice(0, -1);
        this.currentIndex = Math.max(0, this.currentIndex - 1);
        this.updateDisplay();
        this.scrollToCurrentPosition();
      }
      return;
    }

    if (e.key.length === 1) {
      this.typedText += e.key;
      this.currentIndex++;
      this.updateDisplay();
      this.scrollToCurrentPosition();

      if (!this.startTime) {
        this.startTime = Date.now();
      }

      this.updateStats();

      if (this.currentIndex === this.targetText.length) {
        this.isFinished = true;
        this.isActive = false;
        if (this.timerInterval) {
          clearInterval(this.timerInterval);
          this.timerInterval = null;
        }
        this.showResultPopup();
      }
    }
  }

  scrollToCurrentPosition() {
    const spans = this.textDisplay.querySelectorAll('span');
    if (spans.length > 0) {
      const currentSpan = spans[this.typedText.length - 1] || spans[0];
      if (currentSpan) {
        const containerRect = this.textDisplay.getBoundingClientRect();
        const spanRect = currentSpan.getBoundingClientRect();
        
        if (spanRect.bottom > containerRect.bottom) {
          this.textDisplay.scrollTop += spanRect.bottom - containerRect.bottom + 50;
        } else if (spanRect.top < containerRect.top) {
          this.textDisplay.scrollTop -= containerRect.top - spanRect.top + 50;
        }
      }
    }
  }

  adjustZoom(delta) {
    this.zoomLevel = Math.max(50, Math.min(200, this.zoomLevel + delta));
    this.textDisplay.style.fontSize = `${this.zoomLevel}%`;
    this.zoomLevelDisplay.textContent = `${this.zoomLevel}%`;
  }

  showResultPopup() {
    // Update popup values
    this.resultWpm.textContent = this.wpmDisplay.textContent;
    this.resultAccuracy.textContent = this.accuracyDisplay.textContent;
    this.resultTime.textContent = this.timeLeftDisplay.textContent;
    
    // Show popup with animation
    this.resultPopup.style.display = 'flex';
    setTimeout(() => {
      this.resultPopup.classList.add('show');
    }, 10);
  }

  hideResultPopup() {
    this.resultPopup.classList.remove('show');
    setTimeout(() => {
      this.resultPopup.style.display = 'none';
    }, 300);
  }
}

// Initialize the application
new KeyPolarity();