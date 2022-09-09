import { View, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {ThemeContext} from '../context/theme';
import MovieCard from '../components/MovieCard';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);

  const {theme} = useContext(ThemeContext);
  //GET request from API with axios.
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=e20b8646d40548ed22a91e98df4e5b52&language=en-US&page=1',
      )
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <ScrollView>
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        {movies.map((movie, index) => {
          return <MovieCard key={index} {...movie} />;
        })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;


