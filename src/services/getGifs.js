import { APIKEY, APIURL } from './settings.js'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)){
      const gifs = data.map(image =>{
          const {images, title, id} = image
          const {url} = images.downsized_medium
          return {title, id, url}
  })
  return gifs
}
return []
}

export default function getGifs({limit = 25, keyword = 'Rick'} = {}){
  const apiURL = `${APIURL}/gifs/search?api_key=${APIKEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`

 
  return fetch(apiURL)
  .then((res) => res.json())
  .then(fromApiResponseToGifs)
}

