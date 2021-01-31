import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SearchMovies from './screens/SearchScreen/index';
import NotFound from './screens/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SearchMovies} />
          <Route exact path="/search" component={SearchMovies} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
