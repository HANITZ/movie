import { Star_filled } from "../images/types";
import { IMovie } from "../types/IMovieListRes";


class Movie {
    #target: HTMLElement
    #movie: IMovie
    constructor(target: HTMLElement, movie:IMovie){
        this.#target = target
        this.#movie = movie
        
        this.render()
    }

    render():void{
        this.#target.insertAdjacentHTML("beforeend", this.template())
    }

    template(): string{
        const {poster_path, title, vote_average} = this.#movie
        return `<li>
        <a href="#">
          <div class="item-card">
            <img
              class="item-thumbnail"
              src="http://image.tmdb.org/t/p/w300${poster_path}"
              loading="lazy"
              alt="${title}"
            />
            <p class="item-title">${title}</p>
            <p class="item-score"><img class="img-star" src="${Star_filled}" alt="별점" /> ${vote_average.toFixed(1)}</p>
          </div>
        </a>
      </li>`
    }
}


export default Movie