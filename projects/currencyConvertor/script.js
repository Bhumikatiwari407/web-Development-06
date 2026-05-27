async function convertCurrency() {

    const amount = document.getElementById("amount").value;

    const fromCurrency = document.getElementById("fromCurrency").value.toLowerCase();

    const toCurrency = document.getElementById("toCurrency").value.toLowerCase();

    // API URL
    const URL_API = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;

    try {

        const response = await fetch(URL_API);

        const data = await response.json();

        //conversion rate
        const rate = data[fromCurrency][toCurrency];

        // Convert amount
        const convertedAmount = amount * rate;

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
    const countryList = {
    AFN: "AF",
    ALL: "AL",
    DZD: "DZ",
    ARS: "AR",
    AUD: "AU",
    EUR: "EU",
    BDT: "BD",
    BRL: "BR",
    CAD: "CA",
    CNY: "CN",
    DKK: "DK",
    EGP: "EG",
    HKD: "HK",
    HUF: "HU",
    ISK: "IS",
    INR: "IN",
    IDR: "ID",
    IRR: "IR",
    IQD: "IQ",
    ILS: "IL",
    JPY: "JP",
    KES: "KE",
    KWD: "KW",
    MYR: "MY",
    MXN: "MX",
    NPR: "NP",
    NZD: "NZ",
    NGN: "NG",
    NOK: "NO",
    PKR: "PK",
    PHP: "PH",
    PLN: "PL",
    QAR: "QA",
    RUB: "RU",
    SAR: "SA",
    SGD: "SG",
    ZAR: "ZA",
    KRW: "KR",
    LKR: "LK",
    SEK: "SE",
    CHF: "CH",
    THB: "TH",
    TRY: "TR",
    UAH: "UA",
    AED: "AE",
    GBP: "GB",
    USD: "US",
    VND: "VN",
    ZWL: "ZW"
};

    // From Flag
    const fromCountryCode = countryList[fromCurrency.toUpperCase()];

    document.getElementById("fromFlag").src =
        `https://flagsapi.com/${fromCountryCode}/flat/64.png`;

    // To Flag
    const toCountryCode = countryList[toCurrency.toUpperCase()];

    document.getElementById("toFlag").src =
        `https://flagsapi.com/${toCountryCode}/flat/64.png`;
}


// Change flags 
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


// Default flags
updateFlags("inr", "usd");

