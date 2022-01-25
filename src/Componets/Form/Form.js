import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const [getoutput, setgetoutput] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
  });
  const handeliput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setgetoutput({ ...getoutput, [name]: value });
  };




  const [newdata, setnewdata] = useState([]);
  
  const output = () => {
    const data = { ...getoutput, id: new Date().getTime().toString() };
    console.log(newdata);
    setnewdata([...newdata, data]);

    setgetoutput({ firstName: "", lastName: "", age: "", address: "" });
  };



  return (
    <>
      <form className="main-container">
        <div className="input-box">
          <label>First Name</label>
          <input
            value={getoutput.firstName}
            name="firstName"
            onChange={handeliput}
            type="text"
          ></input>
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input
            value={getoutput.lastName}
            name="lastName"
            onChange={handeliput}
            type="text"
          ></input>
        </div>
        <hr />
        <div className="age-box">
          <label>Age</label>
          <input
            value={getoutput.age}
            name="age"
            onChange={handeliput}
            type="number"
          ></input>
        </div>
        <hr />
        <div className="textaddress">
          <label>Address</label>
          <textarea
            value={getoutput.address}
            name="address"
            onChange={handeliput}
          ></textarea>
        </div>
        <hr />
        <div className="sub">
          <input
            type="file"
            id="myFile"
            name="filename" /* value={} name="" onChange={} */
          />
          <br />
          <button name="" onClick={output} type="button" className="submitbtn">
            
            Submit
          </button>
        </div>
      </form>

      <div>{newdata.map((e) => {
          return(
            <div>
              <p>{e.firstName}</p>
              <p>{e.lastName}</p>
              <p>{e.age}</p>
              <p>{e.address}</p>
            </div>
          )

      })}</div>
    </>
  );
}
