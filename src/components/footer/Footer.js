import React from "react";
import "./footer.scss";

export default function Footer() {
    return (
        <div className="container-fluide footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4 footerAbout">
                        <div className="footerMenu">
                            <span>About</span>
                            <p>About US</p>
                            <p>Careers</p>
                        </div>
                        <div className="footerMenu">
                            <span>Support</span>
                            <p>FAQs</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-7 subscribe">
                        <div className="container py-3 min-vh-100 d-flex flex-column">
                            <div className="card shadow rounded-3 my-auto">
                                <div className="card-header p-3 h4">
                                    Contact Us
                                </div>
                                <div>
                                    <form role="form" className="row">
                                        <div className="form-group col-lg-4">
                                            <label className="form-control-label" for="form-group-input">Full Name</label>
                                            <input type="text" className="form-control" id="form-group-input" name="name" />
                                        </div>
                                        <div className="form-group col-lg-4">
                                            <label className="form-control-label" for="form-group-input">Email</label>
                                            <input type="text" className="form-control" id="form-group-input" name="email" />
                                        </div>
                                        <div className="form-group col-lg-4">
                                            <label className="form-control-label" for="form-group-input">Phone</label>
                                            <input type="text" className="form-control" id="form-group-input" name="email" />
                                        </div>
                                        <div class="form-group col-lg-12">
                                            <label className="form-control-label" for="form-group-input">Your Message</label>
                                            <textarea className="form-control" id="form-group-input" name="notes" rows="6"></textarea>
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <button className="float-end mt-2" for="form-group-input">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}