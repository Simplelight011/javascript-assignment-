// create an empty Array called random numbers
let randomNumbers = [];
 
// generate random numbers using a loop and store them in a randomNumbers
for (let i = 0; i <=20; i++ ){
    // generate a random number between 0 and 20
    let randomNumber = Math.floor(Math.random() * 20);
    randomNumbers.push(randomNumber);

}

// create two more empty arrays
let evenNumbers = [];
let oddNumbers = [];

// loop through the random numbers array
for (let i = 0; i < randomNumbers.length; i++){
    // for each number, check if its even or odd
    if (randomNumbers[i] % 2 === 0) {
        // if its evenNumbers, add it to evenNumbers
        evenNumbers.push(randomNumbers[i]);
    } else {
        // id its oddNumbers, add it to oddNumbers
        oddNumbers.push(randomNumbers[i]);
    }
}
// display the evenNumbers and oddNumbersarrays in the console 
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

