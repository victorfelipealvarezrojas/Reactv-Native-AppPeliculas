import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Movie } from '../interfaces/movieDB';

interface props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: props) => {

    const { title, backdrop_path } = movie;

    //imagen
    const uri = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={
                () => navigation.navigate('details', movie)
            }
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
            }}>
            <View style={style.card}>
                <Image
                    source={{
                        uri
                    }}
                    style={{
                        ...style.image
                    }}
                />
            </View>


        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
       
    },
    card: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        borderRadius: 18,
        elevation: 9,
    }
});