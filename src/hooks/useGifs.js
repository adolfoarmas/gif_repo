import {useContext, useEffect, useState} from "react";
import getGifs from "services/getGifs";
import Context from "context/GifsContext";

export default function useGifs ({ keyword } = {keyword: null}){
    const [loading, setLoading] = useState(false)
    //using global GifsContext
    const {gifs, setGifs} = useContext(Context)
    //const [gifs, setGifs] = useState([])

    useEffect(function(){
        
        setLoading(true)

        const lastKeyword = keyword || 
        localStorage.getItem('lastKeyword') || 
        'Rick'

        getGifs({ keyword: lastKeyword })
            .then(gifs =>{
                setGifs(gifs); {/*Context gifs*/}
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs])

    return {loading, gifs}
}


 