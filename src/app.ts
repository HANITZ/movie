


class App {
    #target: HTMLElement

    constructor(selector: HTMLSelectElement){
        this.#target = selector;
        
        this.bindMethod()
        this.render()
        
    }

    bindMethod(){
        
        
        
    }

    render(){
        this.#target.innerHTML = this.template()
    }

    template() {
        return `
        <header></header>
        <main></main>
        `
    }
    
}



export default App;