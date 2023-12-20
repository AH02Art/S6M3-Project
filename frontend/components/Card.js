import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  h2 {
    display: flex;
    justify-content: center;
    margin: 10px;
    font-size: 30px;
    color: #040093;
  }
  figure {
    border: 1px solid grey;
    align-content: center;

    img {
      display: block;
      margin: auto;
      width: 25%;

      &:hover {
        width: 50%;
      }
    }
    figcaption {
      font-size: 10px;
    }
  }
  p {
    color: #040093;
    display: block
    margin: auto;
    padding: 10px;
  }
`;


export default function Card( {title, explanation, imageURL, date} ) {
    console.log(title);
    return (
      <StyledCard className="card">
      <h2>{title}</h2>
      <figure>
        <img src={imageURL} />
        <figcaption>Image taken on {date}.</figcaption>
      </figure>
      <p>{explanation}</p>
      </StyledCard>
    );
};