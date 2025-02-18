
function hjms(seconds) {
    let days = Math.floor(seconds / 86400);

    let hours = Math.floor(seconds / 3600);
    
    let minutes = Math.floor(seconds / 60);

    console.log(`The durations are ${days} jours ${hours} heures ${minutes} minutes `);
}

// Practical Example
hjms(235789); // 2 Days 17 Hours 29 minutes 
hjms(567231); // 6 Days 13 Hours 33 minutes 
