for(let num = 10; num <= 60; num += 5) {
    if(num === 35 || num === 45) {
        console.log('PULOU');
        continue;
    }
    console.log(num);
}