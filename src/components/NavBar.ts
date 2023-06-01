import { Logo } from "../images/types";
import { Component } from "./Component";



interface IState {
  renderMovieList: (type: string, searchInput?: string) => void
}

class NavBar extends Component {
  #state
  constructor(target:HTMLElement, state:IState) {
    super(target);
    this.#state=state

    this.setEvent();
  }

  setEvent() {
    const searchBox = this.target.querySelector(".search-box") 
    const {renderMovieList} = this.#state
    if (!searchBox) return; 

    searchBox.addEventListener("submit", (event) => {
      event.preventDefault()
      if(!(event.target instanceof HTMLElement)) return
      const input = event.target.querySelector('#search-input') as HTMLInputElement
      if(!input) return;
      const textValue = input.value.trim()
      renderMovieList('search', textValue)
    });
  }

  template() {
    return `<h1><img src="${Logo}" alt="MovieList 로고" /></h1>
        <form class="search-box">
          <input id="search-input"  type="text" placeholder="검색" />
          <button id="search-button" class="search-button">검색</button>
        </form>`;
  }
}

export default NavBar;
