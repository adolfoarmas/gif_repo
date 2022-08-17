import React, {useEffect, useRef, useState} from "react";
import getTrendingTerms from "services/getTrendingTerms";
import Category from "components/Category";

function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category name='Trending' options={trends} />
}

export default function LazyTrending() {
    const [show, setShow] = useState(false)
    const elementRef = useRef()

    useEffect(function(){
        const onchange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onchange, {
            rootMargin: '100px'

        })

        observer.observe(elementRef.current)
    })

    return <div ref={elementRef}>
        {show ? <TrendingSearches /> : null}
    </div>
}