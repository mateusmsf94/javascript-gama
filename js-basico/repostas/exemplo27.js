function calculadora(op, n1, n2) {
    switch (op) {
        case 'soma':
            console.log(n1 + n2);
            break;
        
        case 'subtracao':
            console.log(n1 - n2);
            break;

        case 'multiplicacao':
            console.log(n1 * n2);
            break;

        case 'divisao':
            console.log(n1 / n2);
            break;
    
        default: console.log('operacao invalida');
            break;
    }
}

calculadora('soma', 10, 2);
calculadora('subtracao', 10, 2);
calculadora('multiplicacao', 10, 2);
calculadora('divisao', 10, 2);
calculadora('potencia', 10, 2);