
const gerarNumeros = function () {
    const min = 48;
    const max = 58;

    const numero = String.fromCharCode(Math.floor(Math.random() * (max - min) + min));
    return numero;
}

const gerarLetrasMaiusculas = function () {
    const min = 65;
    const max = 91;

    const letra = String.fromCharCode(Math.floor(Math.random() * (max - min) + min));

    return letra;
}

const gerarLetrasMinusculas = function () {
    const min = 97;
    const max = 123;
    
    const letra = String.fromCharCode(Math.floor(Math.random() * (max - min) + min));

    return letra;
    }


    
const gerarSimbolos = function () {
    const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const simbolos = ',.;~^[]{}!@#$%*()_+=-';

    return simbolos[rand(0, simbolos.length)];

}


export default function geraSenha (qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(gerarLetrasMaiusculas());
        minusculas && senhaArray.push(gerarLetrasMinusculas());
        numeros && senhaArray.push(gerarNumeros());
        simbolos && senhaArray.push(gerarSimbolos());
    }

    return senhaArray.join('').slice(0, qtd);
}
