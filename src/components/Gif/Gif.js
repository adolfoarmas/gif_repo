import React from "react";
import { Link } from "wouter";
import './Gif.css'

export default function Gif( {title, id, url} ){ 
        return (
        
        <div className='Gif'>
            <div className="Gif-buttons">
            </div> 
                <Link to={`/gif/${id}`} className='Gif-link'>
                    <h4>{title}</h4>
                    <small>{id}</small>
                    <img alt={title} src={url} />
                </Link>
                  
        </div>
    
    )  
}