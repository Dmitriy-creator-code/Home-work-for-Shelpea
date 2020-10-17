currentCalculationOutput.textContent = "Выполните выражение"

subtractBtn.onclick = function subtractOperator () {
    let result = currentResultOutput.textContent - +userInput.value;
    currentCalculationOutput.textContent = "вычитание";
    return currentResultOutput.textContent = result;
}

addBtn.onclick = function addOperator () {
    let result = +currentResultOutput.textContent + +userInput.value;
    currentCalculationOutput.textContent = "сложение ";
    return currentResultOutput.textContent = result;
}


divideBtn.onclick = function divideOperator () {
    let result = +currentResultOutput.textContent / +userInput.value;
    currentCalculationOutput.textContent = "деление";
    return currentResultOutput.textContent = result;
}

multiplyBtn.onclick = function multiplyOperator () {
    let result = +currentResultOutput.textContent * +userInput.value;
    currentCalculationOutput.textContent = "умножение";
    return currentResultOutput.textContent = result;
}