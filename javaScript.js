const currencyElement = document.getElementById('currency');
const amountElement = document.getElementById('amount');
const convertedValueElement = document.getElementById('converted-value');
const convertButton = document.getElementById('convert-btn');

const currencyList = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    // Additional currencies
    { code: 'CNY', name: 'Chinese Yuan' },
    { code: 'SGD', name: 'Singapore Dollar' },
    { code: 'CHF', name: 'Swiss Franc' },
    { code: 'ZAR', name: 'South African Rand' },
];

// Populate the currency dropdown
currencyList.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency.code;
    option.textContent = `${currency.name} (${currency.code})`;
    currencyElement.appendChild(option);
});

convertButton.addEventListener('click', () => {
    const selectedCurrency = currencyElement.value;
    const amount = parseFloat(amountElement.value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    convertCurrencyToINR(selectedCurrency, amount);
});

function convertCurrencyToINR(currencyCode, amount) {
    const conversionRates = {
        'USD': 83.96,
        'EUR': 90.6,
        'GBP': 105.7,
        'JPY': 0.58,
        'AUD': 56.2,
        'CAD': 60.3,
        // Rates for the new currencies
        'CNY': 11.6,   // Chinese Yuan
        'SGD': 61.2,   // Singapore Dollar
        'CHF': 93.2,   // Swiss Franc
        'ZAR': 5.3,    // South African Rand
    };

    const rate = conversionRates[currencyCode];
    if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        convertedValueElement.textContent = `₹ ${convertedAmount}`;
    } else {
        alert('Conversion rate for this currency is not available.');
    }
}
