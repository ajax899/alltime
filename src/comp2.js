import React from "react";

export default function Comp(details){
    return (
        <div>
            <div className="row">
        <div className="col-md-4">
            <div className="imgAbt">
                <img alt={details.name} width="250px" height="250px" src={details.imglink} />
            </div>
        </div>
        <div className="col-md-8">
            <p>{details.about}</p>
            <a href={details.website} className="btn btn-primary">Login</a>
        </div>

    </div>

        </div>
    )
}