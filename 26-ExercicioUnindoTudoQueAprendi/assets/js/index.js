function calcularIMC() {
    const form = document.querySelector('.form');
    const inputPeso = form.querySelector('#input-peso');
    const inputAltura = form.querySelector('#input-altura');
    const resultadoIMC = document.querySelector('.resultado-imc');

    function calcularValores(peso, altura) {

        return (peso / altura ** 2).toFixed(2);
    }

    function qualIMC(imc) {
        if (imc < 18.5) {
            return `Seu IMC é ${imc} | Resultado: Abaixo do peso.`
        } else if (imc >= 18.5 && imc <= 24.90) {
            return `Seu IMC é ${imc} | Resultado: Peso normal.`
        } else if (imc >= 26 && imc <= 29.90) {
            return `Seu IMC é ${imc} | Resultado: Sobrepeso.`
        } else if (imc >= 30 && imc <= 34.90) {
            return `Seu IMC é ${imc} | Resultado: Obesidade grau 1`
        } else if (imc >= 35 && imc <= 39.90) {
            return `Seu IMC é ${imc} | Resultado: Obesidade grau 2`
        } else if (imc > 40) {
            return `Seu IMC é ${imc} | Resultado: Obesidade grau 3`
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (Number.isInteger(+inputPeso.value) != true  && Number.isInteger(+inputAltura.value) != true) {
            resultadoIMC.innerHTML = 'Valores inválidos.';
        } else if (inputPeso.value === '' && inputAltura.value == '') {
                resultadoIMC.innerHTML = 'Campos peso e altura são obrigatorios.'
        } else if (inputPeso.value === '') {
                resultadoIMC.innerHTML = 'Digite um valor para peso.'
        } else if (inputAltura.value === '') {
            resultadoIMC.innerHTML = 'Digite um valor para altura.'
        } else {
            const imc = calcularValores(+inputPeso.value, +inputAltura.value);
            const imcClient = qualIMC(imc);
            resultadoIMC.innerHTML = imcClient;
        }
        



    });

}

calcularIMC();