import validaCPF from './ValidaCPF';

export default class GeraCPF {
    rand(min = 100000000, max=999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatado(cpf) {
        return (
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11)
        );
    }

    geraNovoCpf() {
        const cpfSemdigito = this.rand();

        const digito1 = validaCPF.geraDigito(cpfSemdigito);
        const digito2 = validaCPF.geraDigito(cpfSemdigito + digito1);

        const novoCpf = cpfSemdigito + digito1 + digito2;
        return this.formatado(novoCpf);

    }
}