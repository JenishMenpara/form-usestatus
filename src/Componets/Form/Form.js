import React, { useState, useRef } from "react";
import "./form.css";

export default function Form() {
  const [first, setfirst] = useState(true);
  const [getoutput, setgetoutput] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    photo: "",
  });
  const handeliput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setgetoutput({ ...getoutput, [name]: value });
    validation(name, value);
    
  /*   let files = e.target.files;
    let reader= new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (r) =>{
      //console.log("imgae", r.target.result)
      setgetoutput({...getoutput,photo: r.target.result})
    } */ 
    setgetoutput({...getoutput,photo: e.target.files[0]})
    
  };

  const inputref = useRef("");

  const [newdata, setnewdata] = useState([]);
  const output = () => {
    const data = { ...getoutput };
    console.log(newdata);
    setnewdata([...newdata, data]);
    setgetoutput({ firstName: "", lastName: "", age: "", address: "" });
    setfirst(!first)
    //setimage()
  };

  const [firstnameE, setFirstnameE] = useState("");
  const [lastnameE, setLastnameE] = useState("");
  const [ageE, setAgeE] = useState("");
  const [addressE, setAddressE] = useState("");

  const validation = (name, value) => {
    switch (name) {
      case "firstName":
        let a = /^[A-Za-z]{0,20}$/.test(value)
          ? ""
          : "use charcater and max 20 charcater use";
        setFirstnameE(a);
        break;

      case "lastName":
        let c = /^[A-Za-z]{0,20}$/.test(value)
          ? ""
          : "use charcater and max 20 charcater use";
        setLastnameE(c);
        break;

      case "age":
        setAgeE(
          value >= 10 && value <= 100 ? "" : "minimum 10 and max 100 year"
        );
        break;

      case "address":
        let x = value.length <= 35 ? "" : "only charcater allowed 35";
        setAddressE(x);
        break;
    }
  };

  return (
    <>
    {first && ( <form className="main-container">
        <div className="input-box">
          <label>First Name</label>
          <input
            value={getoutput.firstName}
            name="firstName"
            onChange={handeliput}
            type="text"
          ></input>
          <p>{firstnameE}</p>
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input
            value={getoutput.lastName}
            name="lastName"
            onChange={handeliput}
            type="text"
          ></input>
          <p>{lastnameE}</p>
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
          <p>{ageE}</p>
        </div>
        <hr />
        <div className="textaddress">
          <label>Address</label>
          <textarea
            value={getoutput.address}
            name="address"
            onChange={handeliput}
          ></textarea>
          <p>{addressE}</p>
        </div>
        <hr />
        <div className="sub">
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            // onChange={handeliput}
            onChange={handeliput}
            ref={inputref}
          />
          <br />
          <button name="" onClick={output} type="button" className="submitbtn">
            Submit
          </button>
        </div>
      </form>)}
     

      <div>
        {newdata.map((e) => {
          return (
            <div className="card">
              <p className="photo">
                <img  src={URL.createObjectURL(e.photo)}></img>
              </p>
              <p className="firsname">
                {e.firstName} {e.lastName}
              </p>
              <p className="age">
                {e.age} {"year old"}
              </p>
              <p className="address">{e.address}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
