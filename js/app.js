const CARS = JSON.parse(DATA);
console.log(CARS); //array of objects with car data
const USDrate = 28.12;
const carsList = document.getElementById('carsList');
const searchForm = document.getElementById('searchForm');
const sortingSelect = document.getElementById('sortingSelect');


sortingSelect.addEventListener('change', (event)=>{
    const value = event.target.value.split('/')
    const [key, order] = value
    CARS.sort((carA, carB) =>{
        return String(carA[key]).localeCompare(String(carB[key]), undefined, {numeric: true}) * order
    });
    renderCars(CARS, carsList);
})


searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchQuery = event.target.search.value.trim().replaceAll(/[\s{2,}]/g, ' ').toLowerCase().split(' ')
    console.log(searchQuery);
    const foundCars = CARS.filter((car) => {
        return searchQuery.every((word)=> {
            return `${car.make} ${car.model} ${car.year}`.toLowerCase().includes(word)
        }
        )
    });
    renderCars(foundCars, carsList);
})


function createCarTemplate(car) {
    let starIcons = '';
  for (let i = 0; i < 5; i++) {
      if (car.rating > i) {
        starIcons += '<i class="fas fa-star"></i>';
      } else{
        starIcons += '<i class="far fa-star"></i>';
      }
  }

  return `<div class="ads">
    <img src="${car.img}" alt="${car.make} ${car.model}" width="1" height="1" loading="lazy"
        decoding="async" class="ads-img">
        <div class="dies">
            ${car.vip ? `<h3 class="dies-vip">VIP-оголошення</h3>` : ''}
            ${car.top ? `<h3 class="dies-top">TOP-оголошення</h3>` : ''}
        </div>
    <div class="ads-information">
        <h2>${car.make} ${car.model} (${car.year})</h2>
        <h3 class="rating"><span class="rating-text">Rating: </span>${starIcons}</h3>
        <div class="price">
            <h3 class="price-dollars">${car.price} $</h3>
            <h3 class="price-hryvnas">${(car.price * USDrate).toFixed(0)} грн</h3>
        </div>
        <div class="specificatons">
            <h3 class="mileage"><i class="fas fa-tachometer-alt"></i>${(car.mileage /1000).toFixed(0)} тис. км</h3>
            <h3 class="country"><i class="fas fa-map-marker-alt"></i>${car.country}</h3>
            <h3 class="fuel"><i class="fas fa-gas-pump"></i>${car.fuel}</h3>
            <h3 class="transmission"><i class="fab fa-adn"></i>${car.transmission}</h3>
        </div>
        <div class="vin">
        <i class="fas fa-car"></i>
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


// searchForm.addEventListener('submit', event =>{
//     event.preventDefault()
//     console.log('Form sended')
// })


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


// const words = ['яблоко','лес','ежик']
// words.sort((a,b)=>{
//     return String(a).localeCompare(String(b), undefined, {numeric: true})
// })
// console.log(words);

// const number = [5,10,8,39,12,3]
// number.sort((a,b)=>{
//     return String(a).localeCompare(String(b), undefined, {numeric: true})
// })
// console.log(number);

// function handleClick(event) {
//     console.log(event);
//     if (event.timeStamp > 10000) {
//         console.log("Listener removed!");
//         clickBtn.removeEventListener('click', handleClick)
//     }
// }

// clickBtn.addEventListener('click', handleClick)


// carsList.addEventListener('click', event => {
//     const fuelEl = event.target.closest('.fuel')
//     if (fuelEl) {
//         console.log(fuelEl);
//     }
// })


// document.addEventListener('click', e => {
//     console.log('Click on document');
    
// })

// btn60.addEventListener('click', e => {
//     console.log('Click1 on btn60');
// })
// btn60.addEventListener('click', e => {
//     console.log('Click2 on btn60');
//     e.stopImmediatePropagation()
// })
// btn60.addEventListener('click', e => {
//     console.log('Click3 on btn60');
// })

// searchForm.addEventListener('submit', e => {
//     e.preventDefault()
//     console.log('Form sended!');
// })


const [a,,c] = [1,2,3]

const user = {
    name: 'Ivan',
    age: 25,
}
const {age, name} = user

let x = 5;
let y = 10;

 [y,x] = [x,y]