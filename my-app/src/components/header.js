import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="headerChild">
                    <div className="logo">
                        <div className="j">J</div>
                        <div className="obby">OBBY</div>
                    </div>
                    <div className="nav"><a className="nav-link" href="#">JOB SEARCH</a></div>
                    <div className="nav"><a className="nav-link" href="#">RESUME SERVICE</a></div>
                    <div className="nav"><a className="nav-link" href="#">BLOG</a></div>
                    <div className="nav"><a className="nav-link" href="#">MORE</a></div>
                  
                </div>
                <div className="avatar"></div>
             
            </div>
        );
    }

}

export default Header;
