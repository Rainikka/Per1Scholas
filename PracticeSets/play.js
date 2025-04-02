/** stringCVS = ("Shawshank Redemption,The Godfather,Dark Knight,Godfather Part II,12 Angry Men,The Lord of the Rings,Schindler's List,Pulp Fiction,Amelie")

console.log(stringCVS)

console.log(stringCVS.length) **/
/**
let obj = {
  fruit: "apple",
  vegetable: "carrot"
};

console.log(obj["fruit"]);
console.log(obj.fruit);

let data = {
  a: 10,
  b: 20,
  c: 30
};

console.log(Object.keys(data).length);
**/
let movies = [
  "Shawshank Redemption",
  "The Godfather",
  "Dark Knight",
  "Godfather Part II",
  "12 Angry Men",
  "The Lord of the Rings",
  "Schindler's List",
  "Pulp Fiction",
  "Amelie"
];

for (let i = 0; i < movies.length; i++) {
  for (let j = 0; j < movies.length - 1; j++) {
    console.log(`i: movies[i] movies[j]`);
  }
}

// for (let i = 0; i = 4; i++) {
//   let row = "";
//   for let (j = 0;)
