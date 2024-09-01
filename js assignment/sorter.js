// create an empty array called randomNumbers
let randomNumbers = [];

// generate random numbers using a loop and store them in the random
for (let i = 0; i < 15; i++) {
    // generate a random number between 0 and 15
    let randomNumber = Math.floor(Math.random() * 15) + 1;
    randomNumbers.push(randomNumber);  
}
// sort the randomNumbers array in acsending order
    randomNumbers.sort((a, b) => a - b);

// create variables to count how many numbers are greater than 25
    let countGreaterThan25 = 0;

// loop through the random numbers array
    for (let i = 0; i < randomNumbers.length; i++) {
        // for each number, check if its greater than 25
        if (randomNumbers[i] > 25) {
            // If it is, increase the count
            countGreaterThan25++;
        }
    }

    // display the sorter array and the count of number greater than 25
    console.log('Sorted Array:', randomNumbers);
    console.log('Count of number greater than 25:', countGreaterThan25);
