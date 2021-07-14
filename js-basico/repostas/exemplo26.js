for(let i = 0; i <= 100; i++) {
    console.log(i);
}

for(let i = 0; i <= 100; i++) {
    if(i === 50) {
        break;
    }
    console.log(i);
}

for(let i = 0; i <= 100; i++) {
    if(i === 50) {
        continue;
    }
    console.log(i);
}