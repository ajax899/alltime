import { Button } from "@material-ui/core";
import { createRoot } from "react-dom/client";

function Class(props){
    return (<Button className={'btn-'+props.size}></Button>);
}
//const root=document.querySelector("")
export default Class;