/*
Validando CPF com classes:

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


class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    verificarSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;

    }

    geraNovoCpf() {
        const cpfSemDigitos =  this.cpfLimpo.slice(0, -2);

        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);

        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
            total+= reverso * Number(stringNumerica);
            reverso-=1;        
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo != 'string') return false;
        if (this.cpfLimpo.length != 11) return false;
        if (this.verificarSequencia()) return false;

        this.geraNovoCpf()
        return this.novoCPF === this.cpfLimpo;
    }
}

const validacpf = new ValidaCPF('705.484.450-52');

if(validacpf.valida()) {
    console.log('CPF Válido!');
} else {
    console.log('CPF Inválido!');
}


