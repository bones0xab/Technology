//This is a pyramide Execution
function pyramide(taille) {
    for (let i = 1; i <= taille; i++) {
        let espaces = " ".repeat(taille - i);
        let etoiles = "*".repeat(2 * i - 1);
        console.log(espaces + etoiles);
    }
}

// Practical Work
pyramide(7);
