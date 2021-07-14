/* Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'
para números divisiveis por 3 e 5, para números divisíveis por 3 irá impirmir 'Fizz'
e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, 
se não cumprir nenhum dos casos acima imprime o próprio número. */

function fizzBuzz(numero) {
    if ((numero % 3 === 0) && (numero % 5 ===0)) {
        return 'FizzBuzz';
    }

    else if(numero % 3 === 0) {
        return 'Fizz';
    }

    else if(numero % 5 === 0) {
        return 'Buzz';
    }

    else {
        return numero;
    }
}
console.log(fizzBuzz(2));
console.log(fizzBuzz(6));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));