/*
Aprendendo a tratar e lançar erros em javascript:
- Tratamentos de erros servem para previnir que a aplicação quebre e
    prejudique a experiencia do usuário.
- Usamos geralmente em códigos que podem gerar algum erro.

- Try: O try é a primeira tentativa, é como se o sistema tentasse executar o
    bloco de código que está dentro dele e se não conseguir, ele executa o bloco
    catch.

- Catch: È a segunda parte do bloco, ela vem após o try, caso o que esteja dentro
    do try não seja executado ou der algum erro, o bloco catch será executado
    e mostrar o erro que aconteceu ou alguma mensagem personalizada.

    Estrutura do try e catch:

    Try {
        Tente isso, mas caso ocorra algum erro
    } catch {
        faça isso
    }

- Podemos criar nossos proprios erros e trata-los:
    Para isso usamos throw:

    Farei uma função que pede um número maior que 5, se for menor que 5
        ele vai gerar um error (criado por mim mesmo) e tratar para exibir
        para o usuário:

    function maiorQueCinco(numero) {
        if (numero < 5) {
            throw('O número precisa ser maior que 5.');
        }
        return 'O número é maior que 5!';
    }

    console.log(maiorQueCinco(4)); 
    // Vai lançar uma string avisando que o número deve ser maior que 5.

    Para tratarmos esse erro, precisamos apenas fazer um try e catch:

    try {
        console.log(maiorQueCinco(4)); 
    } catch (error) {
        console.log('O número precisa ser maior que 5.');
    }

   No catch passamos uma váriavel 'error' como parâmetro, ela vai
   armazenar o erro capturado para pudermos saber qual erro foi
   lançado para tratarmos ver depois.
   
   Além disso, no throw podemos usar uma função construtora chamada Error,
   para pudermos lançar um error ao inves de uma string:

   throw new Error ('O número precisa ser maior que 5.')

*/


function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y preicsam ser números.');
    }
    return x + y;
}
try {
    console.log(soma(20, 10));
} catch (error) {
    console.log('Verique se x e y são números.');
}
