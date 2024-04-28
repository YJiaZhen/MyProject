const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value ="";
}

// 定義一個空的歷史紀錄陣列
let history = [];

// 將運算式和結果添加到歷史紀錄中
function addToHistory(expression, result) {
    history.push({ expression, result });
}

// 顯示歷史紀錄
function displayHistory() {
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = '';
    history.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.textContent = `${item.expression} = ${item.result}`;
        historyContainer.appendChild(historyItem);
    });
}

function calculate() {
    try {
        const expression = display.value;
        const result = eval(expression);
        display.value = result;
        
        // 將運算式和結果添加到歷史紀錄
        addToHistory(expression, result);
        // 顯示歷史紀錄
        displayHistory();
        
    } catch (error) {
        display.value = "Error";
    }
}
