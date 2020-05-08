import React, { Component } from "react";

export default class Catalog extends Component {
    render() {
        const { id, name, img, detail, adress } = this.props.shop;
        console.log(this.props.shop)
        return (
            <div>
                
            </div>
        );
    }

}