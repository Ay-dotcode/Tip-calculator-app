const active = document.getElementById('active');
const noPeople = document.getElementById('noPeople');

// noPeople.classList.replace('noError', 'error') // Add error id to noPeople

// addActive(active); // making a buttn active

function addActive(elem) {
    elem.style.backgroundColor = 'hsl(172, 67%, 45%)'
    elem.style.color = 'hsl(183, 100%, 15%)'
}