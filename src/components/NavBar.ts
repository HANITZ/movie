import { Logo } from "../images/types";
import { Component, IComponent } from "./Component";



class NavBar extends Component {

    constructor({target, state}:IComponent) {
        super({target, state})
        
    }




    template() {
        return `<h1><img src="${Logo}" alt="MovieList 로고" /></h1>
        <div class="search-box">
          <input type="text" placeholder="검색" />
          <button class="search-button">검색</button>
        </div>`
    }
}


export default NavBar