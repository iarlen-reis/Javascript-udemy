/*
Aprendendo SetInterval e SetTimeOut em javascript:
- Geralmente são usados para controlar o tempo e intervalo de tempo:
    - setInterval():
        Essa função recebe como primeiro parâmetro a função que você quer
        executar, a função deve ser passada como refência.

        Como segundo parâmetro, ela recebe em quanto, em quanto tempo você
        quer executar essa função, o tempo deve ser passado milisegundos:

        function falaOi(){
            console.log(oi);
        }

        const timer = setInterval(function(){
            falaOi();
        }, 1000);

        Assim que executado, a função falaOi será chamada a cada 1000 milisegundos
        (1 segundo).

    - setTimeOut():
        Ela tem a estrutura parecida com a setInterval, porém ela executa apenas
        uma vez a depender do intervalado de tempo.
        Geralmente usamos ele para controlar a o tempo em que o setinterval vai
        funcionar:

        setTimeOut(function{
            clearInterval(timer);
        }, 10000);

        Ela recebeu um como parâmetro uma função anonima, nessa função anonima
        chamamos a função clearInterval() e passamos dentro dela qual setInterval
        vai querer parar.

        Como segundo parâmetro do setTimeOut() definimos em quanto tempo o
        setInterval será interrompido. 

*/

function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('Olá mundo!');
}, 5000);