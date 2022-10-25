import React from "react";
export class Bike extends React.Component{
constructor(props){
    super(props);
    this.state={
        make:"Yamaha",
        model:"R15",
        color:"blue",
        
    };}

    changeBikeColor=()=>{
        this.setState({color:"black"});

    }
    render(){
        return(
            <div>
                <h2>my {this.state.make}</h2>
                <p>{this.state.model } - {this.state.color}</p>
                <button type="button" onClick={this.changeBikeColor}>change</button>
            </div>
        );
    }

}