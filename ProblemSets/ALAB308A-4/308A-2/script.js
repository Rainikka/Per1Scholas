/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 308A.2 *********/
/******************************/

/******************************/
/***** An Object-Oriented *****/
/********* Adventure **********/
/******** 09-May-2025 *********/


/*********** PART 1: HUMBLE BEGINNINGS **********/
let adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"]
}

/*** Task 1: Create a loop that logs each item in Robin's inventory ***/
/*** Why This Works: For Of Loop Iterates over Values ***/

for (const tool of adventurer.inventory) {
  console.log(tool);
}

/****** Task 2: Add a "companion" sub-object to "Leo" with the following properties:
 * The companion's name is "Frank" 
 * The companion's type is "Flea" 
 * The companion has its own belongings, which inclues a small hat and sunglasses ****/
adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "cat",
    inventory: [], // Leo should have his own inventory
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"]
    }
  }
};

/****** Task 3: Call adventurer roll a few times ******/
adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "cat",
    inventory: [], // Leo should have his own inventory
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"]
    }
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
};

const fewRolls = [];
for (let i = 0; i < 3; i++) {
  fewRolls.push(adventurer.roll());
}
console.log(fewRolls);


/*********** PART 2: CLASS FANTASY **********/
/*** Task 1: Add the roll method to the Character class ***/

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
};

/*** Task 2: Re-Create Robin using the Character class & Add roll method ***/
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

const leoRoll = robin.companion.roll();
console.log("Leo's roll result:", leoRoll);


/*********** PART 3: CLASS FEATURES **********/
/*** Task 1: Add Attributes that Are Specific to the Character Class ***/
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.specialAbility = this.determineSpecialAbility(role);
    this.health = this.determineBaseHealth(role);
    this.inventory.push("bedroll", "50 gold coins");
  }
  determineSpecialAbility(role) {
    const abilities = {
      'warrior': 'rage',
      'mage': 'spellcasting',
      'rogue': 'stealth',
      'cleric': 'healing'
    };
    return abilities[role.toLowerCase()] || 'investigation';
  }
  determineBaseHealth(role) {
    const healthStats = {
      'warrior': 120,
      'mage': 80,
      'rogue': 100,
      'cleric': 110
    };
    return healthStats[role.toLowerCase()] || 90;
  }
  scout() {
    console.log(`${this.name} the ${this.role} is scouting ahead...`);
    super.roll();
  }
}

/*** Task 2: Add Attributes that Are Specific to the Companion Class ***/
const dragonCompanion = new Companion('Smaug', 'dragon', 3);
dragonCompanion.assist();
dragonCompanion.bond(2);

/*** Task 3: Change the Declaraton of Robin & COmpanions to Use the Classes ***/
const robin = new Adventurer("Robin", "ranger");
robin.inventory.push("sword", "potion", "artifact");
robin.health = 110;
robin.specialAbility = "archery";

const companions = [
  new Companion("Leo", "wolf", 8),
  new Companion("Frank", "mechanical", 4),
  new Companion("Ralph", "spirit", 6),
  new Companion("Troy", "dragon", 2)
];

console.log(`${robin.name} is a ${robin.role} with ${robin.health} health`);
robin.scout();

companions.forEach(companion => {
  console.log(`${companion.name} is a ${companion.type} that can ${companion.specialSkill}`);
  companion.assist();
});

companions[3].bond(3);

/*********** PART 4: CLASS UNIFORMS **********/
/*** Task 1: Add a static MAX_HEALTH property to the Character class, equal to 100  ***/

/*** Task 2: Add a static ROLES array to the Adventurer class tht ensures thhe given role matches one of these values  ***/


/*********** PART 5: GATHER YOUR PARTY  **********/
/*** Task 1: Create many  "healer" role adventurers using a factory class ***/
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role); this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}
const healers = new AdventurerFactory("Healer"); const robin = healers.generate("Robin");
