import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Container from "./components/Container";
import AddMovie from "./components/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [value, setValue] = useState({
    Title: "",
    Type: "",
    Author: "",
    Country: "",
    Description: "",
  });
  const [list, setList] = useState([]);
  const [image, setImage] = useState({ file: null });
  const [date, setDate] = useState(new Date());
  const [keyValue, setkeyValue] = useState({
    myValue: "",
    keyWord: "",
  });

  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const handleStart = (ratingValue, id) => {
    setList(
      list.map((el, i) => {
        return i === id ? { ...el, Rating: ratingValue } : el;
      })
    );
  };
  const handleHoverStart = (a, id) => {
    setList(
      list.map((el, i) => {
        return i === id ? { ...el, hover: a } : el;
      })
    );
  };
  const handleClick = () => {
    let movie = {
      Title: value.Title,
      Type: value.Type,
      Author: value.Author,
      Country: value.Country,
      Description: value.Description,
      Date: dateMovie,
      Image: image,
      Rating: "",
      hover: "",
    };
    if (
      image.length > 1 &&
      movie.Title !== "" &&
      movie.Type !== "" &&
      movie.Author !== "" &&
      movie.Country !== "" &&
      movie.Description !== ""
    ) {
      setList(list.concat(movie));
    } else {
      alert("compelte informations");
    }
    movie = {
      Title: "",
      Type: "",
      Author: "",
      Country: "",
      Description: "",
    };
    setValue(movie);
    setImage({ file: null });
  };
  const handleChangeDate = (date) => {
    return setDate(date);
  };

  let dateMovie =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <Router>
        <MyNavbar setkeyValue={setkeyValue} keyValue={keyValue} />
        <Switch>
          <Route path="/" exact>
            <Container
              list={list.filter((el) => el.Title.includes(keyValue.keyWord))}
              value={value}
              dateMovie={dateMovie}
              image={image}
              handleStart={handleStart}
              handleHoverStart={handleHoverStart}
            />
          </Route>
          <Route path="/Add">
            <AddMovie
              handleChange={handleChange}
              handleClick={handleClick}
              value={value}
              handleImage={handleImage}
              handleChangeDate={handleChangeDate}
              date={date}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
