import { Component } from "react";

class Auth {
    constructor() {
        this.aunthenticated = false;
    }

    login(cb) {
        this.aunthenticated = true;
        cb()
    }
    
    isAuthenticated() {
        return this.aunthenticated;
    }
}
export default new Auth();