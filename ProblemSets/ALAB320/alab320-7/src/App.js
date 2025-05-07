import {
  useState, useEffect
} from 'react';
import './App.css';

// Import our components 
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // Constant with your API key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get moview
  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the movie state to the received data
    setMovie(data);
  };

  // This will run on the first render but not on subsequent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

