

export class Component {
    target: HTMLElement
    constructor(target:HTMLElement){
        this.target = target

        
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

    render(movies?:any):void{
        this.target.innerHTML = this.template()
    }

    template():string{
        return ''
    }
}

