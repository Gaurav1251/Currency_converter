// const API_KEY = 
// const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
const form = document.getElementById("form")
const change = document.getElementById("change")
const select = document.querySelectorAll(".form-select")


const optin = [
    "USD",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XCG",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL"
]

const Coutrn_opt = () => {
    const select1 = document.getElementById("select1")
    const select2 = document.getElementById("select2")
    console.log(optin);
    optin.forEach(country => {
        const opt1 = document.createElement("option")
        opt1.textContent = country;
        select1.appendChild(opt1)
        const opt2 = document.createElement("option")
        opt2.textContent = country;
        select2.appendChild(opt2)

    })


}

const swap_opt = () => {

    let s1 = form.select1.selectedIndex
    let s2 = form.select2.selectedIndex
    form.select1.selectedIndex = s2
    form.select2.selectedIndex = s1

}

async function api_call() {
    try {
        const country1 = form.select1.value
        const country2 = form.select2.value
        // const API_URL_Country = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${country1}`
        const API_URL_Country = `https://open.er-api.com/v6/latest/${country1}`

        const res = await fetch(API_URL_Country);
        const data = await res.json();
        // const rates = data.conversion_rates;
        const rates = data.rates;
        form.inp2.value = form.inp1.value * rates[country2];
    } catch (error) {
        console.log(error);

    }

}
const cal_amt = () => {
    const amount = parseFloat(isNaN(form.inp1.value) ? alert("Enter valid Number") : form.inp1.value);

    if (amount >= 0) {
        // // const country1 = form.select1.options[form.select1.selectedIndex].textContent
        // const country1 = form.select1.value
        // const country2 = form.select2.value
        // // console.log(country2)

        // // const API_URL_Country = `https://open.er-api.com/v6/latest/${country1}`
        // // console.log(API_URL_Country);

        // const API_URL_Country = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${country1}`

        // fetch(API_URL_Country)
        //     .then(response => response.json())
        //     .then((data) => {
        //         // const rates = data.rates;
        //         const rates = data.conversion_rates;
        //         // const base_price = rates[country1]
        //         // console.log(isNaN(form.inp1.value));
        //         form.inp2.value = form.inp1.value * rates[country2];
        //     }).catch((e) => {
        //         console.error(e);

        //     })
        api_call()
    }
    else {
        form.inp1.value = ''
        form.inp2.value = ''
    }
}






///for swap curecny
change.addEventListener("click", (e) => {
    // e.preventDefault();
    if (form.checkValidity()) {
        swap_opt();

        ///on switch
        cal_amt();

    }
    else {
        swap_opt();
    }

})


////////////////////form input 
form.inp1.addEventListener("input", (e) => {

    cal_amt();



})

//////for select options 

select.forEach(element => {
    element.addEventListener("change", () => {

        cal_amt();

    })
});

////calling option function
Coutrn_opt()
