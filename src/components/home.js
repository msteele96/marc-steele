import Button from "react-bootstrap/Button";
import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Button variant="outline-primary">Get to know me</Button>

                <img src={process.env.PUBLIC_URL + 'Morton-Overlook-1.jpg'} alt="" />

            </div>
        )
    }
}