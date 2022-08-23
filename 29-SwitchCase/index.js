/* 
Aprendendo SwitchCase em JavaScript:
- Funciona quase igual um if, ele serve para checkar uma condição
    de uma váriavel.
- Se o case for verdadeiro, ele vai executar o bloco de código abaixo.
- Devemos utilizar o break ao final de cada bloco.
- Para executar algo se nenhum dos case for verdadeiro, use o default.
*/

data = new Date('1987-04-26 00:00:00');

function getSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ''
            return diaSemanaTexto;
    }
}

const diaSemana = data.getDay();

const diaSemanaTexto = getSemanaTexto(diaSemana);
console.log(diaSemanaTexto);