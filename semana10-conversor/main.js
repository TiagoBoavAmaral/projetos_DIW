const exchangeRates = {
    BRL: 1,    //  taxa base
    USD: 5.07, //  1 Real  = 0.2 Dólares Americanos
    EUR: 5.45, //  1 Real = 0.18 Euros
    GBP: 6.34, //  1 Real = 0.16 Libras Esterlinas
    JPY: 0.033 //  1 Real = 30.50 Ienes Japoneses
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const convertedAmount = amount * exchangeRate;

    document.getElementById('result').innerHTML = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
