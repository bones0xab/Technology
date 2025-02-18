//This is the Febonacci Functions
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

// Exemple Practice
console.log(Fibo1(10)); 

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
Fibo2(100); 
