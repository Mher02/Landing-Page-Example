import React from "react"
import "./built.scss"

export default function Built({cRef}) {

    return (
        <div ref={cRef} className="pt-5 pb-5 whatis">
            <h1 className="text-center">Bulit For</h1>
            <div className="container">
                <div className="row section">
                    <div className="logo">
                        <img src="../../../public/image/logo.png" alt="logo" />
                    </div>
                    <div className="logo">
                    <img src="../../../public/image/logo.png" alt="logo" />
                    </div>
                    <div className="logo">
                    <img src="../../../public/image/logo.png" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}