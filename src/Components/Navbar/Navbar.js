import React, { Component } from "react";

export default class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Food Shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link-home" href="Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link-order" href="Oder">สั่งสินค้า</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link-payment" href="Payment">แจ้งชำระ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link-contact" href="Contact">ติดต่อเรา</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
    }
    