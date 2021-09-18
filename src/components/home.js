import Button from "react-bootstrap/Button";
// import { useHistory } from "react-router-dom";
import React, { Component } from "react";

export default class Home extends Component {

    render() {
        return (
            <div 
                className="home"
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'Morton-Overlook-1.jpg'})`}} 
            >
                <Button 
                    id="GetToKnowMe"
                    variant="danger" 
                    style={{ textAlign: "center", textJustify: "center"}}
                    onClick={() => document.getElementById("AboutLink").click()}
                >
                    Get to know me
                </Button>
            </div>
        )
    }
}