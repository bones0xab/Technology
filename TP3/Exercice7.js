function Raca1(A) {
    if (A < 1 || A > 100) {
        console.log("Enter number between 1 and 100.");
        return;
    }

    let u = A / 2; // u0 = A / 2
    while (Math.abs(u * u - A) >= 1e-9) {
        u = (u + A / u) / 2;
    }

    console.log(`Approximate value of the square root of   ${A} = ${u}`);
}

// Practical Example
Raca1(19.23); //  
