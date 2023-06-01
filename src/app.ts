import { Component, IComponent } from "./components/Component";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { $ } from "./utils/selectQueries";

class App extends Component {
  constructor({ target, state }: IComponent) {
    super({ target, state });

    this.mount();
  }

  renderMovieList(type:string, searchInput?:string) {
    const main = $("main", this.target);
    if(!main) return

    new MovieList(main, {type, searchInput});

  }

  mount() {
    
    const header = $("header", this.target);
    if (!header) return;
    new NavBar({ target: header, state: {} });

    this.renderMovieList("popular")
    
  }

  template() {
    return `
        <header></header>
        <main></main>
        `;
  }
}

export default App;
