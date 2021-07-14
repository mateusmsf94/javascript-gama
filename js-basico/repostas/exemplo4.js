function queroLucrar(valorProporcionalInicial, proporcao, lucro){
    let valorOriginal = valorProporcionalInicial/ (proporcao/100);
    let valorDeVenda = valorOriginal + valorOriginal * (lucro/100);
    return valorDeVenda;
}

console.log(queroLucrar(300, 60, 25));