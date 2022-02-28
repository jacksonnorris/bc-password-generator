# Password Generator

[Live Demo](https://jacksonnorris.github.io/bc-password-generator/)

Generates a password between 8 and 128 characters given one or more of the following parameters:

- Uppercase Character
- Lowercase Character
- Numeric Character
- Symbol

If none are selected, an error message will appear telling the user to select one of the values in order to generate a password

Note: The generated password prepends a string to the front in order to guarantee that at least one of each selected parameter is in the string. Due to this, the front of the string will always have an order of (uppercase, lowercase, numeric, symbol) if all 4 parameters are selected. The rest of the string is determined in a completely random order.
