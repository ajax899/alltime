import React from 'react';


function Button(props){
 // const {size,text}=props;
//  const size=props.size;
  /*let className="btn-medium";
  if(size==="small"){
    className="btn-small";
  }else if(size==="large"){
    className="btn-large";
  }*/
  return <button className={props.className}>{props.children}</button>;
}

export default Button;