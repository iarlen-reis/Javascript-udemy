import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function () {
    const resultadoDiv = document.querySelector('.cpf-gerado');

    addEventListener('click', ({target}) => {
        const elemento = target;

        if(elemento.classList.contains('button-gerar')) {
            gerarCPF();
        }

        if (elemento.classList.contains('button-limpar')) {
            limpar()
        }
    });

    const gerarCPF = () => {
        const cpfGerado = new GeraCPF();
    
        resultadoDiv.innerHTML = cpfGerado.geraNovoCpf();
    };

    const limpar = () => {
        resultadoDiv.innerHTML = '000.000.000-00';
    }



})();
