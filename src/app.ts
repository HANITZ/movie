import { Component, IComponent } from "./components/Component";
import NavBar from "./components/NavBar";
import ShowMovies from "./components/ShowMovies";
import { $ } from "./utils/selectQueries";



class App extends Component {


    constructor({target, state}:IComponent){
        super({target, state})

        this.control()
        
    }
    control() {
        new NavBar({target: $('header'), state: {}})
        new ShowMovies({target: $('main'), state: {}})
    }


    template() {
        return `
        <header></header>
        <main></main>
        `
    }
    
}



export default App;