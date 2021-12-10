import React, { Fragment } from "react";
import { View, Text, FlatList } from "react-native";
import currencyFormatter from 'currency-formatter';
import { Cast } from "../interfaces/creditsInterface";
import { MovieDetails as mdet } from "../interfaces/movieDB";
import Icon from 'react-native-vector-icons/Ionicons'
import { CastItems } from "./CastItems";

interface Props {
    details: mdet;
    cast: Cast[]
}

export const MovieDetailsComponents = ({ details, cast }: Props) => {

    return (
        <Fragment>
            <View style={{
                marginHorizontal: 20
            }}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Icon
                        name='star-outline'
                        color="grey"
                        size={16}
                    />
                    <Text>{details.vote_average}</Text>
                    <Text style={{
                        left: 5
                    }}>
                        -{details.genres.map(genero => genero.name).join(', ')}
                    </Text>
                </View>
                <Text style={{
                    fontSize: 23,
                    marginTop: 10,
                    fontWeight: 'bold'
                }}>Historia</Text>
                <Text style={{
                    fontSize: 16,
                }}>{details.overview}</Text>
                <Text style={{
                    fontSize: 23,
                    marginTop: 10,
                    fontWeight: 'bold'
                }}>Presupuesto</Text>
                <Text style={{
                    fontSize: 18,
                }}>
                    {
                        currencyFormatter.format(details.budget, { code: 'USD' })
                    }
                </Text>
                <View style={{
                    marginTop: 10,
                    marginBottom: 100,
                }} >
                    <Text style={{
                        fontSize: 23,
                        marginTop: 10,
                        fontWeight: 'bold',
                    }}>Elenco</Text>
                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CastItems actor={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator= {false}
                        style={{
                            marginTop:10,
                            height:70,
                        }}
                    />
                </View>

            </View>
        </Fragment>
    )
}