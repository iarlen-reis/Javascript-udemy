/*
Babel e "I can use":
    - Podemos utilizar o site "I can use" para verificar a compatibilidade de uma
        determinada ferramenta do javascript para alguns navegadores.
    
    - Babel é utilizado para transformar uma versão do codigo compativel para todos
        os navegadores.
    
    - O babel traduz e compila uma versão do codigo.

      - Para usar o babel em um codigo usamos o seguinte comando:
        npx babel nomedoarquivo.js -o budle.js --presets=@babel/env

*/

const nome = 'Iarlen';

const objeto = {
    nome
}

const novoObjeto = {
    ...objeto
}

console.log(novoObjeto);