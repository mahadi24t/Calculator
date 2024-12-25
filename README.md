# Calculator Application

This is a simple calculator application built with HTML, CSS, and JavaScript. It supports basic mathematical operations, including addition, subtraction, multiplication, and division, as well as additional functionalities like clearing, backspacing, and decimal inputs.

## Features

- Perform basic operations: Addition (+), Subtraction (-), Multiplication (*), Division (/).
- Display rounded results to 3 decimal places.
- Prevent division by zero with an error message.
- Clear button to reset the calculator.
- Backspace button to delete the last digit.
- Support for decimal numbers.
- Prevents invalid inputs like multiple decimals in a single number.
- Chain operations seamlessly by reusing the result of the previous calculation.

## File Structure

- **index.html**: Contains the structure of the calculator UI.
- **style.css**: Styles for the calculator layout and design.
- **script.js**: Logic for handling user interactions and calculations.

## How to Use

1. Clone the repository or download the files.
2. Open `index.html` in any modern web browser.
3. Use the buttons on the calculator to input numbers and operators.
4. Press the `=` button to calculate the result.
5. Use `C` to clear all inputs and reset the calculator.
6. Use `⌫` (backspace) to delete the last entered digit.

## Edge Cases Handled

- **Division by zero**: Displays "Math Error!" instead of crashing.
- **Multiple operators**: Ensures calculations are performed sequentially.
- **Decimals**: Prevents multiple decimal points in a single number.

## Future Enhancements

- Add keyboard support for entering numbers and operators.
- Improve styling for better user experience.
- Support for advanced mathematical operations (e.g., square root, exponents).

## License

This project is open-source and free to use under the MIT License.

