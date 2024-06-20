// Captura o formulário e adiciona um ouvinte de evento para o envio
document.getElementById('interest-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Captura os valores inseridos pelo usuário
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let years = parseInt(document.getElementById('years').value);

    // Calcula o montante final usando a fórmula de juros compostos
    let amount = principal * Math.pow((1 + rate / 100), years);

    // Formata o resultado para 2 casas decimais
    amount = amount.toFixed(2);

    // Exibe o resultado na div result
    document.getElementById('result').innerHTML = `<p>Montante Final: R$ ${amount}</p>`;
});


// Captura o formulário de empréstimo e adiciona um ouvinte de evento para o envio
document.getElementById('loan-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Captura os valores inseridos pelo usuário
    let loanAmount = parseFloat(document.getElementById('loan-amount').value);
    let interestRate = parseFloat(document.getElementById('interest-rate').value);
    let loanTerm = parseInt(document.getElementById('loan-term').value);

    // Calcula o pagamento mensal do empréstimo usando a fórmula de pagamento de empréstimo
    let monthlyPayment = calculateLoanPayment(loanAmount, interestRate, loanTerm);

    // Formata o resultado para 2 casas decimais
    monthlyPayment = monthlyPayment.toFixed(2);

    // Exibe o resultado na div loan-result
    document.getElementById('loan-result').innerHTML = `<p>Pagamento Mensal: R$ ${monthlyPayment}</p>`;
});

// Função para calcular o pagamento mensal do empréstimo
function calculateLoanPayment(amount, rate, term) {
    let monthlyRate = rate / 100 / 12;
    let numPayments = term * 12;

    let monthlyPayment = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numPayments));

    return monthlyPayment;
}

// Captura o formulário de IMC e adiciona um ouvinte de evento para o envio
document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Captura os valores inseridos pelo usuário
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    // Calcula o IMC
    let bmi = calculateBMI(weight, height);

    // Exibe o resultado na div bmi-result
    document.getElementById('bmi-result').innerHTML = `<p>Seu IMC é: ${bmi.toFixed(2)}</p>`;
});

// Função para calcular o IMC
function calculateBMI(weight, height) {
    return weight / (height * height);
}


// Captura todos os botões de pergunta e adiciona um ouvinte de evento
let faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach(button => {
    button.addEventListener('click', function() {
        let answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});










