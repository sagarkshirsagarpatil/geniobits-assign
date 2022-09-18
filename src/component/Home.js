import React, { useState } from "react";
import Sub from "./sub";
import Create from "./Create";
import './Home.css';
const Home = (props) => {
  const [u, o] = useState("");
  const [w, k] = useState("");
 
  for (var i = 0; i < props.v.length; i++) {
   //this is a condition statment if user will enter the email
   //this method check the email if mail similar to user mail than loop will terminate 
   // and send the data this mail related data to Sub component 
   //and sub component render the all user related detail
    if (u == props.v[i].email) {
      return (
        <Sub
          id={props.v[i].id}
          
          name={props.v[i].name}
          email={props.v[i].email}
          gender={props.v[i].gender}
        />
      );
      } else if (u == "admin") {
         //if user enter admin this method open the newuser create page 
      return <Create />;
    }
  }
  return (
    <div>
      <div className="Home">
         <div className="Home-Child">
            <p>if you create new user please enter "admin"</p>
     <lable>Enter-Email</lable>
     <br/>
        <input
          type="text"
          onChange={(event) => {
            o(event.target.value);
          }}
          value={u}
        ></input>
        </div>
       </div>
    </div>
  );
};
export default Home;
