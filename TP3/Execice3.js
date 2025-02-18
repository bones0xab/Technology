function troisNombres(a, b, c) {
    let tableau = [a, b, c].sort((x, y) => x - y);
    console.log(`The ascendent Order of these numbers are : ${tableau.join(" ")}`);
}

// Practical work
troisNombres(143, 10, 8); 
