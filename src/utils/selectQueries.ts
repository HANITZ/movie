

export const $ = (selectorName: string):HTMLElement | null => {
    return document.querySelector(selectorName)
}

export const $$ = (selectorName: string):NodeListOf<Element> | null => document.querySelectorAll(selectorName) 