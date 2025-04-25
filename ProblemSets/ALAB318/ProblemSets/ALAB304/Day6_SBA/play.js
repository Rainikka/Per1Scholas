let movies = []
 console.log(movies)

 movies = ["Matilda","Matrix","LOTR","Batman"]


 for (let i = 0; i< movies.length; i++) {
  console.log(movies[i])
 }


let movies2 =["Shawshank Redemption", "The Godfather", "Dark Knight", "Godfather Part II", "12 Angry Men", "The Lord of the Rings", "Schindler's List", "Pulp Fiction", "Amelie"]

  console.log(movies2)

  /** 
Matilda
Matrix
Avatar
Avengers: Endgame 
Avatar: The Way of Water
Titanic
**/

let movieString = movies.join(" and ")
console.log(movieString)

  let moviesExtra = movies2.push("Lion King")
  console.log(moviesExtra)

  movies2.forEach(movie) => {
    console.log(movie)
  }