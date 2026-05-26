async function convertCurrency() {

    let amount = document.getElementById("amount").value;

    let fromCurrency = document.getElementById("fromCurrency").value.toLowerCase();

    let toCurrency = document.getElementById("toCurrency").value.toLowerCase();

    // API URL
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;

    try {

        let response = await fetch(url);

        let data = await response.json();

        // Get conversion rate
        let rate = data[fromCurrency][toCurrency];

        // Convert amount
        let convertedAmount = amount * rate;

        // Show result
        document.getElementById("result").innerHTML =
            convertedAmount.toFixed(2) + " " + toCurrency.toUpperCase();

        // Update Flags
        updateFlags(fromCurrency, toCurrency);

    }

    catch(error) {

        document.getElementById("result").innerHTML =
            "Error fetching exchange rate";

        console.log(error);
    }
}


// Function to update flags
function updateFlags(fromCurrency, toCurrency) {

    // Currency to Country Code
    let countryList = {
        INR: "IN",
        USD: "US",
        EUR: "EU",
        GBP: "GB",
        JPY: "JP"
    };

    // From Flag
    let fromCountryCode = countryList[fromCurrency.toUpperCase()];

    document.getElementById("fromFlag").src =
        `https://flagsapi.com/${fromCountryCode}/flat/64.png`;

    // To Flag
    let toCountryCode = countryList[toCurrency.toUpperCase()];

    document.getElementById("toFlag").src =
        `https://flagsapi.com/${toCountryCode}/flat/64.png`;
}


// Change flags automatically when dropdown changes
document.getElementById("fromCurrency").addEventListener("change", () => {

    updateFlags(
        document.getElementById("fromCurrency").value,
        document.getElementById("toCurrency").value
    );

});


document.getElementById("toCurrency").addEventListener("change", () => {

    updateFlags(
        document.getElementById("fromCurrency").value,
        document.getElementById("toCurrency").value
    );

});


// Default flags on page load
updateFlags("inr", "usd");

