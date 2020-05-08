import React, { Component } from "react";

export default class Catalog extends Component {
    render() {
        const { id, name, img, detail, adress } = this.props.shop;
        console.log(this.props.shop)
        return (
            <div>
                {/* <h2>{id}</h2> */}
                <img src={img} width="800px" height="800px"/>
                <h3>{name}</h3>
                <h4>{detail}</h4>
                <h5>{adress}</h5>
            </div>
        );
    }

}