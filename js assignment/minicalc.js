// create a function called calculate
function calculate(num1, num2, operation) {
 
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

 
    // check if num1 and num2 are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        return 'Error: Operation must be a number.';
    }

    // check if operation is a valid string 
    if (typeof operation !== 'string') {
        return 'Error: Operation must be a string.';
    }
// perform math operations
    switch (operation.toLowerCase()) {
        case 'add':
            return num1 + num2;
        
        case 'subtract':
            return num1 - num2;

        case 'multiply':
            return num1 * num2;

        case 'divide' :
            if (num2 === 0) {
                return 'Error: Division by Zero is not allowed.';
            }   
            return num1 / num2;
        
        case 'modulus':
            return num1 % num2;
            default:
                return 'Errow: Invalid operation. use add, subtract, divide, or modulus.';
        }
}

   // prompt user for inputs
   const num1 = prompt("Enter the first number:")
   const num2 = prompt("Enter the second number:")
   const operation = prompt("Enter the operation (add, subtract,multiply, divide, modulus):")
  


// call the calculate funtion and display the result
const result = calculate(num1, num2, operation);
alert("Result: " + result);