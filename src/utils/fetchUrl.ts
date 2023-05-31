

type TFetchUrl = <T>(url:string) => Promise<T>

const fetchUrl:TFetchUrl = async (url) => {
    const response = await fetch(url)
    if (response.status !== 200) throw new Error()
    
    return response.json();
}


export default fetchUrl;