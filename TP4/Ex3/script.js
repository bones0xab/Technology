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