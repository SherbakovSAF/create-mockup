

const imgArray = [
  'mockup/Object (1).png',
  'mockup/Object (2).png',
  'mockup/Object (3).png',
]

const titleArray = [
  'Вилла на побережье в спальном районе',
  'Живописный Земельный участок',
  'Апартаменты с видом на море',
  'Дуплекс в пяти минутах от пляжа'
]

const placeArray = [
  'Провинция Baung',
  'Провинция Denpasar  ',
]


const regionsArray = [
  'bukit',
  'nusaDua',
  'uluwatu', 
  'canggu', 
  'seminyak', 
  'denpasar', 
  'ubud', 
]
const serviceArray = [
  'rent',
  'day',
  'buy', 
  'room', 
]
const typeHouseArray = [
  'villa',
  'apartments',
  'house', 
  'complex', 
  'room', 
  'day', 
]
const authorArray = [
  'owner',
  'agency',
  'room', 
]
const comfortArray = [
  'pool',
  'boiler',
  'park',
  'tv',
  'safe',
  'equippedKitchen',
  'washing',
  'cctv',
  'furniture',
  'bathroom',
  'shower',
  'bath',
  'wifi',
  'entry',
  'garage',
  'dishwasher',
  'coffeeMachine',
]


function generateRandomArray(array) {
  const uniqueSet = new Set();
  let countImg = 0;

  while (countImg < 3) {
    countImg = Math.ceil(Math.random() * array.length);
  }

  while (uniqueSet.size < countImg) {
    uniqueSet.add(Math.floor(Math.random() * array.length));
  }

  const localArray = Array.from(uniqueSet).map(index => array[index]);

  return localArray;
}

function getRandomIndex(array){
  return array[Math.floor(Math.random() * array.length)]

}

function getAccordionContent(){
  function getRandomLetter(upperBound) {
    const charCodeA = 'a'.charCodeAt(0);
    const charCodeUpperBound = upperBound.charCodeAt(0);
    const randomCharCode = Math.floor(Math.random() * (charCodeUpperBound - charCodeA + 1)) + charCodeA;
    return String.fromCharCode(randomCharCode);
  }
  const localObject = {
    a: getRandomLetter('t'),
    b: getRandomLetter('t'),
    c: getRandomLetter('t'),
    d: getRandomLetter('t'),
    e: getRandomLetter('t'),
    f: getRandomLetter('t'),
    g: getRandomLetter('o'),
    h: getRandomLetter('t'),
    i: getRandomLetter('p'),
    j: getRandomLetter('g'),
    k: getRandomLetter('j'),
  }
  return localObject
}

let resultArray = []
for (let index = 0; index < 20; index++) {
  resultArray.push({
    id: index,
    img: generateRandomArray(imgArray),
    title: getRandomIndex(titleArray),
    place: getRandomIndex(placeArray),
    region: getRandomIndex(regionsArray),
    freeDate: [],
    typeHouse : getRandomIndex(typeHouseArray), 
    typeService: getRandomIndex(serviceArray),
    stats: {
      bed: Math.floor(Math.random() * 10),
      area: Math.floor(Math.random() * 100),
      maxPlaces: Math.floor(Math.random() * 19 + 1),
    },
    statsBuy: {
      deadlineYear: 2030,
      paymentPlanYear: Math.floor(Math.random() * 10),
      profit: Math.floor(Math.random() * 20),
      roi: Math.floor(Math.random() * 10),
	  typeOwn: getRandomIndex(['Leasehold', 'Freehold']),
    },
    author: getRandomIndex(authorArray),
    comfort: generateRandomArray(comfortArray),
    price: Math.floor(Math.random() * 1000000),
    deposit: Math.floor(Math.random() * 1000),
    approved: getRandomIndex([true, false]),
    technical: getRandomIndex([true, false]),
    cords: [(Math.random() * -1 - 8).toFixed(4),(Math.random() + 115).toFixed(4)],
    templateAnswer: getAccordionContent(),

  })
}
const path = require('path');
const fs = require('fs');

function saveResultToFile(result, filePath) {
  fs.writeFile(filePath, result, (err) => {
    if (err) {
      console.error('Не удалось сохранить результат в файл:', err);
      return;
    }
    console.log('Результат успешно сохранен в файл:', filePath);
  });
}

const currentFolder = process.cwd();
const result = JSON.stringify(resultArray);
const filePath = path.join(currentFolder, 'result.js');;
saveResultToFile(result, filePath);
