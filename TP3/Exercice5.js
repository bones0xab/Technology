function estPremier(n) {
    //This is for not play with me !
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(`${n} It's not a premier Number , Is devided by ${i}`);
            return;
        }
    }
    console.log(`${n} It's a premier number`);
}

// Exemple Practical
estPremier(16);  // 7 it's Premier Number
estPremier(100); // 25 It's not a premier number, He's devided by 5
