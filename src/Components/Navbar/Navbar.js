import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Food Shop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">สั่งสินค้า</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">แจ้งชำระ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">ติดต่อเรา</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}