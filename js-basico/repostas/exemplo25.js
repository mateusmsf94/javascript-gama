function ePar(a, b) {
    let resultado = a/b;
    
    if(a % b === 0) {
        console.log(`${resultado} é par`);
    }
    else {    
    console.log(resultado);   
    }
}

ePar(5, 4);
ePar(8, 4);