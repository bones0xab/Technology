# TP4
---

## OverView
---

In this practical work we get into the exercises using the JS.

***

# Exercise 1: Text Permutation

## Description
This exercise demonstrates a classic programming concept: permutation of values. The application features a simple form with two text input fields and a button. When the user clicks the button, the content of the two text fields is swapped.

## Features
- Two text input fields for entering different texts
- A button that swaps the content between the two fields
- Attractive gradient background and responsive design

## Implementation

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Permutation Exercise</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Permutation Exercise</h1>
    <form>
        <label for="text1">Text 1:</label>
        <input type="text" id="text1" name="text1"><br><br>
        
        <label for="text2">Text 2:</label>
        <input type="text" id="text2" name="text2"><br><br>
        
        <button type="button" onclick="permuteText()">Permuter</button>
    </form>

    <script>
        function permuteText() {
            // Get the values of the two text fields
            let text1 = document.getElementById('text1').value;
            let text2 = document.getElementById('text2').value;

            // Swap the values
            document.getElementById('text1').value = text2;
            document.getElementById('text2').value = text1;
        }
    </script>
</body>
</html>
```

### CSS Styling
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #14cb35, #fad0c4);
    font-family: Arial, sans-serif;
}
.container {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
h1 {
    color: #1b090b;
}
label {
    font-weight: bold;
    color: #333;
}
input {
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #302224;
    border-radius: 5px;
    width: 100%;
}
button {
    background: #956bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}
button:hover {
    background: #e05668;
}
```

## How It Works
1. The JavaScript function `permuteText()` is called when the button is clicked
2. The function retrieves the current values from both text fields
3. It then assigns the value from the second field to the first field and vice versa
4. This creates the permutation effect where the text inputs are swapped

## Screenshots

### Initial State
[Insert screenshot of the form with sample text in both fields]

### After Clicking "Permuter" Button
[Insert screenshot showing the text values have been swapped]

----

# Exercise 2: Simple Calculator

## Description
This exercise implements a basic math calculator with the four fundamental operations: addition, subtraction, multiplication, and division. The application features a clean interface with two input fields for numbers, a result field, and four operation buttons.

## Features
- Input fields for two numbers
- Four operation buttons (Add, Subtract, Multiply, Divide)
- Read-only result field
- Error handling for division by zero
- Attractive gradient background and responsive design

## Implementation

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Math Calculator</h1>
    <form>
        <label for="num1">Number 1:</label>
        <input type="number" id="num1" name="num1"><br><br>
        
        <label for="num2">Number 2:</label>
        <input type="number" id="num2" name="num2"><br><br>
        
        <label for="result">Result:</label>
        <input type="number" id="result" name="result" readonly><br><br>
        
        <button type="button" onclick="calculate('add')">Add</button>
        <button type="button" onclick="calculate('subtract')">Subtract</button>
        <button type="button" onclick="calculate('multiply')">Multiply</button>
        <button type="button" onclick="calculate('divide')">Divide</button>
    </form>

    <script>
        function calculate(operation) {
            // Get the values of the two numbers
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            let resultField = document.getElementById('result');

            let result;
            switch (operation) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = "Error: Division by zero";
                    }
                    break;
                default:
                    result = "Invalid operation";
            }

            // Display the result
            resultField.value = result;
        }
    </script>
</body>
</html>
```

### CSS Styling
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
    font-family: Arial, sans-serif;
}
.container {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
}
h1 {
    color: #6a0572;
}
label {
    font-weight: bold;
    color: #333;
}
input {
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #6a0572;
    border-radius: 5px;
    width: 100%;
    text-align: center;
}
button {
    background: #6a0572;
    color: white;
    border: none;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}
button:hover {
    background: #450347;
}
```

## How It Works
1. The user enters two numbers in the input fields
2. The user clicks one of the four operation buttons
3. The `calculate()` function is called with the selected operation as a parameter
4. The function:
   - Retrieves the values from the input fields
   - Converts them to floating-point numbers
   - Performs the selected operation
   - Handles division by zero error
   - Displays the result in the read-only result field

## Screenshots

### Initial State
[Insert screenshot of the calculator with empty fields]

### Addition Example
[Insert screenshot showing 5 + 3 = 8]

### Division by Zero Error
[Insert screenshot showing the division by zero error message]

***



# Exercise 3: BMI Calculator

## Description
This exercise implements a Body Mass Index (BMI) calculator. The application allows users to input their weight and height, then calculates their BMI and categorizes it according to standard health classifications. The calculator features a clean, user-friendly interface with proper validation and clear results.

## Features
- Input fields for weight (in kg) and height (in meters)
- Calculation button
- Input validation
- BMI category classification (Underweight, Normal weight, Overweight, Obese)
- Responsive design with a clean, modern layout

## Implementation

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>BMI Calculator</h1>
        <form id="bmiForm">
            <div class="input-group">
                <label for="weight">Weight (kg):</label>
                <input type="number" id="weight" name="weight" step="0.1" required>
            </div>
            <div class="input-group">
                <label for="height">Height (m):</label>
                <input type="number" id="height" name="height" step="0.01" required>
            </div>
            <button type="button" onclick="calculateBMI()">Calculate IMC</button>
        </form>
        <div id="result" class="result"></div>
    </div>

    <script src="script.js"></script> 
</body>
</html>
```

### CSS Styling
```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.input-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.result {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}
```

### JavaScript Implementation
```javascript
// script.js
function calculateBMI() {
    // Get weight and height values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI is: <strong>${bmi}</strong>`;

    // Optional: Add BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    resultDiv.innerHTML += `<br>Category: <strong>${category}</strong>`;
}
```

## How It Works
1. The user enters their weight in kilograms and height in meters
2. When the "Calculate IMC" button is clicked, the `calculateBMI()` function is executed
3. The function:
   - Retrieves and validates the input values
   - Calculates the BMI using the formula: weight / (height²)
   - Determines the BMI category based on standard medical classifications
   - Displays the result and category to the user

## Screenshots

### Initial State
[Insert screenshot of the empty BMI calculator form]

### Example Calculation
[Insert screenshot showing a BMI calculation with result and category]

### Validation Error
[Insert screenshot showing the validation error message]


***


# Exercise 4: Scientific Calculator

## Description
This exercise implements an advanced scientific calculator using pure JavaScript for calculations and CSS Grid for layout. The calculator features standard arithmetic operations, parentheses for complex expressions, and scientific functions such as square root, trigonometric functions, logarithms, and power functions.

## Features
- Clean grid-based interface
- Basic arithmetic operations (+, -, *, /)
- Parentheses for expression grouping
- Decimal point support
- Scientific functions:
  - Square root (√)
  - Trigonometric functions (sin, cos, tan)
  - Logarithm (log10)
  - Power function (x^y)
- Error handling for invalid expressions

## Implementation

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scientific Calculator</title>
    <link  rel="stylesheet"  href="style.css"></link>
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" class="display" disabled>
        <button onclick="clearDisplay()" class="clear">C</button>
        <button onclick="appendToDisplay('(')">(</button>
        <button onclick="appendToDisplay(')')">)</button>
        <button onclick="appendToDisplay('/')">/</button>
        <button onclick="appendToDisplay('7')">7</button>
        <button onclick="appendToDisplay('8')">8</button>
        <button onclick="appendToDisplay('9')">9</button>
        <button onclick="appendToDisplay('*')">*</button>
        <button onclick="appendToDisplay('4')">4</button>
        <button onclick="appendToDisplay('5')">5</button>
        <button onclick="appendToDisplay('6')">6</button>
        <button onclick="appendToDisplay('-')">-</button>
        <button onclick="appendToDisplay('1')">1</button>
        <button onclick="appendToDisplay('2')">2</button>
        <button onclick="appendToDisplay('3')">3</button>
        <button onclick="appendToDisplay('+')">+</button>
        <button onclick="appendToDisplay('0')">0</button>
        <button onclick="appendToDisplay('.')">.</button>
        <button onclick="calculate()" class="equal">=</button>
        <button onclick="appendToDisplay('Math.sqrt(')">√</button>
        <button onclick="appendToDisplay('Math.sin(')">sin</button>
        <button onclick="appendToDisplay('Math.cos(')">cos</button>
        <button onclick="appendToDisplay('Math.tan(')">tan</button>
        <button onclick="appendToDisplay('Math.log10(')">log</button>
        <button onclick="appendToDisplay('Math.pow(')">x^y</button>
    </div>

    <script>
        function appendToDisplay(value) {
            document.getElementById("display").value += value;
        }

        function clearDisplay() {
            document.getElementById("display").value = "";
        }

        function calculate() {
            try {
                document.getElementById("display").value = eval(document.getElementById("display").value);
            } catch (error) {
                alert("Invalid Expression");
            }
        }
    </script>
</body>
</html>
```

### CSS Styling
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}
.calculator {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 20px;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.display {
    grid-column: span 4;
    height: 50px;
    text-align: right;
    font-size: 1.5em;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
button {
    padding: 15px;
    font-size: 1.2em;
    cursor: pointer;
    border: none;
    background: #ddd;
    border-radius: 5px;
}
button:active {
    background: #bbb;
}
.equal {
    grid-column: span 2;
    background: #28a745;
    color: white;
}
.clear {
    background: #dc3545;
    color: white;
}
```

## How It Works
1. The calculator uses a grid layout with buttons arranged in a similar fashion to physical calculators
2. Each button calls one of three JavaScript functions:
   - `appendToDisplay(value)`: Adds the clicked value to the display
   - `clearDisplay()`: Clears the display
   - `calculate()`: Evaluates the expression in the display
3. Scientific functions are implemented by adding JavaScript Math object methods to the display
4. The JavaScript `eval()` function is used to calculate the result of the expression
5. Try-catch error handling prevents the calculator from crashing on invalid expressions

## Screenshots

### Initial State
[Insert screenshot of the empty calculator]

### Basic Arithmetic Example
[Insert screenshot showing a basic calculation like 12 + 34 = 46]

### Scientific Function Example
[Insert screenshot showing a scientific calculation like sin(30) or sqrt(16)]

### Error Handling
[Insert screenshot showing the error alert for an invalid expression]


***


# Project Summary

This project consists of four web development exercises that demonstrate progressive complexity in HTML, CSS, and JavaScript implementation:

1. **Text Permutation Exercise**: A simple form application that demonstrates basic DOM manipulation by allowing users to swap text between two input fields.

2. **Basic Calculator**: A calculator that implements the four fundamental arithmetic operations (addition, subtraction, multiplication, division) with a clean user interface.

3. **BMI Calculator**: A health-focused application that calculates Body Mass Index and categorizes results according to standard health classifications.

4. **Scientific Calculator**: An advanced calculator implementing scientific functions using pure JavaScript and CSS Grid layout for a professional, responsive design.

Each exercise showcases important web development concepts including DOM manipulation, event handling, form validation, conditional logic, CSS styling techniques, and JavaScript functions. The progression from simple to complex applications demonstrates an increasing mastery of front-end web development fundamentals.

These exercises serve as practical implementations of course concepts and provide a foundation for more advanced web development projects in the future.
