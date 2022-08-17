import { APIKEY, APIURL } from './settings.js'

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    return data
}

export default function getTrendingTerms(){
    const apiURL = `${APIURL}/trending/searches?api_key=${APIKEY}`
   
    return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

