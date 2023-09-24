console.log("Witaj miło Cię znów zobaczyć!");

let fromElement = document.querySelector(".js-from");
let toElement = document.querySelector(".js-to");
let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-submit");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let result;
    let amount = +amountElement.value;
    let from = fromElement.value;
    let to = toElement.value;

    switch (from) {

        case "USD":
            switch (to) {
                case "USD":
                    result = amount;
                    break;
                case "EUR":
                    result = amount * 1.0807;
                    break;
                case "PLN":
                    result = amount * 4.14;
                    break;
            }
            break;

        case "EUR":
            switch (to) {
                case "USD":
                    result = amount * 0.9249;
                    break;
                case "EUR":
                    result = amount;
                    break;
                case "PLN":
                    result = amount * 4.46;
                    break;
            }
            break;

        case "PLN":
            switch (to) {
                case "USD":
                    result = amount / 4.14;
                    break;
                case "EUR":
                    result = amount / 4.46;
                    break;
                case "PLN":
                    result = amount;
                    break;
            }
            break;
    }
    resultElement.innerHTML = `${amount} ${from} to ${result.toFixed(2)} ${to}`;
});