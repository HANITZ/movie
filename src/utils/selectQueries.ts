

export const $ = (selectorName: string, parentName?: HTMLElement):HTMLElement | null  => {
    if (parentName) return parentName.querySelector(selectorName) 
    return document.querySelector(selectorName) 
}

export const $$ = (selectorName: string, parentName?: HTMLElement):NodeListOf<Element> | null => {
    if(parentName) return parentName.querySelectorAll(selectorName)
    return document.querySelectorAll(selectorName) 
}