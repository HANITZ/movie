import { popularMoviesUrl } from "../constants/movieUrls"
import { IMovieListRes } from "../types/IMovieListRes";
import fetchUrl from "../utils/fetchUrl"



type TGetPopularMovies = (pageNumber: number)=>Promise<IMovieListRes>
export const getPopularMovies:TGetPopularMovies = async (pageNumber) => {
    const url = `${popularMoviesUrl}?api_key=${process.env.API_KEY}&language=ko&page=${pageNumber}`;

    return await fetchUrl(url)
}