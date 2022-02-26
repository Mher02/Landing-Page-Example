import { React } from "react"
import './carusel.scss'

export default function Carusel() {
    return (
        <div className="container-fluid section_sld">
            <div className="row">
                <div className="d-flex slid w-100">
                    <div className="logo">
                    <img src="image/logo.png" alt="logo" />
                    </div>
                    <div className="logo">
                    <img src="/image/logo.png" alt="logo" />
                    </div>
                    <div className="logo">
                    <img src="/image/logo.png" alt="logo" />
                    </div>
                    <div className="logo">
                    <img src="/image/logo.png" alt="logo" />
                    </div>
                    <div className="logo">
                    <img src="/image/logo.png" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}