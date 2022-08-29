/*
Criar uma aplicação onde podemos adicionar tarefas:
    - Cada tarefa deve ter um botão de remover.
    - Ao escrever a tarefa e apertar 'ENTER' a tarefa deve
        ser adicionada.
    - As tarefas devem ficar salvas, ao fechar o navegador e abrir
        novamente, elas devem está lá.
*/

function escopoPrincipal() {
    const inputTarefa = document.querySelector('.input-tarefa');
    const buttonTarefa = document.querySelector('.button-tarefa');
    const tarefas = document.querySelector('.tarefas');

    buttonTarefa.addEventListener('click', function(event){
        if (!inputTarefa.value) return;
        const tarefa = criaTarefa(inputTarefa.value);
        adicionarTarefas(tarefa);
        limpaInput(inputTarefa);
    });

    inputTarefa.addEventListener('keypress', function(e){
        if (e.keyCode == 13) {
            if (!inputTarefa.value) return;
            const tarefa = criaTarefa(inputTarefa.value);
            adicionarTarefas(tarefa);
            limpaInput(inputTarefa);
            
        }
    })

    function criarBotaoApagar(li){
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class', 'apagar');
        botaoApagar.setAttribute('title', 'apagar essa tarefa');
        return botaoApagar;
    }

    function limpaInput(input){
        input.value = '';
        input.focus();
    }

    function criaLi(){
        const li = document.createElement('li');
        return li;
    }

    function criaTarefa(tarefa) {
        const tarefaCriada = criaLi();
        tarefaCriada.innerText = tarefa;
        return tarefaCriada;
    }

    function adicionarTarefas(tarefa) {
        const botaoApagar = criarBotaoApagar(tarefa);
        tarefa.appendChild(botaoApagar);
        tarefas.appendChild(tarefa);
        salvarTarefas();
        
    }

    function salvarTarefas(){
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        }
        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    }

    function adicionarTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);
        for (let tarefa of listaDeTarefas) {
            const tarefaRecuperada = criaTarefa(tarefa);
            adicionarTarefas(tarefaRecuperada);
        }
    }
    adicionarTarefasSalvas();

    document.addEventListener('click', function(event) {
        const elemento = event.target;
        
        if (elemento.classList.contains('apagar')) {
            elemento.parentElement.remove();
            salvarTarefas();
        }
    })

}

escopoPrincipal();