import React from "react"

import "./about.scss"

export default function About({sectionRef}) {
    return (
        <div className="container" ref={sectionRef}>
            <div className="row about">
                <div className="col-12 col-sm-6 section1">
                    <h1>Lorem Ipsum</h1>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing </p>
                        <p> and typesetting industry. Lorem Ipsum has been</p>
                    </div>
                    <div>
                        <p> the industry's standard dummy text ever since the </p>
                        <p>1500s, when an unknown printer took a galley of </p>
                    </div>
                    <div>
                        <p> type and scrambled it to make a type specimen</p>
                        <p> book. It has survived not only five centuries,</p>
                    </div>
                    <button>More About the Product</button>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="section2">
                        <h3>Lorem Ipsum</h3>
                        <div >
                            <p>Lorem Ipsum is simply dummy text of the printing </p>
                            <p> and typesetting industry. Lorem Ipsum has been</p>
                        </div>
                        <div>
                            <p> the industry's standard dummy text ever since the </p>
                            <p>1500s, when an unknown printer took a galley of </p>
                        </div>
                        <div>
                            <p> type and scrambled it to make a type specimen</p>
                            <p> book. It has survived not only five centuries,</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}