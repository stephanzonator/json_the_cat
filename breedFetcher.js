const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const breedFormat = breed.toLowerCase();
  const breedCode = breedFormat[0] + breedFormat[1] + breedFormat[2] + breedFormat[3];
  const pageName = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedCode}`;
  request(pageName, (error, response, body) => {
    if (error !== null) {
      callback("Couldn't find website. Please check URL and try again.", null);
    } else {
      const data = JSON.parse(body);
      if (body.length > 2) {  //for some reason the length of an empty array is 2. this checks if larger than empty array
        callback(null, `${data[0]["breeds"][0]["description"]}`);
      } else {
        callback(null, "Breed not found in data.");
      }
    }
  });
};

module.exports = {fetchBreedDescription};


