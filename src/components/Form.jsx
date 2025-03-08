import { useState } from "react";
import React from "react";

const Form = () => {
  const [person, setPerson] = useState({
    fName: "",
    lName: "",
    age: 0,
    gender: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(person);
  }

  return (
    <div>
      <h1>Information Form</h1>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          onChange={(e) => setPerson({ ...person, fName: e.target.value })}
          value={person.fName}
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          onChange={(e) => setPerson({ ...person, lName: e.target.value })}
          value={person.lName}
        />
        <br />
        <label>Age:</label>
        <input
          type="number"
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
          value={person.age}
        />
        <br />
        <label>Gender ( M/F):</label>
        <input
          type="text"
          onChange={(e) => setPerson({ ...person, gender: e.target.value })}
          value={person.gender}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
          value={person.email}
        />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
