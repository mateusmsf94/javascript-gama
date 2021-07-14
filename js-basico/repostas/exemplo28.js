function desconto(precoInicial, perct) {
    let desconto = precoInicial*perct/100;
    let precoFinal = precoInicial - desconto;
    console.log(`o preco final é de ${precoFinal} reais \ne o desconto foi de ${desconto} reais`);
}

desconto(1000, 12);