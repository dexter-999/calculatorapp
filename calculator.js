const calContainer = document.getElementById('container');
const displayArea = document.getElementById('area');

calContainer.addEventListener('click', function (e) {
    if (e.target.nodeName === "BUTTON") {
        switch (e.target.textContent) {
            case "C":
                clear();
                break;
            case "DEL":
                deleteOneElement();
                break;
            case "=":
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent);
        }
    }
});
function clear() {
    displayArea.textContent = "";
}

function addToDisplayArea(value) {
    displayArea.textContent += value;
}

function deleteOneElement() {
    let calCul = displayArea.textContent;
    displayArea.textContent = calCul.substring(0, calCul.length - 1);
}

function evaluate() {
    try {
        let calculation = math.evaluate(displayArea.textContent);
        displayArea.textContent = calculation;
    } catch (error) {
        displayArea.textContent = "Invalid Operation";
    }
};

