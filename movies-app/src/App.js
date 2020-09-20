import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './Navbar';
import MoviesList from './feature/movies/MoviesList';
import MoviesDetails from './feature/movies/MoviesDetails'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path = "/" component = {() => <h1>Homepage</h1>}/>
        <Route exact path = "/movies" component = {MoviesList} />
        <Route exact path = "/movies/:movieId" component = {MoviesDetails} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
