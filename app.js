const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

app.use(bodyParser.json());

// Combined GET and POST method endpoint for '/bfhl'
app.all('/bfhl', (req, res) => {
  if (req.method === 'GET') {
    // Handle GET request
    const response = {
      operation_code: 1,
    };
    res.status(200).json(response);
  } else if (req.method === 'POST') {
    // Handle POST request
    const { data } = req.body;

    // Separate numbers and alphabets using reduce
    const { numbers, alphabets } = data.reduce(
      (acc, item) => {
        if (typeof item === 'number') {
          acc.numbers.push(item);
        } else if (typeof item === 'string' && item.length === 1 && /^[a-zA-Z]+$/.test(item)) {
          acc.alphabets.push(item);
        }
        return acc;
      },
      { numbers: [], alphabets: [] }
    );

    // Generate user_id based on constants
    const user_id = 'john_doe_17091999';
    const college_email_id = 'john@xyz.com';
    const college_roll_number = 'ABCD123';

    // Find the highest alphabet in a case-insensitive manner
    const highestAlphabet = alphabets.reduce((highest, current) => {
      return current.toLowerCase() > highest.toLowerCase() ? current : highest;
    }, 'A');

    // Simulate a successful operation (can be true/false)
    const is_success = true;

    const response = {
      is_success,
      user_id,
      email: college_email_id,
      roll_number: college_roll_number,
      numbers,
      alphabets,
      highest_alphabet: [highestAlphabet],
    };

    res.status(200).json(response);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
