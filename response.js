const fs = require('fs');

const jsonData = {
  operation_code: 1
};

// Write the JSON object to a file named 'response.json'
fs.writeFileSync('response.json', JSON.stringify(jsonData, null, 2));

console.log('JSON data has been written to response.json');
