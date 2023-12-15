import React from "react";

export default function Card( {title, explanation, imageURL, date} ) {
    console.log(title);
    return (
      <div className="card">
      <h2>{title}</h2>
      <figure>
        <p>{explanation}</p>
        <img src={imageURL} />
        <figcaption>Image taken on {date}.</figcaption>
      </figure>
      </div>
    );
};