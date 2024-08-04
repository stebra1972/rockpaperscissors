
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    return randomElement;
}

const array = [1, 2, 3, 4, 5];
const randomElement = getRandomElement(array);
console.log("Random element selected:",randomElement);
console.log("Original array:",array);