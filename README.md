<h1 align="center">TP 2</h1>

# Practical Work 
---

Write-up for **Exercise 1: Conversion de températures** in JavaScript. 

---

## Temperature Conversion in JavaScript

This exercise demonstrates how to convert temperatures from Fahrenheit to Celsius using JavaScript. The function **degreC** takes a temperature in Fahrenheit as input and outputs its equivalent in Celsius using the standard conversion formula:

\[
C = \frac{5}{9} \times (F - 32)
\]

## Implementation

The JavaScript function **degreC** follows these steps:

1. Receives a temperature in Fahrenheit as input.
2. Applies the formula to convert it to Celsius.
3. Uses `toFixed(1)` to round the result to one decimal place.
4. Prints the converted temperature in a formatted message.

### Code

```javascript
function degreC(tempF) {
    let tempC = (5 / 9) * (tempF - 32);
    console.log(`This temperature equals ${tempC.toFixed(1)} degrees Celsius`);
}

// Example usage:
degreC(0);   // Output: This temperature equals -17.8 degrees Celsius
degreC(60);  // Output: This temperature equals 15.6 degrees Celsius
```

## Explanation

- **Formula Usage**: The function correctly applies the conversion formula.
- **Formatting**: The output is rounded to one decimal place for clarity.
- **Readability**: The function is simple and easy to understand.

## Example Output

```
This temperature equals -17.8 degrees Celsius
This temperature equals 15.6 degrees Celsius
```
***

Write-up for **Exercise 2: Conversion de durées** in JavaScript.

---

# Duration Conversion in JavaScript  

This exercise demonstrates how to convert a given number of seconds into days, hours, and minutes using JavaScript. The function **hjms** takes a duration in seconds as input and computes its equivalent in days, hours, and minutes.  

## Implementation  

The JavaScript function **hjms** follows these steps:  

1. **Extract Days**: Divide the total seconds by `86400` (seconds in a day) and round down using `Math.floor()`.  
2. **Extract Hours**: Divide the total seconds by `3600` (seconds in an hour) and round down.  
3. **Extract Minutes**: Divide the total seconds by `60` (seconds in a minute) and round down.  
4. **Display the Result**: Print the calculated values in a formatted message.  

### Code  

```javascript
function hjms(seconds) {
    let days = Math.floor(seconds / 86400);
    let hours = Math.floor((seconds % 86400) / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);

    console.log(`The duration is ${days} jours ${hours} heures ${minutes} minutes.`);
}

// Practical Example
hjms(235789); // Output: The duration is 2 jours 17 heures 29 minutes.
hjms(567231); // Output: The duration is 6 jours 13 heures 33 minutes.
```

## Explanation  

- **Modulo Operator (`%`) Usage**: To ensure correct breakdown, `seconds % 86400` is used to get the remaining seconds after extracting full days, and `seconds % 3600` ensures accurate minute calculation after extracting full hours.  
- **Corrected Hour and Minute Calculation**: The original implementation incorrectly calculated hours and minutes based on total seconds, so the updated version accurately extracts only the relevant portion.  
- **Formatted Output**: The output is displayed in a clear and structured manner.  

## Example Output  

```
The duration is 2 jours 17 heures 29 minutes.
The duration is 6 jours 13 heures 33 minutes.
```


***


Write-up for **Exercise 3: Classer 3 nombres** in JavaScript. 

---

# Sorting Three Numbers in JavaScript  

This exercise demonstrates how to sort three given numbers in ascending order using JavaScript. The function **troisNombres** takes three numbers as input and arranges them from the smallest to the largest.  

## Implementation  

The JavaScript function **troisNombres** follows these steps:  

1. **Store the Numbers in an Array**: The three numbers are placed in an array.  
2. **Sort the Array**: The `sort()` function is used with a comparison function `(x, y) => x - y` to ensure numeric sorting.  
3. **Format the Output**: The sorted numbers are joined into a string using `join(" ")` for clear display.  

### Code  

```javascript
function troisNombres(a, b, c) {
    let tableau = [a, b, c].sort((x, y) => x - y);
    console.log(`The ascending order of these numbers is: ${tableau.join(" ")}`);
}

// Practical Example
troisNombres(143, 10, 8); // Output: The ascending order of these numbers is: 8 10 143
```

## Explanation  

- **Sorting Mechanism**: The `sort()` function uses a comparison `(x, y) => x - y`, which ensures proper numerical ordering.  
- **Array Handling**: The numbers are stored in an array for easy manipulation.  
- **Formatted Output**: The `join(" ")` method neatly formats the sorted numbers in a single-line output.  

## Example Output  

```
The ascending order of these numbers is: 8 10 143
```

***


Write-up for **Exercise 4: Affichage de motifs - escaliers** in JavaScript. 
---

# Displaying a Triangular Pattern in JavaScript  


This exercise demonstrates how to generate a right-angled triangular pattern using JavaScript. The two functions, **triangl1** and **triangl2**, achieve the same result but use different loop structures.  

## Implementation  

The JavaScript functions **triangl1** and **triangl2** follow these steps:  

1. **triangl1 (Using While Loop)**:  
   - Starts with `i = 1` and increments until `taille`.  
   - Uses `console.log("*".repeat(i))` to print a row of increasing stars.  

2. **triangl2 (Using For Loop)**:  
   - Uses a `for` loop from `1` to `taille`.  
   - Prints stars in the same pattern as `triangl1`.  

### Code  

```javascript
function triangl1(taille) {
    let i = 1;
    while (i <= taille) {
        console.log("*".repeat(i));
        i++;
    }
}

function triangl2(taille) {
    for (let i = 1; i <= taille; i++) {
        console.log("*".repeat(i));
    }
}

// Practical Example
triangl1(7);
console.log("--------------");
triangl2(7);
```

## Explanation  

- **Pattern Growth**: Each row adds one more `*` until the given `taille` is reached.  
- **Loop Differences**:  
  - `triangl1` uses a `while` loop, iterating until the condition is met.  
  - `triangl2` uses a `for` loop for direct iteration control.  
- **String Manipulation**: The `repeat(i)` method generates the correct number of stars per row.  

## Example Output  

```
*
**
***
****
*****
******
*******
--------------
*
**
***
****
*****
******
*******
```

***



Write-up for **Exercise 4-bis: Affichage de motifs - pyramides** in JavaScript.

---

# Displaying a Pyramid Pattern in JavaScript  

This exercise demonstrates how to generate a pyramid-shaped pattern using JavaScript. The function **pyramide** constructs a symmetrical triangle where each row has a centered arrangement of stars.  

## Implementation  

The JavaScript function **pyramide** follows these steps:  

1. **Loop Through Rows**:  
   - The loop runs from `1` to `taille` (the height of the pyramid).  

2. **Calculate Spaces**:  
   - The number of leading spaces is `taille - i`, ensuring centering.  

3. **Calculate Stars**:  
   - The number of stars per row follows the formula:  
     \[
     \text{stars} = (2 \times i) - 1
     \]  

4. **Print the Row**:  
   - Concatenates spaces and stars for each row.  

### Code  

```javascript
// This is a pyramid execution
function pyramide(taille) {
    for (let i = 1; i <= taille; i++) {
        let espaces = " ".repeat(taille - i);
        let etoiles = "*".repeat(2 * i - 1);
        console.log(espaces + etoiles);
    }
}

// Practical Example
pyramide(7);
```

## Explanation  

- **Centered Alignment**: Spaces (`" ".repeat(taille - i)`) shift the stars to center them.  
- **Star Growth**: The formula `(2 * i - 1)` ensures odd-numbered star counts per row, forming a symmetric pyramid.  
- **Loop Execution**: The pattern builds row by row until `taille` is reached.  

## Example Output  

```
      *  
     ***  
    *****  
   *******  
  *********  
 ***********  
*************  
```  



***

Write-up for **Exercise 5: Tester si un nombre est premier** in JavaScript.
---

# Prime Number Detection in JavaScript  


This exercise demonstrates how to check whether a given number is prime using JavaScript. The function **estPremier** determines if a number is prime by testing its divisibility.  

## Implementation  

The JavaScript function **estPremier** follows these steps:  

1. **Handle Edge Cases**:  
   - If `n < 2`, it returns `false` immediately since prime numbers start from `2`.  

2. **Check for Divisibility**:  
   - Loops from `2` to `√n`, as any factor of `n` must be found in this range.  
   - If `n` is divisible by `i`, the function prints that `n` is not prime and specifies the divisor.  

3. **Confirm Prime Status**:  
   - If no divisors are found, it prints that `n` is a prime number.  

### Code  

```javascript
function estPremier(n) {
    // This is for not playing with me!
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(`${n} is not a prime number, it is divisible by ${i}`);
            return;
        }
    }
    console.log(`${n} is a prime number`);
}

// Practical Example
estPremier(16);  // Output: 16 is not a prime number, it is divisible by 2
estPremier(100); // Output: 100 is not a prime number, it is divisible by 2
estPremier(7);   // Output: 7 is a prime number
```

## Explanation  

- **Efficiency Improvement**: Instead of checking up to `n`, we optimize the loop to check only up to `√n`.  
- **Early Exit on Composite Detection**: The function exits immediately once a divisor is found.  
- **Formatted Output**: Clearly states whether the number is prime or gives the smallest divisor.  

## Example Output  

```
16 is not a prime number, it is divisible by 2
100 is not a prime number, it is divisible by 2
7 is a prime number
```

***


Write-up for **Exercise 6: Suite de Fibonacci** in JavaScript.

---

# Fibonacci Sequence in JavaScript  

This exercise demonstrates how to compute Fibonacci numbers using JavaScript. The implementation consists of two functions:  

- **Fibo1**: Computes the nth Fibonacci number.  
- **Fibo2**: Finds the first Fibonacci number greater than a given value.  

## Implementation  

### **Fibo1: Compute the nth Fibonacci Number**  

1. Handles base cases where `n = 0` or `n = 1`.  
2. Uses an iterative approach with two variables (`a` and `b`) to store the last two Fibonacci numbers.  
3. Iterates until reaching the nth Fibonacci number and returns the result.  

### **Fibo2: Find the First Fibonacci Number Greater than a Given Value**  

1. Initializes the first two Fibonacci numbers (`a = 0, b = 1`).  
2. Iterates while `b` is smaller than or equal to the given value.  
3. Updates `a` and `b` until it finds the first Fibonacci number greater than the input.  
4. Prints the result along with its position (index).  

### Code  

```javascript
// Fibonacci function to compute the nth Fibonacci number
function Fibo1(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Practical Example
console.log(Fibo1(10)); // Output: 55

// Function to find the first Fibonacci number greater than a given value
function Fibo2(valeur) {
    let a = 0, b = 1, index = 1;
    while (b <= valeur) {
        let temp = a + b;
        a = b;
        b = temp;
        index++;
    }
    console.log(`The first fib upper then a ${valeur} it s ${b} (rang ${index})`);
}

// Practical Example
Fibo2(100); // Output: The first fib value upper then a 100 it s 144 (rang 12)
```

## Explanation  

- **Efficiency**: Uses an iterative approach instead of recursion to avoid unnecessary recomputation.  
- **Space Optimization**: Only stores the last two Fibonacci numbers at any time, reducing memory usage.  
- **Formatted Output**: Displays clear results, including the index of the found Fibonacci number in `Fibo2`.  

## Example Output  

```
55
 The first fib value upper then a 100 it s 144 (rang 12)
```  


***


Write-up for **Exercise 7: Approximation de la racine carrée** in JavaScript. 

---

# Approximate Square Root Calculation in JavaScript  

This exercise demonstrates how to approximate the square root of a number using the **Newton-Raphson method** in JavaScript. The function **Raca1** iteratively computes an approximation of \(\sqrt{A}\) with high precision.  

## Implementation  

### **Steps Followed in Raca1**  

1. **Input Validation**: Ensures the number \( A \) is between `1` and `100`.  
2. **Initialize Approximation**: Sets an initial guess \( u_0 = A / 2 \).  
3. **Newton-Raphson Iteration**:  
   - Uses the recurrence formula:  
     \[
     u_{n+1} = \frac{u_n + A / u_n}{2}
     \]  
   - Stops when the difference \( |u^2 - A| \) is smaller than `1e-9` (high precision).  
4. **Prints the Approximate Square Root**.  

### Code  

```javascript
function Raca1(A) {
    if (A < 1 || A > 100) {
        console.log("Enter a number between 1 and 100.");
        return;
    }

    let u = A / 2; // Initial guess u0 = A / 2
    while (Math.abs(u * u - A) >= 1e-9) {
        u = (u + A / u) / 2;
    }

    console.log(`Approximate value of the square root of ${A} = ${u}`);
}

// Practical Example
Raca1(19.23); // Output: Approximate value of the square root of 19.23 = 4.385202389856321
```

## Explanation  

- **Newton-Raphson Convergence**: Quickly approximates the square root using an iterative formula.  
- **Precision Control**: Stops iteration when the approximation is accurate to `1e-9`.  
- **Formatted Output**: Clearly presents the computed value.  

## Example Output  

```
Approximate value of the square root of 19.23 = 4.385202389856321
```



# Conclusion  

This set of JavaScript exercises covers fundamental programming concepts, including mathematical operations, control structures, loops, and string manipulation. Each function efficiently solves a specific problem while demonstrating best practices in JavaScript development.  

## **Summary of the Practical Work**  

1. **Temperature Conversion (`degreC`)**  
   - Converts Fahrenheit to Celsius using a standard mathematical formula.  
   - Demonstrates numerical calculations and formatted output in JavaScript.  

2. **Duration Conversion (`hjms`)**  
   - Converts a given number of seconds into days, hours, and minutes.  
   - Uses `Math.floor()` and the modulo operator `%` for precise time breakdowns.  

3. **Sorting Three Numbers (`troisNombres`)**  
   - Sorts three numbers in ascending order using JavaScript's built-in `sort()` method.  
   - Utilizes an arrow function for proper numerical sorting.  

4. **Triangle Pattern (`triangl1`, `triangl2`)**  
   - Generates a right-angled triangle using `while` and `for` loops.  
   - Demonstrates loop structures and string manipulation with `repeat()`.  

5. **Pyramid Pattern (`pyramide`)**  
   - Builds a centered pyramid using spaces and stars.  
   - Implements precise string formatting to maintain symmetry.  

6. **Prime Number Check (`estPremier`)**  
   - Determines whether a number is prime using efficient divisibility checks.  
   - Optimized with `Math.sqrt(n)` to reduce unnecessary iterations.  

7. **Fibonacci Sequence (`Fibo1`, `Fibo2`)**  
   - Computes the nth Fibonacci number iteratively.  
   - Finds the first Fibonacci number greater than a given value.  

8. **Square Root Approximation (`Raca1`)**  
   - Uses the Newton-Raphson method for efficient square root approximation.  
   - Ensures precision by iterating until a defined threshold (`1e-9`) is met.  

## **Final Thoughts**  

These exercises reinforce core JavaScript concepts such as loops, conditionals, mathematical operations, and algorithm optimization. Each function is structured efficiently, ensuring clarity, performance, and readability. The practical work serves as a strong foundation for solving more complex problems in JavaScript.



