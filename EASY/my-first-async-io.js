// Load the filesystem module
const fs = require('fs');

// Get the file path from the first command-line argument
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    // If there's an error, log it and exit
    console.error(err);
    return;
  }
  
  // Count the number of newlines in the file content
  const lineCount = data.split('\n').length - 1;

  // Print the number of newlines
  console.log(lineCount);
});
