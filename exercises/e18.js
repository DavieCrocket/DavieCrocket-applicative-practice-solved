import { data } from "../data/data";

/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */


export function getGreatestDiscoveryYear(data) {
  let asteroidDiscoveries = [];
  data.asteroids.filter(function(discovery) {
    if (discovery.discoveryYear) {
      asteroidDiscoveries.push(discovery.discoveryYear);
    }
  })
  // console.log(asteroidDiscoveries)
  
  const discoveryCounts = asteroidDiscoveries.reduce(function(year, count) {
    if (!year[count]) {
      // if the year doesn't yet exist as a property of the accumulator object,
      //   add it as a property and set its count to 1
      year[count] = 1;
    } else {
      // year exists, so increment its count
      year[count]++;
    }
    return year; // return the modified object to be used as accumulator in the next iteration
  }, {}); // initialize the accumulator as an empty object
    // console.log(discoveryCounts);
  
  const countsArray = Object.entries(discoveryCounts); // convert list of key-values to array of arrays
  // console.log(countsArray);
  var thisYear = 0;
  var count = 0;
  for (let element of countsArray) {
    // console.log(element);
    if (element[1] > count) {
      count = element[1];
      thisYear = element[0];
    }
  }
  // console.log(thisYear);
  thisYear = thisYear * 1;
  return thisYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
