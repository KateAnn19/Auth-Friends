import React, { useState } from "react";

function EditFriendForm({ age, name, email, id, toggleForm, update }) {
  const [formState, setFormState] = useState({
    name: name,
    age: age,
    email: email,
  });

  const formSubmit = (e) => {
    e.preventDefault();
    update({ ...formState }, id);
    toggleForm(false);
    setFormState({
      name: "",
      age: "",
      height: "",
    });
  };

  const inputChange = (e) => {
    //e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };

    setFormState(newFormData);
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="age">
        Age
        <input
          id="age"
          type="number"
          name="age"
          value={formState.age}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          name="email"
          value={formState.email}
          onChange={inputChange}
        />
      </label>
      <button>Submit Updated Friend</button>
    </form>
  );
}

export default EditFriendForm;
