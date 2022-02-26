import React from "react";
import "./results.scss"

export default function Results() {
    return (
        <div className="container-fluid results">
            <div className="row h-100 ">
                <div className="col-12 pb-4">
                    <h1 className="text-center">Our Results</h1>
                </div>
                <div className="col-12 col-sm-4">
                    <h2 className="text-center">10<span>x</span></h2>
                    <p className="text-center">lorem ipsum</p>
                </div>
                <div className="col-12 col-sm-4">
                    <h2 className="text-center">200<span>%</span></h2>
                    <p className="text-center">lorem ipsum</p>
                </div>
                <div className="col-12 col-sm-4">
                    <h2 className="text-center">5,000<span>+</span></h2>
                    <p className="text-center">lorem ipsum</p>
                </div>
            </div>
        </div>
    )
}