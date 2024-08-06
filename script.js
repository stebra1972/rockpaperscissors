function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    return randomElement;
}
const array = ["sasso","carta","forbici"];
const randomElement = getRandomElement (array);
document.write ("Random element selected:", randomElement);
document.write ("Original array:",array);