import { Logo } from "../images/types";
import { Component, IComponent } from "./Component";

class NavBar extends Component {
  constructor({ target, state }: IComponent) {
    super({ target, state });

    this.setEvent();
  }

  setEvent() {
    const searchBox = this.target.querySelector(".search-box") 

    if (!searchBox) return; 

    searchBox.addEventListener("submit", (event) => {
      event.preventDefault()
      if(!(event.target instanceof HTMLElement)) return
      const input = event.target.querySelector('#search-input') as HTMLInputElement
      if(!input) return;
      console.log(input.value)
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
