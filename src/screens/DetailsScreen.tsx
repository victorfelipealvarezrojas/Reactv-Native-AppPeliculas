import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Dimensions, Image, StyleSheet, Text, View, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieDB';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMovieDetails, useMobileDetails } from '../hooks/useMobileDetails';
import { MovieDetailsComponents } from '../components/MovieDetails';


const dimensionsHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'details'> { };

export const Details = ({ route,navigation }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { cast, isLoadin, movieFull } = useMobileDetails(movie.id);



  return (
    <ScrollView>
      <View style={style.imagecontainer}>
        <View style={style.imageborder}>
          <Image
            source={{
              uri
            }}
            style={
              style.posterimage
            }
          />
        </View>
      </View>
      <View>
        <View style={style.marginContainer}>
          <Text style={style.Title}>{movie.original_title}</Text>
          <Text style={style.sutT}>{movie.title}</Text>
        </View>
        {isLoadin &&
          <ActivityIndicator
            size={35}
            color="grey"
            style={{
              marginTop: 50
            }}
          />

        }
        {
          !isLoadin &&
          <MovieDetailsComponents
            details={movieFull!}
            cast={cast}
          />
        }
      </View>

      <TouchableOpacity
        onPress={
          () => navigation.pop()
        }
        style={
          style.backBotton
        }>
        <Icon
          color='white'
          name='arrow-back-outline'
          size={100}
          style={{
            opacity: 0.5
          }}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  imageborder: {
    flex: 1,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,

  },
  imagecontainer: {
    width: '100%',
    height: dimensionsHeight * 0.6,

    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  posterimage: {
    flex: 1,

  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  sutT: {
    fontSize: 16,

  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backBotton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: -4,
    left: -4,
    opacity: 0.5
  }
});