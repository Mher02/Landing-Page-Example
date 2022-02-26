import React from "react";
import "./head.scss"

export default function Head(){
    return(
        <div className="container-fluid">
            <div className="row head">
                <div className="col-12 col-sm-6 mt-5 headTitle">
                    <h1>Lorem Ipsum</h1>
                    <span>is simply dummy text of the printing </span>
                    <span>and typesetting industry. Lorem Ipsum </span>
                    <button>Learn More</button>
                </div>    
                <div className="col-12 col-sm-6 mt-5 head_img_section">
                    <div className="head_img">
                        <img src="image/test_img.png" alt="logo" />
                    </div>
                </div>    
            </div>  
        </div>
    )
}