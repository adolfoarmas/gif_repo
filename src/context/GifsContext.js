import React, { useState } from "react";

{/*Global Context*/}
const Context = React.createContext({})

export function GifContextProvider ({ children }) {
    const [gifs, setGifs] = useState([])

    return <Context.Provider value={{gifs, setGifs}}>
        {/*gifs state sent as Context value parameter*/}
        {children}
    </Context.Provider>
}

export default Context