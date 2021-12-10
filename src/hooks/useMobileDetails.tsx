import React, { useEffect, useState } from 'react';
import movieDB from "../api/movieDB";
import { Cast, Credists } from '../interfaces/creditsInterface';
import { MovieDetails } from '../interfaces/movieDB';

export interface IMovieDetails {
    cast: Cast[];
    isLoadin: boolean;
    movieFull?: MovieDetails
}

export const useMobileDetails = (movieId: number): IMovieDetails => {

    const [movieDetails, setMovieDetails] = useState<IMovieDetails>({
        cast: [],
        isLoadin: true,
        movieFull: undefined,
    });

    useEffect(() => {
        getMovieDetails();
    }, [])

    const getMovieDetails = async () => {
        const movieFullPromise = movieDB.get<MovieDetails>(`/${movieId}`);
        const castPromise = movieDB.get<Credists>(`/${movieId}/credits`);

        const [movieFullResp, castRersp] = await Promise.all([movieFullPromise, castPromise]);

        setMovieDetails({
            cast: castRersp.data.cast,
            isLoadin: false,
            movieFull: movieFullResp.data,
        });

    }



    console.log("movieDetails", movieDetails.isLoadin)

    return {
        ...movieDetails
    }
}
