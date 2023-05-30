

export const $ = (selectorName: string):HTMLElement  => {
    return document.querySelector(selectorName) as HTMLElement
}

export const $$ = (selectorName: string):NodeListOf<Element> | null => document.querySelectorAll(selectorName) 