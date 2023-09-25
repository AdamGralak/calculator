{
    const welcome = () => {
        console.log("Witaj miło Cię znów zobaczyć!");
    };

    const calculate = (from, to, amount) => {
        switch (from) {

            case "USD":
                switch (to) {
                    case "USD":
                        return amount;
                    case "EUR":
                        return amount * 1.0807;
                    case "PLN":
                        return amount * 4.14;
                }

            case "EUR":
                switch (to) {
                    case "USD":
                        return amount * 0.9249;
                    case "EUR":
                        return amount;
                    case "PLN":
                        return amount * 4.46;
                }

            case "PLN":
                switch (to) {
                    case "USD":
                        return amount / 4.14;
                    case "EUR":
                        return amount / 4.46;
                    case "PLN":
                        return amount;
                }
        }
    };

    const updateAnswer = (amount, from, result, to) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount} ${from} to ${result.toFixed(2)} ${to}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const toElement = document.querySelector(".js-to");
        const amountElement = document.querySelector(".js-amount");
        const fromElement = document.querySelector(".js-from");

        const amount = +amountElement.value;
        const from = fromElement.value;
        const to = toElement.value;
        const result = calculate(from, to, amount);

        updateAnswer(amount, from, result, to);
    }

    const init = () => {
        const formElement = document.querySelector(".js-submit");
        formElement.addEventListener("submit", onFormSubmit);
        welcome();
    };
    init();
}