import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div className="allFooter">
                <div className="white"></div>
                <div className="footer">
                    <div className="container-fluid" >
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 ">
                                <div className="foo"><a className="footer-link" href="#">Home</a></div>
                                <div className="foo"><a className="footer-link" href="#">All Jobs</a></div>
                                <div className="foo"><a className="footer-link" href="#">About Us</a></div>
                                <div className="foo"><a className="footer-link" href="#">Contact Us</a></div>
                            </div>


                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 ">
                                <div className="foo"><a className="footer-link" href="#">Privacy Policy</a></div>
                                <div className="foo"><a className="footer-link" href="#">Terms & Conditions</a></div>
                                <div className="foo"><a className="footer-link" href="#">Complaints</a></div>
                                <div className="foo"><a className="footer-link" href="#">FAQ</a></div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 ">
                                <div className="foo"><a className="footer-link" href="#">Home</a></div>
                                <div className="foo"><a className="footer-link" href="#">All Jobs</a></div>
                                <div className="foo"><a className="footer-link" href="#">About Us</a></div>
                                <div className="foo"><a className="footer-link" href="#">Contact Us</a></div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 ">
                                <div className="foo"><a className="footer-link" href="#">Copyright Codelynx 2017</a></div>
                                <div className="foo"><a className="footer-link" href="#">Tax code: 0123456789</a></div>
                                <div className="foo"><a className="footer-link" href="#">Phone: 09898989898</a></div>
                                <div className="foo"><a className="footer-link" href="#">Address: 5A/2 Tran Phu Q5, HCMC</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Footer;
