/*
Metodos de instância e estaticos com classe:
    - Metodos estatiticos são metodos que podemos utilizar sem
        instanciar a classe usando palavra new.

    - Metodos estatiticos não estão disponiveis dentro da instância.

    - São basicamente funções normais dentro da classe.

    - Para definir um metodo estatitico, basta adicionar a palavra
        'static' na frente do metodo.

    - Esse metodo só pode ser acessado pela classe.


*/

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // metodo de instância
    aumentarVolume() {
        if(this.volume < 0) return;

        this.volume += 2;
    }

    diminuirVolume() {
        if(this.volume <= 0) return;
        this.volume -= 2;
    }

    // metodod estatico
    static trocaPilha() {
        console.log('Pilhas trocadas!');
    }
}


const controle1 = new ControleRemoto('Samsung');
