/*
Validando CPF

705.484.450-52 070.987.720-03

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0  = 237


7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10


11 - (237 % 11) = 5 (Primeiro digíto)
11 - (284 % 11) = 2 (Primeiro digíto)

Passos 1:
- Pegar os 9 digitos do CPF.
- Multiplicar cada digito por uma sequencia regressiva (10 9  8  7  6  5  4  3  2).
- Pegar o total da conta e fazer a conta: 11 - (total % 11) = Primeiro digito.
- Se o digito que sair do calculo for maior que 9, ele é 0.

Passo 2:
- Agora pegamos os 9 digitos do CPF e incluimos o digito novo.
- Mutiplicar cada digito por uma sequência regressiva (11 10 9  8  7  6  5  4  3  2).
- Pega o total da conta e fazemos a conta: 11 - (total % 11) = Segundo digito.
- Se o digito que sair do calculo for maior que 9, ele é 0.

Passo 3:
- Adicionamos os 2 digitos gerados aos 9 digitos iniciais.
- Comparar os 2 CPFs (O com os 2 digitos gerados e o original)
- Se o forem iguais, o cpf é válido, se não for é inválido.
*/


function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length != 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCFF = cpfParcial + digito1 + digito2;

    return true ? novoCFF === this.cpfLimpo : false;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regresivo = cpfArray.length + 1;

    let total = cpfArray.reduce((acumulador, valorAtual) => {
        acumulador+= (regresivo * Number(valorAtual));
        regresivo--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.484.450-52');

if(cpf.valida()) {
    console.log('CPF Válido.');
} else {
    console.log('CPF Inválido.');
}
