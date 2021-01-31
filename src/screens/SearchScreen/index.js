import React, {Component} from 'react';
import {Container, Row, Col} from '../../components/Grid';

class SearchMovies extends Component {
  // Creates state
  state = {
    search: '',
    movies: [],
    error: '',
    message: '',
  };

  render() {
    return (
      <Container fluid>
        <h1>Search Movies</h1>
      </Container>
    );
  }
}

export default SearchMovies;
