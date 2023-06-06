import { getPopularMovies, getSearchMovies } from "../api/getMovie";
import { Star_filled } from "../images/types";
import { IMovie, IMovieListRes } from "../types/IMovieListRes";
import { $ } from "../utils/selectQueries";
import Movie from "./Movie";
import SkeletonMovieList from "./SkeletonMovieList";

interface IProps{
  type: string;
  searchInput?: string
}


class MovieList {
  #target: HTMLElement
  #page: number
  #type: string
  #searchInput: string
  #skeletonMovieList: SkeletonMovieList | null

    constructor(target: HTMLElement, {type, searchInput}:IProps){
      this.#target = target
      this.#page = 1
      this.#type = type
      this.#searchInput = searchInput || ''
      this.#skeletonMovieList = null

      this.render()
      this.setEvent()
      this.setIntersectionObserver()
    }
    
    async render(){
      this.#target.innerHTML = this.template()
      
      const ul = $('.item-list', this.#target)
      if (!ul) return
      this.#skeletonMovieList = new SkeletonMovieList(ul)

      this.renderTitle()
      this.renderMovieList()
    }

    async renderMovieList(){
      
      const ul = $(".item-list", this.#target)
      const fetchedMovies = await this.fetchMovieList()

      if(!fetchedMovies)return
      if(!ul) return
      if (this.checkSkeleton()){
        this.#skeletonMovieList?.removeSkeleton()
        this.#skeletonMovieList = null
      }


      if(!this.checkMovies(fetchedMovies)){
        const searchInput = this.#searchInput
        this.renderTitle(`"${searchInput}"에 대한 검색결과가 없습니다`)
        return
      }
      const {results, total_pages:totalPage} = fetchedMovies
      
      if (!this.checkLastPage(totalPage)) {
        alert('더 이상 페이지가 존재하지 않습니다.')
        return
      }

      results.forEach((movie:IMovie) => {
        new Movie(ul ,movie)
      })
      this.#page+=1

      this.setIntersectionObserver()
    }

    setIntersectionObserver(){
      const option = {
        threshold: 0.5
      }
      const handleIntersection:IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            this.renderMovieList()
          }
        })
      }
      const intersectionObserver = new IntersectionObserver(handleIntersection,option)
      const ul = $('.item-list', this.#target)
      if(!ul) return

      const lastLi = ul.lastElementChild;
      if(!lastLi) return

      intersectionObserver.observe(lastLi)
    }
    checkSkeleton(){
      return this.#skeletonMovieList instanceof SkeletonMovieList
    }

    checkMovies(movieList:IMovieListRes){
      return !!movieList.results.length
    }
    checkLastPage(totalPage:number):boolean{
      return this.#page < totalPage
    }

    renderTitle(text?:string):void{
      const title = $('.item-title', this.#target)
      if(!title) return
      title.innerText = text || (this.#type === 'popular' ? '지금 인기 있는 영화' : `"${this.#searchInput}" 검색 결과`)
    }
    
    fetchMovieList(){
      try {
        switch (this.#type) {
          case 'popular':
            return getPopularMovies(this.#page)
          case 'search':
            return getSearchMovies(this.#page, this.#searchInput)
  
        }
      }catch(error){
        this.renderTitle('영화 목록 요청을 실패했습니다.')
      }
      
    }

    setEvent(){
      const button = $('.more', this.#target)
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
          <button class="more btn primary full-width">더 보기</button>
        </section>
        `
    }

}


export default MovieList;