import { Component, IComponent } from "./components/Component";
import NavBar from "./components/NavBar";
import { $ } from "./utils/selectQueries";



class App extends Component {


    constructor({target, state}:IComponent){
        super({target, state})

        this.control()
        
    }
    control() {
        new NavBar({target: $('header'), state: {}})
    }


    template() {
        return `
        <header></header>
        <main></main>
        `
    }
    
}



export default App;