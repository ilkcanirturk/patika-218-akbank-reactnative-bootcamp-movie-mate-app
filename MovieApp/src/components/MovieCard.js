import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {ThemeContext} from '../context/theme';

//For shown Movie pictures with URL
const getPosterURL = posterpath => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
};
//Show movie list.
const MovieCard = ({poster_path, title, release_date, vote_average}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={{width: 400, height: 300, flexDirection: 'column'}}>
      <View>
        <Image
          source={{uri: getPosterURL(poster_path)}}
          style={styles.posterStyle}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.titleStyle, {color: theme.color}]}>{title}</Text>
        <Text style={[styles.dateStyle, {color: theme.color}]}>
          {release_date}
        </Text>
        <View>
          <EvilIcons name="star" size={88} style={styles.iconStyle} />
          <Text style={[styles.voteText, {color: theme.color}]}>
            {vote_average}
          </Text>
        </View>
      </View>
      <View style={styles.bottomLine}/>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '600',
  },
  dateStyle: {
    fontSize: 14,
    alignSelf: 'center',
  },
  infoContainer: {
    width: 350,
    height: 50,
    backgroundColor: '#ffc107',
    borderRadius: 15,
    alignSelf: 'center',
  },
  posterStyle: {
    height: 225,
    width: 200,
    backgroundColor: 'gray',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 5,
    resizeMode: 'cover'
  },
  voteText: {
    position: 'absolute',
    fontSize: 15,
    borderRadius: 15,
    marginLeft: 25,
    marginTop: -85,
  },
  iconStyle: {
    position: 'absolute',
    marginTop: -110,
    marginLeft: -10,
    color: '#ffc107',
  },
  bottomLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 5,
  },
});
