import React from "react";
import './end.scss'

export default function End() {
    return (
        <div className="container-fluide end">
            <div className="container">
                <div className="row  pb-4">
                    <div className="col-12 col-sm-4 icons">
                        <span><a href="#"><i class="fa fa-twitter mr-4" aria-hidden="true"></i></a></span>
                        <span><a href="#"><i class="fa fa-facebook mr-4" aria-hidden="true"></i></a></span>
                        <span><a href="#"><i class="fa fa-linkedin mr-4" aria-hidden="true"></i></a></span>
                        <span><a href="#"><i class="fa fa-instagram mr-4" aria-hidden="true"></i></a></span>
                    </div>
                    <div className="col-12 col-sm-4 d-flex justify-content-between">
                        <span className="text-muted">License Agreement</span>
                        <span className="text-muted">Privace Policy</span>
                    </div>
                    <div className="col-12 col-sm-4">
                        <span className="text-muted d-flex justify-content-end">Developer Mher Janikyan</span>
                    </div>
                </div>
            </div>
        </div>
    )
}