const breed = process.argv.slice(2)[0];
const breedFormat = breed.toLowerCase();
const breedCode = breedFormat[0] + breedFormat[1] + breedFormat[2] + breedFormat[3];
const request = require('request');
const pageName = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedCode}`;




request(pageName, (error, response, body) => {
  
  if (error !== null) {
    console.log("Error: couldn't find website. Please check URL and try again.");
  } else {
    const data = JSON.parse(body);
    console.log("body length:", body.length);
    if (body.length > 2) {  //for some reason the length of an empty array is 2. this checks if larger than empty array
      console.log("\n description:", data[0]["breeds"][0]["description"]);
    } else {
      console.log("Breed not found in data.");
    }
    
  }
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  
  // console.log("\n description:", data[0]["breeds"][0]["description"]);
  

});