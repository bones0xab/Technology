function degreC(tempF) {
    let tempC = (5 / 9) * (tempF - 32);
    console.log(`This temperature equal to  ${tempC.toFixed(1)} degree Celsius`);
}

// Examples
degreC(0);   // -17.8°C
degreC(60);  // 15.6°C