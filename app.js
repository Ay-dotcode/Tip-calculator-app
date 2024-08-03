const tipInput = document.getElementById('tipInput');
const noPeople = document.getElementById('noPeople');
const billInput = document.getElementById('billInput');
const peopleInput = document.getElementById('peopleInput');
const resetBtn = document.getElementById('resetBtn');
const errorMsg = document.getElementById('errorMsg');
const custom = document.getElementById('custom');
const tipAmount = document.getElementById('tipAmount');
const total = document.getElementById('total');

resetBtn.disabled = true;
let tip;

billInput.addEventListener('input', isValid);
peopleInput.addEventListener('input', isValid);
tipInput.addEventListener('click', tipPercent);
custom.addEventListener('input', tipValue);
resetBtn.addEventListener('click', reset);

function isValid() {
    if (peopleValid() || billValid() || tipValid()) {
        resetBtn.disabled = true;
    } else {
        resetBtn.disabled = false;
        calculate();
    }
}
function peopleValid() {
    if (peopleInput.value === '') {
        noPeople.classList.replace('error', 'noError');
        errorMsg.innerText = '';
        return true;
    } else if (peopleInput.value === '0') {
        noPeople.classList.replace('noError', 'error');
        errorMsg.innerText = `Can't be zero`;
        return true;
    } else if (peopleInput.value < 0 || peopleInput.value.startsWith('-')) {
        noPeople.classList.replace('noError', 'error');
        errorMsg.innerText = `Can't be negative`;
        return true;
    } else {
        noPeople.classList.replace('error', 'noError');
        errorMsg.innerText = '';
        return false;
    }
}
function billValid() {
    if (billInput.value === '' || billInput.value === '0' || billInput.value < 0 || billInput.value.startsWith('-')) {
        return true;
    } else {
        return false;
    }
}
function tipPercent(e) {
    if (e.target.innerText !== '') {
        for (const btn of tipInput.children) {
            btn.classList.remove('active');
        }
        custom.value = '';
        e.target.classList.add('active');
        tip = parseFloat(e.target.innerText.slice(0, -1));
    }
    isValid();
}
function tipValue() {
    for (const btn of tipInput.children) {
        btn.classList.remove('active');
    }
    tip = parseFloat(custom.value);
    isValid();
}
function tipValid() {
    if (isNaN(tip) || tip === '' || tip <= 0) {
        return true;
    } else {
        return false;
    }
}
function calculate() {
    const bill = parseFloat(billInput.value);
    const people = parseInt(peopleInput.value);

    if (!isNaN(bill) && bill > 0 && !isNaN(people) && people > 0 && !isNaN(tip) && tip > 0) {
        const tipAmountPerPerson = (bill * (tip / 100)) / people;
        const totalPerPerson = (bill / people) + tipAmountPerPerson;

        tipAmount.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
        total.innerText = `$${totalPerPerson.toFixed(2)}`;
    }
}
function reset() {
    billInput.value = '';
    peopleInput.value = '';
    custom.value = '';
    tip = 0;
    for (const btn of tipInput.children) {
        btn.classList.remove('active');
    }
    tipAmount.innerText = `$0.00`;
    total.innerText = `$0.00`;
    resetBtn.disabled = true;
    noPeople.classList.replace('error', 'noError');
    errorMsg.innerText = '';
}
