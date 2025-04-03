
/*********************************/
/******* Rainikka Corprew ********/
/********** JAVASCRIPT ***********/
/************ 308A.2 *************/
/*********************************/

/*********************************/
/******* Objects & Arrays ********/
/******** with JavaScript ********/
/********** 30-MAR-2025 **********/

/*********************************************************************
 * Copy the following code snippet and paste it into a newly created
 * JavaScript file.Complete all of the following tasks for Part 1 and Part
 * 2. Create a local git repo for the assignment and push the code up to a
 * created GitHub repository.Submit the link to your GitHub repo for the
 * assignment.
/**********************************************************************/

//////////////////////////////
// The Solar System, Part 1 //
//////////////////////////////

const solarSystem = [
  { name: "Mercury", ringSystem: false, moons: [] },
  { name: "Venus", ringSystem: false, moons: [] },
  { name: "Earth", ringSystem: false, moons: ["The Moon"] },
  { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
  { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
  { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
  { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
  { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// 1. Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
console.log(`Moons of ${solarSystem[4].name}: ${solarSystem[4].moons}`)

// 2. Print the name of Neptune's moon "Nereid" to the console.
console.log(`A Moon of ${solarSystem[7].name}: ${solarSystem[7].moons[1]}`);

// 3. Add a new moon called "Endor" to Venus' moons array.
solarSystem[1].moons.push("Endor");
console.log(`The new moon of Venus: ${solarSystem[1].moons}`);

// 4. Add a Pluto object to the solarSystem array using push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
solarSystem.push({
  name: "Pluto",
  ringSystem: false,
  moons: ["Charon", "Styx", "Nix", "Kerberos", "Hydra"]
});

console.log(`All the planets of the solar system`);
console.log(solarSystem);

/************ TESTING AREA ************/
const test0 = document.getElementById('test0').innerHTML = solarSystem;
const test1 = document.getElementById('test1').innerHTML = `${solarSystem} `;
/************************************/

// 5. Add a new key-value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
solarSystem[2].diameter = "7926.2 mi";
console.log(`Earth's diameter: ${solarSystem[2].diameter}`);

// 6. Change Mercury's ringSystem boolean to true.
solarSystem[0].ringSystem = "true";
console.log(`Mercury's ring system: ${solarSystem[0].ringSystem}`);

// 7. Change Uranus' moon "Umbriel" to "Oberon"
solarSystem[6].moons[3] = "Oberon";
console.log(`The moons of Uranus: ${solarSystem[6].moons}`);

// 8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others.
solarSystem.forEach(planet => {
  if (planet.ringSystem = "true") {
    console.log(`${planet.name}`);
  }
});
//////////////////////////////
// The Solar System, Part 2 //
//////////////////////////////
const system = {
  mercury: {
    radiusp: 'same',
    name: 'Mercury',
    density: 5.43,
    tilt: 2,
    image: 'textures/mercury.gif',
    rotationperiod: 1408,
    period: 0.24,
    radiuse: 2439,
    satellites: 0,
    au: 0.3871,
    eccentricity: 0.206,
    velocity: 47.89,
    mass: 0.06,
    inclination: 7
  },
  venus: {
    radiusp: 'same ',
    name: 'Venus',
    density: 5.25,
    tilt: 177.3,
    image: 'textures/venus.gif',
    rotationperiod: 5832,
    period: 0.62,
    radiuse: 6052,
    satellites: 0,
    au: 0.7233,
    eccentricity: 0.007,
    velocity: 35.04,
    mass: 0.82,
    inclination: 3.4
  },
  earth: {
    radiusp: 6357,
    name: 'Earth',
    density: 5.52,
    tilt: 23.45,
    image: 'textures/earth.gif',
    rotationperiod: 23.93,
    period: 1,
    radiuse: 6378,
    satellites: 1,
    au: 1,
    eccentricity: 0.017,
    velocity: 29.79,
    mass: 1,
    inclination: 0
  },
  mars: {
    radiusp: 3380,
    name: 'Mars',
    density: 3.95,
    tilt: 25.19,
    image: 'textures/mars.gif',
    rotationperiod: 24.62,
    period: 1.88,
    radiuse: 3397,
    satellites: 2,
    au: 1.524,
    eccentricity: 0.093,
    velocity: 24.14,
    mass: 0.11,
    inclination: 1.85
  },
  jupiter: {
    radiusp: 66854,
    name: 'Jupiter',
    density: 1.33,
    tilt: 3.12,
    image: 'textures/jupiter.gif',
    rotationperiod: 9.92,
    period: 11.86,
    radiuse: 71490,
    satellites: '69',
    au: 5.203,
    eccentricity: 0.048,
    velocity: 13.06,
    mass: 317.89,
    inclination: 1.3
  },
  saturn: {
    radiusp: 54360,
    name: 'Saturn',
    density: 0.69,
    tilt: 26.73,
    image: 'textures/saturn.gif',
    rotationperiod: 10.66,
    period: 29.46,
    radiuse: 60268,
    satellites: 30,
    au: 9.539,
    eccentricity: 0.056,
    velocity: 9.64,
    mass: 95.18,
    inclination: 2.49
  },
  uranus: {
    radiusp: 24973,
    name: 'Uranus',
    density: 1.29,
    tilt: 97.86,
    image: 'textures/uranus.gif',
    rotationperiod: 17.24,
    period: 84.01,
    radiuse: 25559,
    satellites: 24,
    au: 19.19,
    eccentricity: 0.046,
    velocity: 6.81,
    mass: 14.53,
    inclination: 0.77
  },
  neptune: {
    radiusp: 24340,
    name: 'Neptune',
    density: 1.64,
    tilt: 29.6,
    image: 'textures/neptune.gif',
    rotationperiod: 16.11,
    period: 164.79,
    radiuse: 25269,
    satellites: 8,
    au: 30.06,
    eccentricity: 0.01,
    velocity: 5.43,
    mass: 17.14,
    inclination: 1.77
  },
  pluto: {
    radiusp: 'same',
    name: 'Pluto',
    density: 2.03,
    tilt: 122.46,
    image: 'textures/pluto.gif',
    rotationperiod: 153.3,
    period: 248.54,
    radiuse: 1160,
    satellites: 1,
    au: 39.48,
    eccentricity: 0.248,
    velocity: 4.74,
    mass: 0.002,
    inclination: 17.15
  }
};

// 1. Console.log the mass of Mercury
console.log(`Mass of Mercury: ${system.mercury.mass}`);

// 2. Console.log the eccentricity of Venus
console.log(`Eccentricity of Venus: ${system.venus.eccentricity}`);

// 3. Console.log the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)
console.log(`Satellites of Jupiter: ${system.jupiter.satellites} Satellites of Saturn: ${system.saturn.satellites} Satellites of Uranus: ${system.uranus.satellites} Satellites of Neptune: ${system.neptune.satellites} `)

// 4. Write a conditional that checks if Mercury's radiusp is a string (remember the typeof command). If Mercury's radiusp is a string, change the value to be the same as its radiuse value. (radiusp is radius at the poles, radiuse is radius at the equator).
if (typeof system.mercury.radiusp === "string") {
  system.mercury.radiusp = system.mercury.radiuse;
  console.log(`Polar radius of Mercury: ${system.mercury.radiuse}`);
} else {
  console.log(`Polar radius Mercury is ${system.mercury.radiusp}`);
}

// 5. Console.log Mercury's radiusp (should be 2439, not 'same').
console.log(`Polar radius of Mercury: ${system.mercury.radiusp} km`);


// 6. Find the difference between Jupiter's momentum and Pluto's momentum. (To get momentum, you'll want the product of velocity and mass).

const momentumOfJupiter = system.jupiter.mass * system.jupiter.velocity;
const momentumOfPluto = system.pluto.mass * system.pluto.velocity;

const differenceInMomentum = momentumOfJupiter - momentumOfPluto;

// Log the results
console.log(`Jupiter's momentum: ${momentumOfJupiter}`);
console.log(`Pluto's momentum: ${momentumOfPluto}`);
console.log(`Jupiter and Pluto differencd in momentum  : ${differenceInMomentum}`);