import React, {useState} from "react";
import "./FriendsList.css";
import EditFriendForm from './EditFriendForm';

function Friend({ remove, id, name, age, email, update}) {
    const[toggle, setToggle] = useState(false);
 const toggleState = () => {
    setToggle(!toggle)
};
  return (
    <div className="Friends-List">
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{email}</h2>
      <button onClick={() => remove(id)}>Delete Friend</button>
      <button onClick={toggleState}>Edit</button>
      {toggle ? <EditFriendForm id={id} toggleForm={toggleState} update={update} id={id} name={name} age={age} email={email}/>: null}
    </div>
  );
}

export default Friend;
