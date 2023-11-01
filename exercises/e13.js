import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  let planetTempSum = 0;
  let avgTemp = 0;
  data.planets.filter(function(planet) {
    planetTempSum += planet.avgTemp;
    avgTemp = planetTempSum / data.planets.length;
    // console.log(avgTemp);
    return avgTemp;
  })
  return avgTemp;
}

getAveragePlanetsTemperature(data);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
