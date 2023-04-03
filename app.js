const charactersContainer = document.getElementById('characters');
const vehiclesContainer = document.getElementById('vehicles');

function renderData(data) {
    charactersContainer.innerHTML = '';
    vehiclesContainer.innerHTML = '';
    
    data.results.forEach(character => {
    const card = document.createElement('div');
    card.classList.add('card');
    const name = document.createElement('h2');
    name.innerText = character.name;
    const gender = document.createElement('p');
    gender.innerText = 'Gender: ' + character.gender;
    const birthYear = document.createElement('p');
    birthYear.innerText = 'Birth Year: ' + character.birth_year;
    const height = document.createElement('p');
    height.innerText = 'Height: ' + character.height;
    const mass = document.createElement('p');
    mass.innerText = 'Mass: ' + character.mass;

    const vehiclesButton = document.createElement('button');
    vehiclesButton.innerText = 'Show vehicles';

    const vehicleCard = document.createElement('div');
    const vehicleName = document.createElement('h2');
    vehiclesButton.addEventListener('click', () => {
    let veh = ''
    const fetchRequests = character.vehicles.map(vehicleUrl => fetch(vehicleUrl));
    Promise.all(fetchRequests)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(vehicles => {
        vehiclesContainer.innerHTML = '';
        vehicles.forEach(vehicle => {
            veh = veh + '\t' + vehicle.name
            vehicleCard.classList.add('card');
            console.log(vehicle.name)
        });
        if (veh == '' || veh == null || veh.length == 0)
        {
            veh = 'No vehicles linked this Character'
        }
        vehicleName.innerHTML = veh;
        vehicleCard.appendChild(vehicleName);
        vehiclesContainer.appendChild(vehicleCard);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    .catch(error => console.error(error));
});

    card.appendChild(name);
    card.appendChild(gender);
    card.appendChild(birthYear);
    card.appendChild(height);
    card.appendChild(mass);
    card.appendChild(vehiclesButton);

    charactersContainer.appendChild(card);
    });
}

function main() {
    fetch('https://swapi.dev/api/people/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => renderData(data))
    .catch(error => console.error('Error:', error));
}

main();