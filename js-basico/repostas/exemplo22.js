class Conta {
    constructor() {
        this.saldo = 100; 
    }

    depositar(quantia) {
        this.saldo += quantia;
    }
    
    sacar(quantia) {
        this.saldo -= quantia;
    }

    consultarSaldo() {
        console.log(this.saldo);
    }

}

let contaMateus = new Conta();
contaMateus.depositar(500);
contaMateus.consultarSaldo();
contaMateus.sacar(200);
contaMateus.consultarSaldo();