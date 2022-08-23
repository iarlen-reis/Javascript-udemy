/*
Aprendendo objeto Date em JavaScript:
- Ela é uma função construtora, para se usar função construtora é
    necessário usar a palavra new:
        const data = new Date(); | Funções constutoras sempre começam com letra
            maiúscula.
- As datas são formadas por milessimos de segundos.
- As datas se dão origem no ano de 1070 (Timestamp unix).

- Podemos passar um data como parâmetro:
    Date(ano, mês, dia, hora, minutos, segundo);
        - Se não passarmos a hora, ele vai assumir o horário como
            meia noite.

- Podemos mandar uma data em string:
    - A string deve está em um formato reconhecido pelo metodoDate.parse():
        Date('Ano-mes-dia hora:minuto:segundo').toString();

- Existem alguns metodos no Date:
    - .getDate()            -> Obtem o dia.
    - .getMonth()           -> Obter o mês | Em js.
    - .getFullYear()        -> Obtem o ano.
    - .getHours()           -> Obtem a hora.
    - .getMinutes()         -> Obtem os minutos.
    - .get.getSeconds()     -> Obtem os segundos.
    - .getMilliseconds()    -> Obtem os segundos.
    - .getDay()             -> Obtem o número do dia na semana.

- Podemos obter a data atual da seguinte forma:
    1. Date.now() -> Vai retornar a data em milesimos de segundos.
    2. Agora é só adicionar o valor retornado no objeto Date:
        new Date(ValorRetornado);

- Curiosidades: 
    Os meses em javaScript começam do 0;
    Dia da semana: 0 - Domingo, 6 - Sabádo (Vai de 0 a 6).
 */

const data = new Date();

function addZeroLeft(numero) {
    return numero >= 10 ? numero : `0${numero}`
}

function fomartarData (data) {
    const dia = addZeroLeft(data.getDate());
    const mes = addZeroLeft(data.getMonth() + 1);
    const ano = data.getFullYear();
    
    return `${dia}/${mes}/${ano}`;
}


const numeroNovo = fomartarData(data);

console.log(numeroNovo);


