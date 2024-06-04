// Load the required module
const fs = require('fs');

// Read the contents of the file asynchronously
fs.readFile('planets.txt', 'utf8', (err, data) => {
  if (err) {
    // If there's an error, log it and exit
    console.error(err);
    return;
  }

  // Split the content by commas to get an array of planets
  const planets = data.split(',').map(planet => planet.trim());

  // Print each planet to the console
  planets.forEach(planet => console.log(planet));
});

