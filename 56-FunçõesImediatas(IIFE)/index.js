/*
Funções Imediatas (Funções auto-invocadas):
    - É utilizada para impedir que o escopo global seja
        poluido com funções.
    - É uma função sem nome, onde ela se auto 'executa'
        sem ter a necessidade de chama-la após cria-la.
    - Basta criar uma função anonima dentro de parenteses e
        e chama-lá:
        
        (function(){
            console.log('Sou uma função anonima!');
        })();
    
    - Podemos passar argumentos na função imediata, assim como em
        qualquer função:

        (function(nome, sobrenome){
            console.log(nome, sobrenome);

        })('Iarlen', 'Reis');
        
        
*/  

(function(){
    function falaOi(nome){
        console.log(`Oi ${nome}!`);
    }

    falaOi('Iarlen Reis');
})();
