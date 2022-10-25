import React from "react";

export default function Footer(details){
return (<div className="card">
<div className="card-body">
  <blockquote className="blockquote mb-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">{details.name}</cite></footer>
  </blockquote>
</div>
</div>);

}