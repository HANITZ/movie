import { getPopularMovies, getSearchMovies } from "../api/getMovie";
import { Star_filled } from "../images/types";
import { IMovie, IMovieListRes } from "../types/IMovieListRes";
import { $ } from "../utils/selectQueries";
import Movie from "./Movie";

interface IProps{
  type: string;
  searchInput?: string
}


class MovieList {
  #target: HTMLElement
  #page: number
  #type: string
  #searchInput?: string

    constructor(target: HTMLElement, {type, searchInput}:IProps){
      this.#target = target
      this.#page = 1
      this.#type = type
      if(searchInput){
        this.#searchInput = searchInput
      }

      this.render()
      this.setEvent()
    }
    
    async render(){
      this.#target.innerHTML = this.template()
      

      

      this.renderTitle()
      this.renderMovieList()
      
    }

    async renderMovieList(){
      const ul = $(".item-list", this.#target)
      const fetchedMovies = await this.fetchMovieList()
      if(!fetchedMovies)return
      if(!ul) return

      const movies = fetchedMovies.results
      movies.forEach((movie:IMovie) => {
        new Movie(ul ,movie)
      })
      this.#page+=1
    }

    renderTitle(){
      const title = $('.item-title', this.#target)
      if(!title) return
      title.innerText = this.#type === 'popular' ? '지금 인기 있는 영화' : `${this.#searchInput} 검색 결과`
    }

    fetchMovieList(){
      switch (this.#type) {
        case 'popular':
          return getPopularMovies(this.#page)
        case 'search':
          if(!this.#searchInput) return
          return getSearchMovies(this.#page, this.#searchInput)

      }
    }

    setEvent(){
      const button = $('button', this.#target)
      if(!button) return
      button.addEventListener('click', ()=>{
        this.renderMovieList()
      })
    }

    template() {
        return `
        <section class="item-view">
          <h2 class="item-title"></h2>
          <ul class="item-list">
          </ul>
          <button class="btn primary full-width">더 보기</button>
        </section>
        `
    }

}


export default MovieList;