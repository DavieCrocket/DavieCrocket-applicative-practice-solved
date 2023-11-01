import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  let moonsCount = 0;
  data.planets.filter(function(planet) {
    if (planet.moons) {
      moonsCount += planet.moons.length;
      console.log(moonsCount);
    }
  }); 
  return moonsCount;
}


allPlanetsMoonsCount(data);



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
