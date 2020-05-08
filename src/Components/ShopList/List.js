import React, { Component } from "react";
import Store from "../Store";
import { shopdata } from "../../data.js";
export default class ShopList extends Component {
    state = {
        shops: shopdata
    }
    render() {
        const { shops } = this.state;
        return (
            <div className="ShopList">
                {shops.map(shop =>
                    <Store key={shop.id} shop={shop} />
                )}
            </div>
        );
    }

}