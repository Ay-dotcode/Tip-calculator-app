const tipInput = document.getElementById('tipInput');
const noPeople = document.getElementById('noPeople');
const billInput = document.getElementById('billInput');
const peopleInput = document.getElementById('peopleInput');
const resetBtn = document.getElementById('resetBtn');
const errorMsg = document.getElementById('errorMsg');
const custom = document.getElementById('custom');

resetBtn.disabled = true;

billInput.addEventListener('input', isValid);
peopleInput.addEventListener('input', isValid);
tipInput.addEventListener('click', tipPercent);

function isValid() {
    // if bill or people is invalid, reset button is disabled
    if (peopleValid() || billValid())
        resetBtn.disabled = true;
    else resetBtn.disabled = false;
}

function peopleValid() {
    if (peopleInput.value === '') {
        noPeople.classList.replace('error', 'noError');
        errorMsg.innerText = '';
        return true;
    } else if (peopleInput.value === '0') {
        noPeople.classList.replace('noError', 'error');
        errorMsg.innerText = `Can\'t be zero`;
        return true;
    } else if (peopleInput.value < 0 || peopleInput.value.startsWith('-')) {
        noPeople.classList.replace('noError', 'error');
        errorMsg.innerText = `Can\'t be negative`;
        return true;
    } else if (peopleInput.value > 0) {
        noPeople.classList.replace('error', 'noError');
        errorMsg.innerText = '';
        return false;
    }
}

function billValid() {
    if (billInput.value === '' || billInput.value === '0' || billInput.value < 0 || billInput.value.startsWith('-'))
        return true;
    else if (billInput.value > 0)
        return false;
}

function tipPercent(e) {
    for (const btn of tipInput.children)
        btn.classList.remove('active');
    custom.value = '';
    e.target.classList.add('active');
}