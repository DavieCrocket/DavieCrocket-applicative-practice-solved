import { data } from "../data/data.js";

export function findPlanetNameByMoon(data, moonName) {
  return data.planets.filter((planet) => {
    if (planet.moons) {
      if (planet.moons.includes(moonName)){
        return planet;
      }
    }
  })[0].name; 
}

var moonName = 'Triton';
findPlanetNameByMoon(data, moonName);
console.log(data.planets[0].avgTemp);