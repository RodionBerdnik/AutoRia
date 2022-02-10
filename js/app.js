const CARS = JSON.parse(DATA);
console.log(CARS); //array of objects with car data
const USDrate = 28.12;
const carsList = document.getElementById('carsList');




function createCarTemplate(car) {

  return `<div class="ads">
    <img src="${car.img}" alt="${car.make} ${car.model}" width="1" height="1" loading="lazy"
        decoding="async" class="ads-img">
    <div class="ads-information">
        <h2>${car.make} ${car.model} (${car.year})</h2>
        <div class="price">
            <h3 class="price-dollars">${car.price} $</h3>
            <h3 class="price-hryvnas">${(car.price * USDrate).toFixed(0)} грн</h3>
        </div>
        <div class="specificatons">
            <h3 class="mileage"><i class="fa-solid fa-gauge-high"></i>${(car.mileage /1000).toFixed(0)} тис. км</h3>
            <h3 class="counry"><i class="fa-solid fa-location-dot"></i>${car.country}</h3>
            <h3 class="fuel"><i class="fa-solid fa-gas-pump"></i>${car.fuel}</h3>
            <h3 class="transmision">${car.transmission}</h3>
        </div>
        <div class="vin">
        <i class="fa-solid fa-car-mirrors"></i>
        ${car.vin ? car.vin : 'VIN не вказано'}
        </div>
        <dl class="consume">
        <h3>Витрата палива: </h3>
            <div class="consume_meaning">
                <dt>City:<dt>
                <dd>${car.consume?.city ?? 'Не вказано'}<dd>
            </div>
            <div class="consume_meaning">
                <dt>Mixed:<dt>
                <dd>${car.consume?.mixed ?? 'Не вказано'}<dd>
            </div>
            <div class="consume_meaning">
                <dt>Road:<dt>
                <dd>${car.consume?.road ?? 'Не вказано'}<dd>
            </div>
        </dl>
    </div>
</div>`;
}

function createCarsHTML(cars) {
  return cars.map((car) => createCarTemplate(car)).join('');
}

function renderCars(cars, carsList) {
  const carsHTML = createCarsHTML(cars);
  carsList.innerHTML = carsHTML;
}

renderCars(CARS, carsList);







// function makeBorshch(ingredients, stove, pan) {
    
// }
// const ingredients = ['meat', 'potato', 'water', 'tomatos', 'onion', 'carrot']
// const stove = 'indesit'
// const pan = '3l'

// makeBorshch(ingredients, stove, pan)




// если car.vin равен тру, то выдаём car.vin иначе выдаём 'VIN не вказано'



// scheme Car {
//     vin?: string,
//     phone?: string | number,
// }