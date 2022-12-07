/*
Polimorfismo: Forma de fazer um metodo se comportar de forma diferente
    - Praticamente, você cria uma superclass e adapta o metodo nas classes
        herdeiras dela.
*/

// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor)  {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    };

    this.saldo -= valor;
    this.verSaldo();
    return 'Valor sacado com sucesso';

}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();

}

Conta.prototype.verSaldo = function() {
    console.log(`Olá! Seu saldo atual é R$:${this.saldo.toFixed(2)}`);
}

conta = new Conta('0001', '33333-3', 100);

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}


corrente = new ContaCorrente('0002', '44444-4', 100, 100);

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const poupanca = new ContaPoupanca('0003', '55555-5', 1000);

poupanca.verSaldo();
poupanca.sacar(1000);
poupanca.sacar(1);