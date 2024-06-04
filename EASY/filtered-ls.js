// Load the required modules
const fs = require('fs');
const path = require('path');

// Get the directory path and extension from command-line arguments
const directoryPath = process.argv[2];
const extension = '.' + process.argv[3];

// Read the directory contents asynchronously
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    // If there's an error, log it and exit
    console.error(err);
    return;
  }
  
  // Filter the files by the given extension
  const filteredFiles = files.filter(file => path.extname(file) === extension);
  
  // Print each filtered file to the console
  filteredFiles.forEach(file => console.log(file));
});
