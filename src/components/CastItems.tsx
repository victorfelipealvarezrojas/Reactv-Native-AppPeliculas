import React, { Fragment } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import currencyFormatter from 'currency-formatter';
import { Cast } from "../interfaces/creditsInterface";
import { MovieDetails as mdet } from "../interfaces/movieDB";
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    actor: Cast
}

export const CastItems = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (


        <View style={style.container}>

            <Image
                source={{ uri }}
                style={{
                    height: 50,
                    width: 50,
                    borderRadius: 10
                }}
            />
            <View>
                <Text style={{
                    left: 5,
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>
                    {actor.name}
                </Text>

                <Text style={{
                    left: 5,
                    fontSize: 18,
                    opacity: 0.7
                }}>
                    {actor.character}
                </Text>
            </View>

        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor:'white',
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        marginRight:15,
        marginHorizontal:20,
        paddingRight:30,
        height:50,
    },

});