function parOuImpar(num) {
    if (num % 2 === 0) {
        return 'numero par'
    }
    else {
        return 'numero impar'
    }
}

console.log(parOuImpar(2));
console.log(parOuImpar(5));
console.log(parOuImpar(3));
console.log(parOuImpar(4));