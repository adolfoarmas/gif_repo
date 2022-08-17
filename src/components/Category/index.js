import React from "react";
import { Link } from "wouter";
import "./styles.css"
// import "./Category.css";

export default function Category({ name, options = [] }) {
    console.log(name)
    console.log(options)
  return (
    
    <section>
      <h4>{decodeURI(name)}</h4>
      <ul>
      
      {options.map((singleOption, index) => (
        // <li key={singleOption.id}>
        <Link className="categoryLink" to={`/search/${singleOption}`}>{singleOption}</Link>
        // </li>
        
      ))}
      </ul>
    </section> );
}