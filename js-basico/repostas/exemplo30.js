function contaJantar(valor) {
    let taxaGarcom = valor/10;
    let total = valor + taxaGarcom;
    console.log(`taxa do garcom: ${taxaGarcom}`);
    console.log(`total a ser pago: ${total}`);
}

contaJantar(500);