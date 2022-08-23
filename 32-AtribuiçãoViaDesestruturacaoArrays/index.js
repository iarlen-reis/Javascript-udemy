/* 
Atribuição via desestruturação de arrays:
- podemos criar váriaveis dentro de um array, se as váriaveis já existir,
    elas serão reatribuidas, com o valor passado no array do lado direito:
        let a = 'A'; 
        let b = 'B'; 
        let c = 'C'; 
        
        [a, b, c] = [1, 2, 3] -> Como as váriaveis já existem, os valores dela
                                    serão reatribuidos com os valores passado 
                                        na direito.

- A desestruturação é simples, ao inves criar uma váriavel para cada item de
    um array, podemos criar outro array de váriaveis, que pegará para cada
        váriavel dentro dele, um valor do array a sua direita:
    
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; O array com os valores.
        const [primeiroNumero, segundoNumero] = numeros; O array com as váriaveis.

- Podemos sempre pegar o "resto" do array, usando '...' e logo em seguida o nome
    dá váriavel onde queremos armazernar o resto do array. (Essa váriavel será
        um array com os válores restantes.)

    const [primeiroNumero, segundoNumero, ...resto] = numeros;
    
    console.log(resto);

- O operador '...' pode ser usado de duas formas, ao usa-lo para pegar o resto de
        um array, ele é chamado de rest. Mas ele também pode ser usado para
            espalhar, sendo assim, chamado de spread.

- Podemos pular os válores a serem atribuido a váriavel, usando várivaveis vazias
        por exemplo:

        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const [primeiroNumero, , terceiroNumero] = numeros;

        O segundo valor não será atribuido a váriavel, pois usamos um , , no lugar
            dá váriavel, Logo o a segunda váriavel terá o valor do terceiro
                indice do array e não do segundo.

- Podemos fazer desestruturação de um array que está dentro de outro array, é
        um pouco mais complexo de entender, por exemplo:
        
        const numeros = [
            [1, 2, 3],
            [3, 5, 6],
            [7, 8, 9]
        ];

        Para desestruturar um valor de um array dentro de outro array, basta
            selecionar o array principal e escolher o array de dentro que queremos,
            como, por exemplo:

            const = [, , [, oito]] = numeros;

            console.log(oito); // 8
        
        Podemos fazer dessa forma também:
            [lista1, lista2, lista3] = numeros;
            const numeroOito = lista3[2]; 

            Assim funciona também e a desestruturação fica menos complexa.
*/      



const numeros = [
    [1, 2, 3],
    [3, 5, 6],
    [7, 8, 9]
];

const  [, [, , seis]] = numeros;
console.log(seis);