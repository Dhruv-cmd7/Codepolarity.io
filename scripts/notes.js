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

// Reference data structure
const references = {
    languages: {
        python: {
            name: "Python",
            icon: "fab fa-python",
            sections: {
                basics: {
                    title: "Basic Syntax",
                    content: [
                        {
                            title: "Hello World",
                            code: "print('Hello, World!')"
                        },
                        {
                            title: "Variables and Data Types",
                            code: "# Numbers\nx = 10          # Integer\ny = 3.14        # Float\nz = 2 + 3j      # Complex\n\n# Strings\nname = 'Python'  # Single quotes\nmessage = \"Hello\" # Double quotes\n\n# Boolean\nis_valid = True\nis_active = False\n\n# None\nvalue = None"
                        },
                        {
                            title: "Comments",
                            code: "# This is a single-line comment\n\n'''\nThis is a\nmulti-line comment\n'''"
                        }
                    ]
                },
                dataTypes: {
                    title: "Data Types and Collections",
                    content: [
                        {
                            title: "Lists",
                            code: "# Create a list\nnumbers = [1, 2, 3, 4, 5]\nfruits = ['apple', 'banana', 'cherry']\n\n# Access elements\nfirst = numbers[0]      # 1\nlast = numbers[-1]      # 5\n\n# Modify list\nnumbers.append(6)       # Add to end\nnumbers.insert(0, 0)    # Insert at index\nnumbers.remove(3)       # Remove value\ndel numbers[0]          # Remove by index\n\n# List operations\ncombined = numbers + fruits  # Concatenation\nrepeated = numbers * 2       # Repetition\n\n# List comprehension\nsquares = [x**2 for x in numbers]\neven_squares = [x**2 for x in numbers if x % 2 == 0]"
                        },
                        {
                            title: "Tuples",
                            code: "# Create a tuple\ncoordinates = (10, 20)\ncolors = ('red', 'green', 'blue')\n\n# Access elements\nx = coordinates[0]  # 10\n\n# Tuple unpacking\nx, y = coordinates\n\n# Single element tuple\nsingle = (42,)  # Note the comma"
                        },
                        {
                            title: "Dictionaries",
                            code: "# Create a dictionary\nperson = {\n    'name': 'John',\n    'age': 30,\n    'city': 'New York'\n}\n\n# Access values\nname = person['name']\nage = person.get('age')\n\n# Add/Modify\nperson['email'] = 'john@example.com'\nperson['age'] = 31\n\n# Remove\nperson.pop('city')\ndel person['age']\n\n# Dictionary comprehension\nsquares = {x: x**2 for x in range(5)}"
                        },
                        {
                            title: "Sets",
                            code: "# Create a set\nfruits = {'apple', 'banana', 'cherry'}\nnumbers = set([1, 2, 3, 4, 5])\n\n# Add/Remove elements\nfruits.add('orange')\nfruits.remove('banana')\n\n# Set operations\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\n\nunion = set1 | set2        # {1, 2, 3, 4, 5}\nintersection = set1 & set2 # {3}\ndifference = set1 - set2   # {1, 2}"
                        }
                    ]
                },
                controlFlow: {
                    title: "Control Flow",
                    content: [
                        {
                            title: "If-Else Statements",
                            code: "x = 10\n\nif x > 10:\n    print('Greater than 10')\nelif x == 10:\n    print('Equal to 10')\nelse:\n    print('Less than 10')\n\n# Ternary operator\nresult = 'Even' if x % 2 == 0 else 'Odd'"
                        },
                        {
                            title: "Loops",
                            code: "# For loop\nfor i in range(5):\n    print(i)\n\n# For loop with list\nfruits = ['apple', 'banana', 'cherry']\nfor fruit in fruits:\n    print(fruit)\n\n# For loop with dictionary\nperson = {'name': 'John', 'age': 30}\nfor key, value in person.items():\n    print(f'{key}: {value}')\n\n# While loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n\n# Break and Continue\nfor i in range(10):\n    if i == 3:\n        continue  # Skip iteration\n    if i == 7:\n        break     # Exit loop\n    print(i)"
                        }
                    ]
                },
                functions: {
                    title: "Functions",
                    content: [
                        {
                            title: "Function Definition",
                            code: "# Basic function\ndef greet(name):\n    return f'Hello, {name}!'\n\n# Function with default arguments\ndef power(base, exponent=2):\n    return base ** exponent\n\n# Function with variable arguments\ndef sum_all(*numbers):\n    return sum(numbers)\n\n# Function with keyword arguments\ndef create_person(name, **kwargs):\n    person = {'name': name}\n    person.update(kwargs)\n    return person\n\n# Lambda functions\nsquare = lambda x: x**2\nadd = lambda a, b: a + b"
                        },
                        {
                            title: "Function Examples",
                            code: "# Call functions\nresult = greet('John')\nprint(result)  # Hello, John!\n\n# Use default argument\nprint(power(3))     # 9\nprint(power(3, 3))  # 27\n\n# Use variable arguments\nprint(sum_all(1, 2, 3, 4))  # 10\n\n# Use keyword arguments\nperson = create_person('John', age=30, city='New York')\nprint(person)  # {'name': 'John', 'age': 30, 'city': 'New York'}\n\n# Use lambda functions\nprint(square(5))  # 25\nprint(add(3, 4))  # 7"
                        }
                    ]
                },
                oop: {
                    title: "Object-Oriented Programming",
                    content: [
                        {
                            title: "Class Definition",
                            code: "class Person:\n    # Class attribute\n    species = 'Human'\n\n    # Constructor\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    # Instance method\n    def greet(self):\n        return f'Hello, my name is {self.name}'\n\n    # Class method\n    @classmethod\n    def from_birth_year(cls, name, birth_year):\n        age = 2024 - birth_year\n        return cls(name, age)\n\n    # Static method\n    @staticmethod\n    def is_adult(age):\n        return age >= 18"
                        },
                        {
                            title: "Inheritance",
                            code: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return 'Woof!'\n\nclass Cat(Animal):\n    def speak(self):\n        return 'Meow!'"
                        }
                    ]
                },
                fileHandling: {
                    title: "File Handling",
                    content: [
                        {
                            title: "File Operations",
                            code: "# Write to file\nwith open('example.txt', 'w') as file:\n    file.write('Hello, World!\\n')\n    file.write('This is a new line')\n\n# Read from file\nwith open('example.txt', 'r') as file:\n    content = file.read()\n    print(content)\n\n# Read line by line\nwith open('example.txt', 'r') as file:\n    for line in file:\n        print(line.strip())"
                        }
                    ]
                },
                errorHandling: {
                    title: "Error Handling",
                    content: [
                        {
                            title: "Try-Except Blocks",
                            code: "try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nexcept Exception as e:\n    print(f'An error occurred: {e}')\nelse:\n    print('No errors occurred')\nfinally:\n    print('This always executes')"
                        }
                    ]
                }
            }
        },
        javascript: {
            name: "JavaScript",
            icon: "fab fa-js",
            sections: {
                basics: {
                    title: "Basic Syntax",
                    content: [
                        {
                            title: "Hello World",
                            code: "console.log('Hello, World!');"
                        },
                        {
                            title: "Variables and Data Types",
                            code: "// Numbers\nlet num = 42;\nconst pi = 3.14;\n\n// Strings\nlet str = 'Hello';\nlet template = `Hello ${name}`;\n\n// Boolean\nlet isTrue = true;\nlet isFalse = false;\n\n// Null and Undefined\nlet empty = null;\nlet notDefined = undefined;\n\n// Objects\nlet person = {\n    name: 'John',\n    age: 30\n};\n\n// Arrays\nlet numbers = [1, 2, 3, 4, 5];"
                        },
                        {
                            title: "Comments",
                            code: "// Single-line comment\n\n/*\nMulti-line\ncomment\n*/"
                        }
                    ]
                },
                dataTypes: {
                    title: "Data Types and Collections",
                    content: [
                        {
                            title: "Arrays",
                            code: "// Create array\nconst fruits = ['apple', 'banana', 'cherry'];\n\n// Access elements\nconst first = fruits[0];\nconst last = fruits[fruits.length - 1];\n\n// Modify array\nfruits.push('orange');     // Add to end\nfruits.unshift('pear');    // Add to start\nfruits.pop();             // Remove from end\nfruits.shift();           // Remove from start\n\n// Array methods\nconst doubled = numbers.map(x => x * 2);\nconst evens = numbers.filter(x => x % 2 === 0);\nconst sum = numbers.reduce((a, b) => a + b, 0);"
                        },
                        {
                            title: "Objects",
                            code: "// Create object\nconst person = {\n    name: 'John',\n    age: 30,\n    greet() {\n        return `Hello, ${this.name}`;\n    }\n};\n\n// Access properties\nconst name = person.name;\nconst greeting = person.greet();\n\n// Add/Modify properties\nperson.email = 'john@example.com';\nperson.age = 31;\n\n// Delete property\ndelete person.age;\n\n// Object methods\nconst keys = Object.keys(person);\nconst values = Object.values(person);\nconst entries = Object.entries(person);"
                        },
                        {
                            title: "Sets and Maps",
                            code: "// Set\nconst uniqueNumbers = new Set([1, 2, 2, 3, 3]);\nuniqueNumbers.add(4);\nuniqueNumbers.delete(2);\n\n// Map\nconst userMap = new Map();\nuserMap.set('name', 'John');\nuserMap.set('age', 30);\n\nconst name = userMap.get('name');\nuserMap.delete('age');"
                        }
                    ]
                },
                controlFlow: {
                    title: "Control Flow",
                    content: [
                        {
                            title: "If-Else Statements",
                            code: "const x = 10;\n\nif (x > 10) {\n    console.log('Greater than 10');\n} else if (x === 10) {\n    console.log('Equal to 10');\n} else {\n    console.log('Less than 10');\n}\n\n// Ternary operator\nconst result = x % 2 === 0 ? 'Even' : 'Odd';"
                        },
                        {
                            title: "Loops",
                            code: "// For loop\nfor (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n\n// For...of loop\nfor (const fruit of fruits) {\n    console.log(fruit);\n}\n\n// For...in loop\nfor (const key in person) {\n    console.log(`${key}: ${person[key]}`);\n}\n\n// While loop\nlet count = 0;\nwhile (count < 5) {\n    console.log(count);\n    count++;\n}\n\n// Break and Continue\nfor (let i = 0; i < 10; i++) {\n    if (i === 3) continue;\n    if (i === 7) break;\n    console.log(i);\n}"
                        }
                    ]
                },
                functions: {
                    title: "Functions",
                    content: [
                        {
                            title: "Function Definition",
                            code: "// Function declaration\nfunction greet(name) {\n    return `Hello, ${name}!`;\n}\n\n// Function expression\nconst greet = function(name) {\n    return `Hello, ${name}!`;\n};\n\n// Arrow function\nconst greet = (name) => `Hello, ${name}!`;\n\n// Default parameters\nconst greet = (name = 'World') => `Hello, ${name}!`;\n\n// Rest parameters\nconst sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);"
                        },
                        {
                            title: "Function Examples",
                            code: "// Call functions\nconsole.log(greet('John'));  // Hello, John!\n\n// Use default parameter\nconsole.log(greet());        // Hello, World!\n\n// Use rest parameters\nconsole.log(sum(1, 2, 3, 4)); // 10\n\n// Higher-order functions\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(x => x * 2);\nconst evens = numbers.filter(x => x % 2 === 0);\nconst sum = numbers.reduce((a, b) => a + b, 0);"
                        }
                    ]
                },
                async: {
                    title: "Asynchronous Programming",
                    content: [
                        {
                            title: "Promises",
                            code: "// Create promise\nconst fetchData = () => {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve('Data received');\n        }, 1000);\n    });\n};\n\n// Use promise\nfetchData()\n    .then(data => console.log(data))\n    .catch(error => console.error(error));"
                        },
                        {
                            title: "Async/Await",
                            code: "// Async function\nasync function getData() {\n    try {\n        const response = await fetch('https://api.example.com/data');\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.error('Error:', error);\n    }\n}"
                        }
                    ]
                }
            }
        },
        typescript: {
            name: "TypeScript",
            icon: "fab fa-js",
            sections: {
                basics: {
                    title: "Basic Syntax",
                    content: [
                        {
                            title: "Type Annotations",
                            code: "// Basic types\nlet name: string = 'John';\nlet age: number = 30;\nlet isActive: boolean = true;\n\n// Arrays\nlet numbers: number[] = [1, 2, 3];\nlet names: string[] = ['John', 'Jane'];\n\n// Tuples\nlet person: [string, number] = ['John', 30];\n\n// Enums\nenum Color {\n    Red,\n    Green,\n    Blue\n}\n\nlet color: Color = Color.Red;"
                        },
                        {
                            title: "Interfaces",
                            code: "interface Person {\n    name: string;\n    age: number;\n    email?: string;  // Optional\n    readonly id: number;  // Readonly\n}\n\nconst person: Person = {\n    name: 'John',\n    age: 30,\n    id: 1\n};"
                        },
                        {
                            title: "Type Aliases",
                            code: "type Point = {\n    x: number;\n    y: number;\n};\n\ntype Callback = (data: string) => void;\n\ntype StringOrNumber = string | number;"
                        }
                    ]
                },
                functions: {
                    title: "Functions",
                    content: [
                        {
                            title: "Function Types",
                            code: "// Function type\ntype GreetFunction = (name: string) => string;\n\nconst greet: GreetFunction = (name) => {\n    return `Hello, ${name}!`;\n};\n\n// Generic functions\nfunction identity<T>(arg: T): T {\n    return arg;\n}\n\nconst result = identity<string>('Hello');"
                        },
                        {
                            title: "Classes",
                            code: "class Person {\n    private name: string;\n    protected age: number;\n    public email: string;\n\n    constructor(name: string, age: number, email: string) {\n        this.name = name;\n        this.age = age;\n        this.email = email;\n    }\n\n    public greet(): string {\n        return `Hello, ${this.name}`;\n    }\n}\n\nclass Employee extends Person {\n    private salary: number;\n\n    constructor(name: string, age: number, email: string, salary: number) {\n        super(name, age, email);\n        this.salary = salary;\n    }\n}"
                        }
                    ]
                }
            }
        },
        java: {
            name: "Java",
            icon: "fab fa-java",
            sections: {
                basics: {
                    title: "Basic Syntax",
                    content: [
                        {
                            title: "Hello World",
                            code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}"
                        },
                        {
                            title: "Variables and Data Types",
                            code: "// Primitive types\nint number = 42;\ndouble pi = 3.14;\nboolean isTrue = true;\nchar letter = 'A';\n\n// Reference types\nString name = \"John\";\nInteger age = 30;\n\n// Arrays\nint[] numbers = {1, 2, 3, 4, 5};\nString[] names = {\"John\", \"Jane\"};\n\n// Collections\nList<String> fruits = new ArrayList<>();\nSet<Integer> uniqueNumbers = new HashSet<>();\nMap<String, Integer> ages = new HashMap<>();"
                        },
                        {
                            title: "Comments",
                            code: "// Single-line comment\n\n/*\nMulti-line\ncomment\n*/\n\n/**\n * Javadoc comment\n * @param name the name of the person\n * @return a greeting message\n */"
                        }
                    ]
                },
                oop: {
                    title: "Object-Oriented Programming",
                    content: [
                        {
                            title: "Class Definition",
                            code: "public class Person {\n    // Fields\n    private String name;\n    private int age;\n\n    // Constructor\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    // Methods\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public void greet() {\n        System.out.println(\"Hello, \" + name);\n    }\n\n    // Static method\n    public static int getAdultAge() {\n        return 18;\n    }\n}"
                        },
                        {
                            title: "Inheritance and Interfaces",
                            code: "// Interface\nexport interface Greetable {\n    void greet();\n}\n\n// Abstract class\npublic abstract class Animal {\n    protected String name;\n\n    public Animal(String name) {\n        this.name = name;\n    }\n\n    public abstract void makeSound();\n}\n\n// Concrete class\npublic class Dog extends Animal implements Greetable {\n    public Dog(String name) {\n        super(name);\n    }\n\n    @Override\n    public void makeSound() {\n        System.out.println(\"Woof!\");\n    }\n\n    @Override\n    public void greet() {\n        System.out.println(\"Hello, I'm \" + name);\n    }\n}"
                        },
                        {
                            title: "Enums and Records",
                            code: "// Enum\npublic enum Day {\n    MONDAY, TUESDAY, WEDNESDAY,\n    THURSDAY, FRIDAY, SATURDAY, SUNDAY\n}\n\n// Record (Java 14+)\npublic record Point(int x, int y) {\n    public double distanceFromOrigin() {\n        return Math.sqrt(x * x + y * y);\n    }\n}"
                        }
                    ]
                },
                collections: {
                    title: "Collections Framework",
                    content: [
                        {
                            title: "List Operations",
                            code: "List<String> fruits = new ArrayList<>();\n\n// Add elements\nfruits.add(\"Apple\");\nfruits.add(\"Banana\");\nfruits.add(1, \"Orange\");\n\n// Remove elements\nfruits.remove(\"Apple\");\nfruits.remove(0);\n\n// Access elements\nString first = fruits.get(0);\nint size = fruits.size();\n\n// Iterate\nfor (String fruit : fruits) {\n    System.out.println(fruit);\n}\n\n// Stream operations\nfruits.stream()\n    .filter(f -> f.startsWith(\"A\"))\n    .map(String::toUpperCase)\n    .forEach(System.out::println);"
                        },
                        {
                            title: "Map Operations",
                            code: "Map<String, Integer> ages = new HashMap<>();\n\n// Add entries\nages.put(\"John\", 30);\nages.put(\"Jane\", 25);\n\n// Access values\nint johnAge = ages.get(\"John\");\n\n// Check existence\nboolean hasJohn = ages.containsKey(\"John\");\n\n// Remove entry\nages.remove(\"John\");\n\n// Iterate\nfor (Map.Entry<String, Integer> entry : ages.entrySet()) {\n    System.out.println(entry.getKey() + \": \" + entry.getValue());\n}"
                        }
                    ]
                },
                concurrency: {
                    title: "Concurrency",
                    content: [
                        {
                            title: "Thread Creation",
                            code: "// Extend Thread class\nclass MyThread extends Thread {\n    public void run() {\n        System.out.println(\"Thread running\");\n    }\n}\n\n// Implement Runnable\nclass MyRunnable implements Runnable {\n    public void run() {\n        System.out.println(\"Runnable running\");\n    }\n}\n\n// Create and start threads\nThread thread1 = new MyThread();\nThread thread2 = new Thread(new MyRunnable());\n\nthread1.start();\nthread2.start();"
                        },
                        {
                            title: "Synchronization",
                            code: "class Counter {\n    private int count = 0;\n\n    // Synchronized method\n    public synchronized void increment() {\n        count++;\n    }\n\n    // Synchronized block\n    public void decrement() {\n        synchronized(this) {\n            count--;\n        }\n    }\n}\n\n// Atomic operations\nAtomicInteger atomicCount = new AtomicInteger(0);\natomicCount.incrementAndGet();"
                        }
                    ]
                }
            }
        },
        cpp: {
            name: "C++",
            icon: "fas fa-code",
            sections: {
                basics: {
                    title: "Basic Syntax",
                    content: [
                        {
                            title: "Hello World",
                            code: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}"
                        },
                        {
                            title: "Variables and Data Types",
                            code: "// Basic types\nint number = 42;          // Integer\ndouble pi = 3.14;        // Double precision float\nbool isTrue = true;      // Boolean\nchar letter = 'A';       // Character\n\n// Strings\nstd::string name = \"John\";  // String\n\n// Arrays\nint numbers[5] = {1, 2, 3, 4, 5};  // Static array\nstd::string names[2] = {\"John\", \"Jane\"};\n\n// Vectors (dynamic arrays)\nstd::vector<int> vec = {1, 2, 3};  // Dynamic array\nvec.push_back(4);                   // Add element\n\n// Maps (dictionaries)\nstd::map<std::string, int> ages;    // Key-value pairs\nages[\"John\"] = 30;\nages[\"Jane\"] = 25;"
                        },
                        {
                            title: "Pointers and References",
                            code: "int x = 10;\n\n// Pointers\nint* ptr = &x;  // Pointer to x\n*ptr = 20;      // Modify through pointer\n\n// References\nint& ref = x;    // Reference to x\nref = 30;       // Modify through reference\n\n// Smart pointers (C++11+)\nstd::unique_ptr<int> uptr = std::make_unique<int>(42);  // Unique ownership\nstd::shared_ptr<int> sptr = std::make_shared<int>(42);  // Shared ownership\n\n// Dynamic memory allocation\nint* arr = new int[5];  // Allocate array\ndelete[] arr;           // Deallocate array"
                        }
                    ]
                },
                oop: {
                    title: "Object-Oriented Programming",
                    content: [
                        {
                            title: "Class Definition",
                            code: "class Person {\nprivate:\n    std::string name;  // Private member\n    int age;\n\npublic:\n    // Constructor\n    Person(const std::string& name, int age) : name(name), age(age) {}\n\n    // Getter methods\n    std::string getName() const { return name; }\n    int getAge() const { return age; }\n\n    // Setter methods\n    void setName(const std::string& name) { this->name = name; }\n    void setAge(int age) { this->age = age; }\n\n    // Virtual method\n    virtual void greet() const {\n        std::cout << \"Hello, \" << name << std::endl;\n    }\n\n    // Destructor\n    ~Person() {}\n};"
                        },
                        {
                            title: "Inheritance and Polymorphism",
                            code: "// Abstract base class\nclass Animal {\nprotected:\n    std::string name;\n\npublic:\n    Animal(const std::string& name) : name(name) {}\n    virtual void makeSound() = 0;  // Pure virtual method\n    virtual ~Animal() {}           // Virtual destructor\n};\n\n// Derived class\nclass Dog : public Animal {\npublic:\n    Dog(const std::string& name) : Animal(name) {}\n\n    // Override virtual method\n    void makeSound() override {\n        std::cout << \"Woof!\" << std::endl;\n    }\n};\n\n// Using polymorphism\nAnimal* animal = new Dog(\"Buddy\");\nanimal->makeSound();  // Outputs: Woof!\ndelete animal;"
                        }
                    ]
                },
                templates: {
                    title: "Templates",
                    content: [
                        {
                            title: "Function Templates",
                            code: "// Generic function template\ntemplate <typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}\n\n// Usage with different types\nint maxInt = max(10, 20);          // T = int\ndouble maxDouble = max(3.14, 2.71); // T = double\n\n// Multiple template parameters\ntemplate <typename T, typename U>\nauto add(T a, U b) -> decltype(a + b) {\n    return a + b;\n}\n\n// Template specialization\ntemplate <>\nconst char* max(const char* a, const char* b) {\n    return (strcmp(a, b) > 0) ? a : b;\n}"
                        },
                        {
                            title: "Class Templates",
                            code: "// Generic class template\ntemplate <typename T>\nclass Box {\nprivate:\n    T content;\n\npublic:\n    Box(const T& content) : content(content) {}\n\n    T getContent() const { return content; }\n    void setContent(const T& content) { this->content = content; }\n};\n\n// Usage with different types\nBox<int> intBox(42);\nBox<std::string> stringBox(\"Hello\");\n\n// Template with multiple parameters\ntemplate <typename T, typename U>\nclass Pair {\nprivate:\n    T first;\n    U second;\n\npublic:\n    Pair(const T& first, const U& second) : first(first), second(second) {}\n\n    T getFirst() const { return first; }\n    U getSecond() const { return second; }\n};"
                        }
                    ]
                },
                stl: {
                    title: "Standard Template Library",
                    content: [
                        {
                            title: "Containers",
                            code: "// Vector (dynamic array)\nstd::vector<int> numbers = {1, 2, 3};\nnumbers.push_back(4);\nnumbers.pop_back();\n\n// List (doubly linked list)\nstd::list<std::string> names;\nnames.push_back(\"John\");\nnames.push_front(\"Jane\");\n\n// Map (ordered key-value pairs)\nstd::map<std::string, int> ages;\nages[\"John\"] = 30;\nages[\"Jane\"] = 25;\n\n// Set (ordered unique elements)\nstd::set<int> uniqueNumbers = {1, 2, 2, 3, 3};\nuniqueNumbers.insert(4);\n\n// Queue (FIFO)\nstd::queue<int> q;\nq.push(1);\nq.push(2);\nint front = q.front();\nq.pop();\n\n// Stack (LIFO)\nstd::stack<int> s;\ns.push(1);\ns.push(2);\nint top = s.top();\ns.pop();"
                        },
                        {
                            title: "Algorithms",
                            code: "std::vector<int> numbers = {3, 1, 4, 1, 5, 9};\n\n// Sort\nstd::sort(numbers.begin(), numbers.end());\n\n// Find\nauto it = std::find(numbers.begin(), numbers.end(), 4);\n\n// Transform\nstd::vector<int> doubled;\nstd::transform(numbers.begin(), numbers.end(),\n               std::back_inserter(doubled),\n               [](int x) { return x * 2; });\n\n// Remove duplicates\nstd::sort(numbers.begin(), numbers.end());\nnumbers.erase(std::unique(numbers.begin(), numbers.end()), numbers.end());\n\n// Accumulate\nint sum = std::accumulate(numbers.begin(), numbers.end(), 0);\n\n// Lambda expressions\nstd::for_each(numbers.begin(), numbers.end(),\n    [](int x) { std::cout << x << \" \"; });"
                        }
                    ]
                }
            }
        },
        rust: {
            name: "Rust",
            icon: "fas fa-code",
            sections: {
                basics: {
                    title: "Basic Syntax",
                    content: [
                        {
                            title: "Hello World",
                            code: "fn main() {\n    println!(\"Hello, World!\");\n}"
                        },
                        {
                            title: "Variables and Data Types",
                            code: "// Variables\nlet x = 10;          // immutable\nlet mut y = 20;      // mutable\n\n// Basic types\nlet num: i32 = 42;\nlet pi: f64 = 3.14;\nlet is_true: bool = true;\nlet letter: char = 'A';\n\n// Strings\nlet name: &str = \"John\";\nlet mut s = String::from(\"Hello\");\n\n// Arrays\nlet numbers = [1, 2, 3, 4, 5];\n\n// Vectors\nlet mut vec = vec![1, 2, 3];\nvec.push(4);\n\n// Tuples\nlet tuple: (i32, f64, char) = (42, 3.14, 'A');\nlet (x, y, z) = tuple;"
                        },
                        {
                            title: "Ownership and Borrowing",
                            code: "fn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1;  // s1 is moved to s2\n    // println!(\"{}\", s1);  // Error: s1 is no longer valid\n\n    let s3 = String::from(\"world\");\n    let s4 = &s3;  // s3 is borrowed\n    println!(\"{}\", s3);  // OK: s3 is still valid\n\n    // Mutable borrow\n    let mut s5 = String::from(\"hello\");\n    let s6 = &mut s5;\n    s6.push_str(\", world\");\n}"
                        }
                    ]
                },
                functions: {
                    title: "Functions and Closures",
                    content: [
                        {
                            title: "Function Definition",
                            code: "// Basic function\nfn add(x: i32, y: i32) -> i32 {\n    x + y\n}\n\n// Function with multiple return values\nfn divide(x: f64, y: f64) -> Result<f64, String> {\n    if y == 0.0 {\n        Err(String::from(\"division by zero\"))\n    } else {\n        Ok(x / y)\n    }\n}\n\n// Closures\nlet add_one = |x: i32| x + 1;\nlet multiply = |x: i32, y: i32| x * y;\n\n// Higher-order functions\nfn apply_twice<F>(f: F, x: i32) -> i32\nwhere\n    F: Fn(i32) -> i32,\n{\n    f(f(x))\n}"
                        }
                    ]
                },
                structs: {
                    title: "Structs and Enums",
                    content: [
                        {
                            title: "Struct Definition",
                            code: "// Basic struct\nstruct Point {\n    x: f64,\n    y: f64,\n}\n\n// Tuple struct\nstruct Color(u8, u8, u8);\n\n// Unit struct\nstruct Unit;\n\n// Methods\nimpl Point {\n    fn new(x: f64, y: f64) -> Point {\n        Point { x, y }\n    }\n\n    fn distance_from_origin(&self) -> f64 {\n        (self.x * self.x + self.y * self.y).sqrt()\n    }\n}"
                        },
                        {
                            title: "Enums and Pattern Matching",
                            code: "// Enum definition\nenum Message {\n    Quit,\n    Move { x: i32, y: i32 },\n    Write(String),\n    ChangeColor(i32, i32, i32),\n}\n\n// Pattern matching\nfn handle_message(msg: Message) {\n    match msg {\n        Message::Quit => println!(\"Quit\"),\n        Message::Move { x, y } => println!(\"Move to ({}, {})\", x, y),\n        Message::Write(text) => println!(\"Text message: {}\", text),\n        Message::ChangeColor(r, g, b) => println!(\"Change color to RGB({}, {}, {})\", r, g, b),\n    }\n}"
                        }
                    ]
                },
                traits: {
                    title: "Traits and Generics",
                    content: [
                        {
                            title: "Trait Definition",
                            code: "// Define trait\ntrait Greet {\n    fn greet(&self) -> String;\n}\n\n// Implement trait\nstruct Person {\n    name: String,\n}\n\nimpl Greet for Person {\n    fn greet(&self) -> String {\n        format!(\"Hello, {}!\", self.name)\n    }\n}\n\n// Generic function with trait bounds\nfn print_greeting<T: Greet>(item: &T) {\n    println!(\"{}\", item.greet());\n}"
                        },
                        {
                            title: "Generic Types",
                            code: "// Generic struct\nstruct Pair<T> {\n    first: T,\n    second: T,\n}\n\n// Generic implementation\nimpl<T> Pair<T> {\n    fn new(first: T, second: T) -> Self {\n        Self { first, second }\n    }\n}\n\n// Usage\nlet pair = Pair::new(1, 2);\nlet string_pair = Pair::new(\"hello\", \"world\");"
                        }
                    ]
                },
                error_handling: {
                    title: "Error Handling",
                    content: [
                        {
                            title: "Result and Option",
                            code: "// Result type\nfn divide(x: f64, y: f64) -> Result<f64, String> {\n    if y == 0.0 {\n        Err(String::from(\"division by zero\"))\n    } else {\n        Ok(x / y)\n    }\n}\n\n// Option type\nfn find_element(arr: &[i32], target: i32) -> Option<usize> {\n    for (i, &x) in arr.iter().enumerate() {\n        if x == target {\n            return Some(i);\n        }\n    }\n    None\n}\n\n// Using ? operator\nfn process_data() -> Result<(), String> {\n    let result = divide(10.0, 2.0)?;\n    println!(\"Result: {}\", result);\n    Ok(())\n}"
                        },
                        {
                            title: "Unwrap and Expect",
                            code: "// Unwrap\nlet x = Some(42).unwrap();  // 42\nlet y = None.unwrap();      // Panics!\n\n// Expect\nlet x = Some(42).expect(\"Value should exist\");  // 42\nlet y = None.expect(\"Value should exist\");      // Panics with message\n\n// Better error handling\nmatch divide(10.0, 0.0) {\n    Ok(result) => println!(\"Result: {}\", result),\n    Err(e) => println!(\"Error: {}\", e),\n}"
                        }
                    ]
                },
                concurrency: {
                    title: "Concurrency",
                    content: [
                        {
                            title: "Threads",
                            code: "use std::thread;\n\nfn main() {\n    let handle = thread::spawn(|| {\n        for i in 1..10 {\n            println!(\"Thread: {}\", i);\n            thread::sleep(std::time::Duration::from_millis(100));\n        }\n    });\n\n    for i in 1..5 {\n        println!(\"Main: {}\", i);\n        thread::sleep(std::time::Duration::from_millis(100));\n    }\n\n    handle.join().unwrap();\n}"
                        },
                        {
                            title: "Channels",
                            code: "use std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n\n    thread::spawn(move || {\n        let val = String::from(\"hello\");\n        tx.send(val).unwrap();\n    });\n\n    let received = rx.recv().unwrap();\n    println!(\"Got: {}\", received);\n}"
                        }
                    ]
                }
            }
        }
    },
    tools: {
        git: {
            name: "Git",
            icon: "fab fa-git-alt",
            sections: {
                basics: {
                    title: "Basic Commands",
                    content: [
                        {
                            title: "Initialize Repository",
                            code: "git init"
                        },
                        {
                            title: "Clone Repository",
                            code: "git clone <repository-url>"
                        },
                        {
                            title: "Add Files",
                            code: "git add .\ngit add <filename>"
                        },
                        {
                            title: "Commit Changes",
                            code: "git commit -m \"Your commit message\""
                        },
                        {
                            title: "Push Changes",
                            code: "git push origin main"
                        }
                    ]
                },
                branching: {
                    title: "Branching",
                    content: [
                        {
                            title: "Create Branch",
                            code: "git branch <branch-name>\ngit checkout <branch-name>\n# Or in one command:\ngit checkout -b <branch-name>"
                        },
                        {
                            title: "Merge Branch",
                            code: "git checkout main\ngit merge <branch-name>"
                        },
                        {
                            title: "Rebase Branch",
                            code: "git checkout feature\ngit rebase main"
                        }
                    ]
                },
                remote: {
                    title: "Remote Operations",
                    content: [
                        {
                            title: "Add Remote",
                            code: "git remote add origin <repository-url>"
                        },
                        {
                            title: "Fetch and Pull",
                            code: "git fetch origin\ngit pull origin main"
                        },
                        {
                            title: "Push to Remote",
                            code: "git push origin main\ngit push -u origin main  # Set upstream"
                        }
                    ]
                },
                history: {
                    title: "History and Logs",
                    content: [
                        {
                            title: "View History",
                            code: "git log\ngit log --oneline\ngit log --graph --oneline --all"
                        },
                        {
                            title: "Checkout Previous Commits",
                            code: "git checkout <commit-hash>\ngit checkout HEAD~1  # Previous commit"
                        },
                        {
                            title: "Reset Changes",
                            code: "git reset --soft HEAD~1  # Keep changes staged\ngit reset --mixed HEAD~1  # Keep changes unstaged\ngit reset --hard HEAD~1  # Discard changes"
                        }
                    ]
                },
                advanced: {
                    title: "Advanced Operations",
                    content: [
                        {
                            title: "Stash Changes",
                            code: "git stash\ngit stash save \"message\"\ngit stash list\ngit stash apply\ngit stash pop"
                        },
                        {
                            title: "Cherry-pick Commits",
                            code: "git cherry-pick <commit-hash>"
                        },
                        {
                            title: "Interactive Rebase",
                            code: "git rebase -i HEAD~3"
                        },
                        {
                            title: "Submodules",
                            code: "git submodule add <repository-url>\ngit submodule update --init --recursive"
                        }
                    ]
                }
            }
        },
        sql: {
            name: "SQL",
            icon: "fas fa-database",
            sections: {
                basics: {
                    title: "Basic Commands",
                    content: [
                        {
                            title: "Create Table",
                            code: "CREATE TABLE users (\n    id INT PRIMARY KEY,\n    name VARCHAR(100),\n    email VARCHAR(100) UNIQUE,\n    age INT,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);"
                        },
                        {
                            title: "Insert Data",
                            code: "INSERT INTO users (id, name, email, age)\nVALUES (1, 'John', 'john@example.com', 30);\n\n-- Insert multiple rows\nINSERT INTO users (id, name, email, age)\nVALUES \n    (2, 'Jane', 'jane@example.com', 25),\n    (3, 'Bob', 'bob@example.com', 35);"
                        },
                        {
                            title: "Select Data",
                            code: "SELECT * FROM users;\n\n-- Select specific columns\nSELECT name, email FROM users;\n\n-- Select with conditions\nSELECT * FROM users WHERE age > 25;\n\n-- Select with ordering\nSELECT * FROM users ORDER BY age DESC;\n\n-- Select with limit\nSELECT * FROM users LIMIT 5;"
                        }
                    ]
                },
                joins: {
                    title: "Joins",
                    content: [
                        {
                            title: "Inner Join",
                            code: "SELECT users.name, orders.product\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;"
                        },
                        {
                            title: "Left Join",
                            code: "SELECT users.name, orders.product\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;"
                        },
                        {
                            title: "Right Join",
                            code: "SELECT users.name, orders.product\nFROM users\nRIGHT JOIN orders ON users.id = orders.user_id;"
                        },
                        {
                            title: "Full Join",
                            code: "SELECT users.name, orders.product\nFROM users\nFULL JOIN orders ON users.id = orders.user_id;"
                        }
                    ]
                },
                aggregation: {
                    title: "Aggregation Functions",
                    content: [
                        {
                            title: "Basic Aggregations",
                            code: "SELECT \n    COUNT(*) as total_users,\n    AVG(age) as avg_age,\n    MAX(age) as max_age,\n    MIN(age) as min_age,\n    SUM(age) as total_age\nFROM users;"
                        },
                        {
                            title: "Group By",
                            code: "SELECT \n    age,\n    COUNT(*) as count\nFROM users\nGROUP BY age\nHAVING COUNT(*) > 1\nORDER BY count DESC;"
                        }
                    ]
                },
                subqueries: {
                    title: "Subqueries",
                    content: [
                        {
                            title: "Basic Subquery",
                            code: "SELECT name, age\nFROM users\nWHERE age > (SELECT AVG(age) FROM users);"
                        },
                        {
                            title: "Correlated Subquery",
                            code: "SELECT name, age\nFROM users u1\nWHERE age > (\n    SELECT AVG(age)\n    FROM users u2\n    WHERE u2.id != u1.id\n);"
                        }
                    ]
                },
                transactions: {
                    title: "Transactions",
                    content: [
                        {
                            title: "Basic Transaction",
                            code: "BEGIN TRANSACTION;\n\nUPDATE accounts\nSET balance = balance - 100\nWHERE id = 1;\n\nUPDATE accounts\nSET balance = balance + 100\nWHERE id = 2;\n\nCOMMIT;"
                        },
                        {
                            title: "Transaction with Rollback",
                            code: "BEGIN TRANSACTION;\n\nUPDATE accounts\nSET balance = balance - 100\nWHERE id = 1;\n\n-- If something goes wrong\nROLLBACK;"
                        }
                    ]
                },
                indexes: {
                    title: "Indexes",
                    content: [
                        {
                            title: "Create Index",
                            code: "CREATE INDEX idx_users_email ON users(email);\n\n-- Composite index\nCREATE INDEX idx_users_name_age ON users(name, age);\n\n-- Unique index\nCREATE UNIQUE INDEX idx_users_email_unique ON users(email);"
                        },
                        {
                            title: "Drop Index",
                            code: "DROP INDEX idx_users_email;"
                        }
                    ]
                }
            }
        }
    }
};

// DOM Elements
const notesContainer = document.getElementById('notesContainer');
const searchInput = document.getElementById('searchInput');
const languageFilter = document.getElementById('languageFilter');
const categoryFilter = document.getElementById('categoryFilter');
const languagesList = document.getElementById('languagesList');
const toolsList = document.getElementById('toolsList');
const referenceContent = document.getElementById('referenceContent');
const currentSection = document.getElementById('currentSection');
const copyBtn = document.getElementById('copyBtn');
const themeToggle = document.getElementById('themeToggle');

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

// Initialize the application
function initializeApp() {
    populateSidebar();
    setupEventListeners();
    setupTheme();
}

// Populate sidebar with languages and tools
function populateSidebar() {
    // Populate languages
    Object.entries(references.languages).forEach(([key, lang]) => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.innerHTML = `<i class="${lang.icon}"></i> ${lang.name}`;
        li.dataset.type = 'language';
        li.dataset.key = key;
        languagesList.appendChild(li);
    });

    // Populate tools
    Object.entries(references.tools).forEach(([key, tool]) => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.innerHTML = `<i class="${tool.icon}"></i> ${tool.name}`;
        li.dataset.type = 'tool';
        li.dataset.key = key;
        toolsList.appendChild(li);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Sidebar navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const type = item.dataset.type;
            const key = item.dataset.key;
            loadReference(type, key);
            
            // Update active state
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.nav-item').forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
        });
    });

    // Copy button
    copyBtn.addEventListener('click', () => {
        const content = referenceContent.textContent;
        navigator.clipboard.writeText(content).then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy All';
            }, 2000);
        });
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
}

// Load reference content
function loadReference(type, key) {
    const reference = type === 'language' ? references.languages[key] : references.tools[key];
    currentSection.textContent = reference.name;
    
    let content = '';
    Object.entries(reference.sections).forEach(([sectionKey, section]) => {
        content += `
            <div class="reference-section" id="${sectionKey}">
                <h3 class="section-title">${section.title}</h3>
                ${section.content.map(item => `
                    <div class="code-block">
                        <h4>${item.title}</h4>
                        <pre><code class="language-${key}">${item.code}</code></pre>
                        <button class="copy-code-btn" onclick="copyCode(this)">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
    });
    
    referenceContent.innerHTML = content;
    Prism.highlightAll();
}

// Copy code block
function copyCode(button) {
    const codeBlock = button.previousElementSibling;
    const code = codeBlock.textContent;
    navigator.clipboard.writeText(code).then(() => {
        button.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-copy"></i>';
        }, 2000);
    });
}

// Theme management
function setupTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
    themeToggle.innerHTML = theme === 'light' 
        ? '<i class="fas fa-moon"></i> Dark Mode'
        : '<i class="fas fa-sun"></i> Light Mode';
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp); 