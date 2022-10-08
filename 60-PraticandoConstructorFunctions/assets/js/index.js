(function(){

    function Calculadora(){
        const display = document.querySelector('.display');

        this.iniciar = () => {
            this.capturarCliques();
            this.capturarBotaoEnter();
        };

        this.capturarCliques = () => {
            document.addEventListener('click', (event) => {
                const elemento = event.target;
                if(elemento.classList.contains('btn__num')) {
                    this.inserirNumeroNoDisplay(elemento.innerText);
                };
                if(elemento.classList.contains('btn__clear')){
                    this.limparDisplay();
                };
                if(elemento.classList.contains('btn__del')) {
                    this.deletarUmCaracter();
                    console.log('Cheguei!');
                };
                if(elemento.classList.contains('btn__eq')) {
                    this.realizarConta();
                }
            });
        }
        this.capturarBotaoEnter = () => {
            display.addEventListener('keyup', ({keyCode}) => {
                if(keyCode === 13) {
                    this.realizarConta();
                }
            })
        };
        this.inserirNumeroNoDisplay = (numero) => {
            display.value += numero;
            display.focus();
        };
        this.limparDisplay = () => {
            display.value = '';
        };
        this.deletarUmCaracter = () => {
            display.value = display.value.slice(0, -1);
        };
        this.realizarConta = () => {
            const resultado = eval(display.value);

            try {
                if(!resultado) {
                    alert('Conta Inválida!');
                    return;
                }
                display.value = resultado;
                return;
            } catch (error) {
                alert('Conta Inválida!');
                return;
            }
        };
    };

    
   const calculadora = new Calculadora();
   calculadora.iniciar();
})();