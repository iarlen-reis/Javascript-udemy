import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.quantidade-caracteres');
const maiusculas = document.querySelector('.chk-maiusculas');
const minusculas = document.querySelector('.chk-minusculas');
const numeros = document.querySelector('.chk-numeros');
const simbolos = document.querySelector('.chk-simbolos');
const buttonGerar = document.querySelector('.gerar-senha');
const limparSenha = document.querySelector('.limpar-senha');

export default () => {
    buttonGerar.addEventListener('click', () => {
        const senha = gera();

        senhaGerada.innerHTML = senha;
    })

    limparSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = 'Selecione as oçpões abaixo!';
    })
};


function gera() {
    const senha = geraSenha(
        qtdCaracteres.value, 
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolos.checked);

    return senha || 'Nada selecionado!';
}
