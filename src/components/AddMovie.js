import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const AddMovie = (props) => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "92vh",
      }}
    >
      <Form style={{ width: "600px" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={props.value.Title}
            onChange={props.handleChange("Title")}
            placeholder="Enter titre"
            name="Title"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            onChange={props.handleChange("Type")}
            value={props.value.Type}
            placeholder="Type"
            name="Type"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            onChange={props.handleChange("Author")}
            placeholder="Author"
            name="Author"
            value={props.value.Author}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            onChange={props.handleChange("Country")}
            placeholder="Country"
            name="Country"
            value={props.value.Country}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            onChange={props.handleChange("Description")}
            placeholder="Description"
            name="Description"
            value={props.value.Description}
          />
        </Form.Group>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className={classes.container}>
            <DatePicker
              selected={props.date}
              onChange={props.handleChangeDate}
            />
          </div>
          <Form.File
            style={{ marginTop: 20 }}
            id="custom-file-translate-scss"
            label="input image"
            lang="en"
            custom
            onChange={props.handleImage}
          />

          <Fab
            onClick={props.handleClick}
            color="primary"
            style={{ marginTop: 20 }}
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </div>
      </Form>
    </div>
  );
};

export default AddMovie;
