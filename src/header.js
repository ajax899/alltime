import React from "react";

export default function Header(details){
    return (
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Centurion_University_of_Technology_and_Management_Logo.svg/800px-Centurion_University_of_Technology_and_Management_Logo.svg.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
    {details.name}
  </a>
</nav>);
}