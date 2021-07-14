function diaDeAula(diaDaSemana) {
    if(diaDaSemana ==='sabado' || diaDaSemana ==='domingo') {
        return 'hoje nao tem aula, descance';
    }
    else {
        return 'hoje tem aula, vamos estudar!!!';
    }
}

console.log(diaDeAula('quarta'));
console.log(diaDeAula('segunda'));
console.log(diaDeAula('sabado'));
