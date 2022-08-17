import React, {useState} from "react";
import { useLocation } from "wouter"
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches"
import "./styles.css"


export default function Home() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation() //Navigating without using link o jsx instruction (Use history when using React Router)
    const {loading, gifs} = useGifs({ keyword })
    
    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return(
        <>
        <h1 className="App-title">Gif Search Application</h1>
        <form className="searchForm" onSubmit={handleSubmit}>
            <input className="searchInput" placeholder='Search your gifs here...' onChange={handleChange} type='text' value={keyword} />
            <button className="searchButton">Search</button>
        </form>
        <h3>Your last search</h3>
        <ListOfGifs gifs={gifs} />
        <TrendingSearches />
        </>
    
    )
}