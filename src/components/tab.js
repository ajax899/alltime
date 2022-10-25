import React, { useState } from "react";
import Login from "./login";
import Signup from "./signup";
const Tabs=()=>{
    const {activeTab,setActiveTab}=useState("tab1");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
      };
    return (<div className="Tabs">
    {/* Tab nav*/ }
    <ul className="nav">
    <li className={activeTab==="tab1"?"active":""} onClick={handleTab1}>Tab1</li>
    <li className={activeTab==="tab1"?"active":""}  onClick={handleTab2}>Tab2</li>
    </ul>
    <div className="outlet">
    {activeTab==="tab1"?<Login/>:<Signup/>};
    
    </div>

    </div>);
};
export default Tabs;