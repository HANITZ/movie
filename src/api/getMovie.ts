import { popularMoviesUrl, searchMovieUrl } from "../constants/movieUrls"
import { IMovieListRes } from "../types/IMovieListRes";
import fetchUrl from "../utils/fetchUrl"



type TGetPopularMovies = (pageNumber: number)=>Promise<IMovieListRes>
export const getPopularMovies:TGetPopularMovies = async (pageNumber) => {
    const url = `${popularMoviesUrl}?api_key=${process.env.API_KEY}&language=ko&page=${pageNumber}`;

    return await fetchUrl(url)
}

type TGetSearchMovies = (pageNumger: number, searchInput:string)=> Promise<IMovieListRes>
export const getSearchMovies:TGetSearchMovies = async (pageNumber, searchInput) => {
    const url = `${searchMovieUrl}?api_key=${process.env.API_KEY}&query=${searchInput}&language=ko&page=${pageNumber}`
    
    return await fetchUrl(url)
}