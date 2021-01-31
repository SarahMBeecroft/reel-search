import React, {useState, useEffect} from 'react';
import MovieList from '../../components/MovieList';
import MovieHeader from '../../components/MovieHeader';
import SearchBox from '../../components/SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const OMDB_API_KEY = process.env.REACT_APP_API_KEY;

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${OMDB_API_KEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeader heading="Search for movies:" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default SearchMovies;
