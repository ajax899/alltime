import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//import React from "react";
//import  ReactDOM from "react-dom/client";
//import App from "./App";
/*
import Comp from "./comp2";
import Footer from "./footer";
import Header from "./header";
//import comp2 from "./comp2";
//import footer from "./footer";
//

const details={"name":"CUTM","website":"https://cutm.icloudems.com/","imglink":"https://images2.boardingschoolreview.com/photo/1122x864/1000/593/img-academy-0Kqhnq.jpg","about":"If the backend returned an empty string, your href would be rendered as an empty string too, but that's not an optimal solution. If linkedinHandle doesn't exist for a user, the <a> shouldn't be visible at all, but the empty link is still clickable even though it points nowhere. Additionally, this could throw errors in cases when the property is returned as null or undefined. The accurate solution is using conditional rendering on the <a> itself so either it is rendered along with the appropriate link or the other JSX element is rendered."};
/*const root=ReactDOM.createRoot(document.getElementById('toph'));
root.render(Header(details));
const root2=ReactDOM.createRoot(document.getElementById('comp2'));
root2.render(Comp(details));
const root3=ReactDOM.createRoot(document.getElementById('footer'));
root3.render(Footer(details));
*/
/*
ReactDOM.createRoot(document.getElementById('container')).render(<>
    <Header name={details.name}></Header>
    <Comp imglink={details.imglink} about={details.about} website={details.website}></Comp>
    <Footer name={details.name}></Footer>

</>);*/

//App();