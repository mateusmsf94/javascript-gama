function numeros(n1, n2) {
    if(n1 > n2) {
        console.log(`${n1} é maior que ${n2}`);
    }

    if(n1 < n2) {
        console.log(`${n2} é maior que ${n1}`);
    }

    if(n1 === n2) {
        console.log('numeros sao iguais')
    }
}

numeros(4, 5);
numeros(8, 3);
numeros(5, 5);