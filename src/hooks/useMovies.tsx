import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBResponse } from "../interfaces/movieDB";

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [moviesState, setmoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    });


    const getMovies = async () => {
        const nowPlaying = movieDB.get<MovieDBResponse>('/now_playing');
        const popular = movieDB.get<MovieDBResponse>('/popular');
        const topRated = movieDB.get<MovieDBResponse>('/top_rated');
        const upcoming = movieDB.get<MovieDBResponse>('/upcoming');

        //me permite 
        const respuesta = await Promise.all([
            nowPlaying,
            popular,
            topRated,
            upcoming
        ]);

        setmoviesState({
            nowPlaying: respuesta[0].data.results,
            popular: respuesta[1].data.results,
            topRated: respuesta[2].data.results,
            upcoming: respuesta[3].data.results
        });

        setIsLoading(false)
    }


    useEffect(() => {
        getMovies();
    }, [])

    return {
        ...moviesState,
        isLoading,
    }
}

