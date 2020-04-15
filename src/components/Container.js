import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImgMediaCard from "./ImgMediaCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(50),
      height: theme.spacing(55),
    },
  },
}));

const Container = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.list.map((el, i) => {
        return (
          <ImgMediaCard
            data={el}
            key={i}
            id={i}
            value={props.value}
            rating={props.rating}
            handleStart={props.handleStart}
            handleHoverStart={props.handleHoverStart}
          />
        );
      })}
    </div>
  );
};
export default Container;
