/* 

// Fazendo na mão:

function mainScopo () {
    const horarioTexto = document.querySelector('.main-content');

    function setHorario (horario) {
        const h1 = document.createElement('h1');
        horarioTexto.appendChild(h1);
        h1.innerHTML = horario;

    }

    function getHorario () {
        const horario = new Date();
        const dataCompleta = getDateComplete(horario);
        
        setHorario(dataCompleta);
    }


    function formatarDiaSemana (horario) {
        const diaSemana = horario;
        switch (diaSemana) {
            case 0:
                return 'Domingo'
            case 1:
                return 'Segunda-Feira'
            case 2:
                return 'Terça-feira'
            case 3:
                return 'Quarta-feira'
            case 4:
                return 'Quinta-feira'
            case 5:
                 return 'Sexta-feira'
            case 6:
                return 'Sábado'
        }
    }

    function formataMes (mes) {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 
            'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 
                'Novembro', 'Dezembro'];
        
        const mesFormatado = meses[mes];
        return mesFormatado;
    }
    
    function getDateComplete(horario) {
        const diaSemana = horario.getDay();
        const dia = horario.getDate();
        const mes = horario.getMonth();
        const ano = horario.getFullYear();
        const hora = horario.getHours();
        const minutos = horario.getMinutes();

        diaSemanaFormatado = formatarDiaSemana(diaSemana);
        mesFormatado = formataMes(mes);

        const dataCompleta = `${diaSemanaFormatado}, ${dia} de ${mesFormatado} de ${ano} | ${hora}:${minutos}`;

        return dataCompleta;

    }
    getHorario();
}

mainScopo()

*/

// Usando o dataStyle | timeStyle:

const horarioTexto = document.querySelector('.main-content');
const h1 = document.createElement('h1');
horarioTexto.appendChild(h1);

const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short',
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
