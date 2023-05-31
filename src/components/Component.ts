

export interface IComponent {
    target: HTMLElement
    state: Object
}
export class Component {
    target: HTMLElement
    #state: Object
    constructor({target , state}:IComponent){
        this.target = target
        this.#state = state
        
        this.render()
        // const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
        // this.bindAllMethods(methods)

    }
    // bindAllMethods(methods:any[]):void {
    //     methods.forEach((method:any) => {
    //         if (method !== 'constructor'){
    //             this[method]
    //         }
    //     })
    // }

    render():void{
        this.target.innerHTML = this.template()
    }

    template():string{
        return ''
    }
}

