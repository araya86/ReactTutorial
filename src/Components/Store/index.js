import React, { Component } from "react";

export default class Catalog extends Component {
    render() {
        const { id, name, img, detail, adress } = this.props.shop;
        console.log(this.props.shop)
        return (
            <div className="shop">
                          <div className="img-contrainer">
                {/* <h2>{id}</h2> */}
                <img src={img}/> <br></br>
                <span className="close-btn">
                <i className="far fa-window-close"></i>
                </span>
            <div className="shop-info">
            <h3>{name}</h3>
                <p>{detail}</p>
                <p>{adress}</p>
            </div>
            </div>
            </div>
        );
    }

}