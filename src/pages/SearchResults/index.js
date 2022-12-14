import React from "react";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import LoadingDot from "components/LoadingDot/LoadingDot";
import useGifs from "hooks/useGifs"

export default function SearchResults ({ params }) {
    const { keyword } = params
    const {loading, gifs} = useGifs({ keyword })

    return <>
        {loading ? <LoadingDot /> : <ListOfGifs gifs={gifs} />}
    </>
}