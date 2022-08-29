/*
Criando um timer no navegador:
- O time tem que ter 3 botões:
    Iniciar - Começa o timer.
    Pausar  - Pausa o timer.
    Zerar   - Zera o time.

Outras funcionalidades:
- Ao clicar em pausar, o conometro do timer deve ficar da
    cor vermelha.
*/

function escopoPrincipal () {
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    const p = document.querySelector('p');
    let timer;
    let minutos = 0;
    let segundos = 0;
    let horas = 0;

    iniciar.addEventListener('click', function(event) {
        clearInterval(timer)
        p.style.color = '#000000';

        timer = setInterval(function(){
            segundos+=1;
            p.innerHTML = `${verificarDigitos(horas)}:${verificarDigitos(minutos)}:${verificarDigitos(segundos)}`;
    
            if (segundos >= 59) {
                minutos+=1;
                segundos = 0;
            }
            if (minutos > 59) {
                horas+=1;
                minutos = 0;
                segundos = 0;
            }
            if (segundos == 58 && minutos == 59 && horas == 24){
                clearInterval(timer);
                p.style.color = '#FF0000';
            }
        }, 1000);
    });
    
    pausar.addEventListener('click', function(){
        clearInterval(timer);
        p.style.color = '#FF0000';

    });
    
    zerar.addEventListener('click', function(){
        clearInterval(timer);
        p.style.color = '#000000';
        p.innerHTML = '00:00:00';
        horas = 0;
        minutos = 0;
        segundos = 0;
    });

    const verificarDigitos = (digito) => digito < 10 ? `0${digito}` : digito;

}

escopoPrincipal();