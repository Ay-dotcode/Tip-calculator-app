const active = document.getElementById('active');
const noPeople = document.getElementById('noPeople');
const billInput = document.getElementById('billInput');
const peopleInput = document.getElementById('peopleInput');
const resetBtn = document.getElementById('resetBtn');

// noPeople.classList.replace('noError', 'error') // Add error id to noPeople

// addActive(active); // making a buttn active
resetBtn.addEventListener('click', () => {
    peopleInput.value = '';
    billInput.value = '';
    resetBtn.disabled = true;
    noPeople.classList.replace('error', 'noError');
})

function addActive(elem) {
    elem.style.backgroundColor = 'hsl(172, 67%, 45%)'
    elem.style.color = 'hsl(183, 100%, 15%)'
}