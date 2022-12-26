// document.addEventListener('DOMContentLoaded', performOperation);
// document.addEventListener.onclick = performOperation;
var decimalBtn = document.getElementById('decimal');
var clearBtn = document.getElementById('clear');
var displayValElement = document.getElementById('calc-val');

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

var calcNumBtns = document.getElementsByClassName('btn-num');
var calcOperatorBtns =  document.getElementsByClassName('btn-operator');

var updateDisplayVal = (clickobj) => {
    var btnText = clickobj.target.innerText;

    if (displayVal === '0')
        displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

var performOperation = (clickobj) => {
    var operator = clickobj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;

        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;

        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;

        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;

        // case '%':
        //     pendingVal = displayVal;
        //     displayVal = '0';
        //     var result = displayValElement.innerText = displayVal;
        //     evalStringArray.push(pendingVal);
        //     evalStringArray.push('result/100');
        //     break;

        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(''));
            displayVal= evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
            break;

            default:
                break;
        }

}

for ( let i = 0; i < calcNumBtns.length; i++){
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

for ( let i = 0; i < calcOperatorBtns.length; i++){
    calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerText = displayVal;
}

decimalBtn.onclick = () => {
    if (!displayVal.includes('.'))
            displayVal += '.';
    displayValElement.innerText = displayVal;
}

var percent = document.getElementById('percent');
    percent.onclick = () => {
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerText = displayVal/100;
}

var plusMinus = document.getElementById('plus-minus');
    plusMinus.onclick = () => {
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerText = -(displayVal);
} 