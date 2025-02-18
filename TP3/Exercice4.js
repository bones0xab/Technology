
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


// Practical work

triangl1(7);
console.log("--------------");
triangl2(7);
