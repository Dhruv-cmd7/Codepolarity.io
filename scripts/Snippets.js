const codeSnippets = [
  {
    id: 1,
    language: 'javascript',
    code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x < pivot);
  const right = arr.slice(1).filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}`
  },
  {
    id: 2,
    language: 'javascript',
    code: `const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}`
  },
  {
    id: 3,
    language: 'javascript',
    code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}`
  }
];

const englishSnippets = [
  {
    id: 1,
    text: "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the English alphabet at least once. Pangrams are often used to display font samples and test keyboards."
  },
  {
    id: 2,
    text: "In programming, attention to detail is crucial. Every semicolon, bracket, and variable name must be precise. Good developers not only write functional code but also ensure it is readable and maintainable."
  },
  {
    id: 3,
    text: "Software engineering is both an art and a science. While the scientific principles of algorithms and data structures form the foundation, creativity in problem-solving and design patterns elevate code to elegance."
  }
];