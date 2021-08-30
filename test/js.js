const buttons = document.querySelector('.buttons');
const citys = Array.from(document.querySelectorAll('.cls-1'))
    .filter(city => isCity(city));

citys.forEach(city => {
    const newButton = document.createElement('button');
    newButton.dataset.id = city.id;
    newButton.innerHTML = city.dataset.name;
    newButton.addEventListener('click', showCity);
    buttons.appendChild(newButton);
});

function showCity($event) {
    const selectedCity = document.querySelector(`#${$event.target.dataset.id}`);
    selectedCity.classList.toggle('show');
}

function isCity(city) {
    return city.dataset.name;
}