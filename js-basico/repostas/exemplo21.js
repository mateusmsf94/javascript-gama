for(let num = 20; num <= 100; num += 10) {
    if(num === 60 || num === 90) {
        console.log('CONTINUE');
        continue;
    }
    console.log(num);
}