import React, { useState } from "react";
//import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { v4 as uuidv4 } from "uuid";
import "./FriendForm.css";

import { addFriend } from "../actions/index";

function FriendsForm({ list, addFriend }) {
  const { register, handleSubmit, watch, errors } = useForm();
  // managing state for our form inputs ---controlling inputs
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    email: "",
  });

  const formSubmit = (e) => {
    //e.preventDefault();
    addFriend(formState);
    setFormState({
      name: "",
      age: "",
      email: "",
    });
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };

    setFormState(newFormData);
  };

  return (
    <form className="Friend-Form" onSubmit={handleSubmit(formSubmit)}>
      <label htmlFor="name">
        Name
        <input
          // variant="filled"
          // error
          // helperText="Enter Name"
          // required
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
          // ref={register({ required: true, maxLength: 20 })}
        />
        {/* {errors.name && <span> This field is required </span>} */}
      </label>
      <label htmlFor="age">
        Age
        <input
          // variant="filled"
          // required
          id="age"
          type="number"
          name="age"
          value={formState.age}
          onChange={inputChange}
          // ref={register({ required: true, maxLength: 20 })}
        />
        {/* {errors.age && <span> This field is required </span>} */}
      </label>
      <label htmlFor="email">
        Email
        <input
          // variant="filled"
          // required
          id="email"
          type="text"
          name="email"
          value={formState.email}
          onChange={inputChange}
          // ref={register({ required: true, maxLength: 20 })}
        />
        {/* {errors.email && <span> This field is required </span>} */}
      </label>

      <button>Submit</button>
    </form>
  );
}

export default FriendsForm;
