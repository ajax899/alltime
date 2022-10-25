import React, { useState } from "react";
//import swal from "sweetalert";
import { makeStyles } from "@material-ui/core";
//import ReactDOM from "react-dom/client";

//import "./styles.css";

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });
  

async function loginUser(c){
return fetch('http://localhost:8080/api/auth/signin',{
  method:'post',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(c)
}).then(data=>data.json())
}

  // User Login info
/*  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
*/
export default function Signin(){
    const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    //Prevent page reload
    e.preventDefault();
    const response=await loginUser({
      username,password   });

      if('accessToken' in response){
       // swal("Success",response.message,"success",{
          //buttons:false,
          //timer:2000,
       // })
       // .then((value)=>{
          localStorage.setItem('accessToken',response['accessToken']);
          localStorage.setItem('user',response['username']);
          window.location.href="/profile";
          alert("successfully");
      //  };
      }


    
  }
  return(
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" onChange={e => setUserName(e.target.value)} required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)} required />
        </div>
        <div className="button-container">
          <input className={classes.root} type="submit" />
        </div>
      </form>
    </div>

  );
}
