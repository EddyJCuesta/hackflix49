//App.js
import Catalogue from "./components/Catalogue";
import MovieDetails from "./components/MovieDetails";
import {Routes, Route } from 'react-router-dom'
// PseudoCode
// Set up .ENV file to store our API key
// Setup _REDIRECTS file 

// Create a Component to hold our initial Axios Call in a useEffect
// Store our Api Data in STATE
// Loop over the data and display a movie poster on the page

// Use the LINK to make our POSTERS change the URL on click
// Use Routes to listen for the url change and display the appropriate component

function App() {
  return (
    <>
      <h1>Hackflix!</h1>
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/movie/:movieID" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
