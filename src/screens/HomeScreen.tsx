import React, { useContext } from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Dimensions, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { Loading } from './../loadingApp';
import { MoviePoster } from './../components/MoviePoster';
import { HorizontalSlider } from './../components/HorizontalSlider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GradientBack } from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';


interface ImageColor {
    primary: string | undefined;
    secondary: string | undefined;
}

//obtengo el width de el dispositivo
const { width } = Dimensions.get('window');

export const Home = () => {
    const { setMainColors } = useContext(GradientContext);
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

    const { top } = useSafeAreaInsets();

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
        setMainColors({ primary, secondary });
    }

    useEffect(() => {
        if (nowPlaying.length > 0){
            getPosterColors(0);
        }
    }, [nowPlaying])

    return (
        isLoading
            ? <Loading />
            : <GradientBack>
                <ScrollView>
                    <View style={{
                        marginTop: top + 20
                    }}
                    >
                        <View style={{
                            height: 445,
                        }} >
                            <Carousel
                                data={nowPlaying}
                                renderItem={({ item }: any) => <MoviePoster movie={item} />}
                                sliderWidth={width}
                                itemWidth={300}
                                inactiveSlideOpacity={1}
                                onSnapToItem={index => getPosterColors(index)}
                            />
                        </View>

                        <HorizontalSlider title={"Populares"} movies={popular} />
                        <HorizontalSlider title={"Mejor valorado"} movies={topRated} />
                        <HorizontalSlider title={"Próximamente"} movies={upcoming} />

                    </View>
                </ScrollView>
            </GradientBack>
    );
};