import React, { useContext } from "react";
import GifContextProvider from "context/GifsContext";
import Gif from 'components/Gif/Gif'

export default function Detail({ params }){
    // const staticConfig = useContext(Context)
    // console.log(staticConfig)
    
    const {gifs} = useContext(GifContextProvider)

    const gif = gifs.find(singleGif => singleGif.id === params.id)

    return <Gif {...gif} />
}