import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { FaStar } from "react-icons/fa";

import "../css/Card.css";

const ImgMediaCard = ({ data, handleStart, hover, id, handleHoverStart }) => {
  return (
    <Card className="cardContainer">
      <CardActionArea
        className="cardActionArea"
        style={{ textAlign: "center" }}
      >
        <CardMedia
          className="image"
          component="img"
          height="200"
          image={data.Image}
        />
        <h3 className="titre">{data.Title}</h3>
        <CardContent className="data">
          {`Type: ${data.Type} `}
          <br />
          {`Date: ${data.Date} `}
          <br />
          {`Country: ${data.Country} `}
          <br />
          {`Author: ${data.Author} `}
          <br />
          {`Description: ${data.Description} `}
        </CardContent>
        {[...Array(5)].map((start, i) => {
          let ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                className="radio"
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleStart(ratingValue, id)}
              />
              <FaStar
                className="star"
                color={
                  ratingValue <= (data.Rating || data.hover)
                    ? "#ffc107"
                    : "#e4e5e9"
                }
                size={30}
                onMouseEnter={() => handleHoverStart(ratingValue, id)}
                onMouseLeave={() => handleHoverStart(null, id)}
              />
            </label>
          );
        })}
      </CardActionArea>
    </Card>
  );
};
export default ImgMediaCard;
