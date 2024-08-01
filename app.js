const active = document.getElementById('active');
const noPeople = document.getElementById('noPeople');

// noPeople.classList.add('error'); // Add error class to noPeople

addActive(active);

function addActive(elem) {
    elem.style.backgroundColor = 'hsl(172, 67%, 45%)'
    elem.style.color = 'hsl(183, 100%, 15%)'
}