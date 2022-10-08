(function(){

    function criarCalculadora(){
        return {
            display: document.querySelector('.display'),


            inicia(){
                this.cliqueBotoes();
                this.pressionaEnter();
            },

            cliqueBotoes(){
                document.addEventListener('click', (event) => {
                    const elemento = event.target;

                    if(elemento.classList.contains('btn__num')) {
                        this.btnParaDisplay(elemento.innerText);
                    };
                    if (elemento.classList.contains('btn__clear')) {
                        this.clearDisplay();
                    };
                    if(elemento.classList.contains('btn__del')){
                        this.apagarUm();
                    }
                    if(elemento.classList.contains('btn__eq')){
                        this.realizarConta();
                    }
                });
            },
            btnParaDisplay(valor){
                this.display.value+= valor;
            },
            pressionaEnter(){
                this.display.addEventListener('keyup', (event) => {
                    if(event.keyCode === 13) {
                        this.realizarConta();
                    }
                })
            },
            clearDisplay(){
                this.display.value = '';
            },
            apagarUm(){
                this.display.value = this.display.value.slice(0, -1);
            },
            realizarConta(){
                let conta = this.display.value;

                try {
                    conta = eval(conta);
                    if(!conta) {
                        alert('Conta inválida');
                        return;
                    }
                    this.display.value = conta;
                } catch(e) {
                    alert('Conta inválida');
                    return;
                }
            }
        };
    }

    const calculadora = criarCalculadora();
    calculadora.inicia();

})();