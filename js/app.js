const CARS = JSON.parse(DATA)
console.log(CARS); //array of objects with car data

const carsList = document.getElementById('carsList')

function renderCars(cars, carsList) {
    carsList.innerHTML = cars.map(car => `<p>${car.make}</p>`).join('')
}
renderCars(CARS, carsList)