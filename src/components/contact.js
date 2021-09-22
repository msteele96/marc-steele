import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
        <>
            <h2>Linkedin: <a target={"_blank"} rel={"noreferrer"} href={"https://www.linkedin.com/in/msteele96/"}>msteele96</a></h2>
            <h2>Github: <a target={"_blank"} rel={"noreferrer"} href={"https://github.com/msteele96"}>msteele96</a></h2>
            <h2>Email: <a href={"mailto:marcsteele2014@gmail.com"}>marcsteele2014@gmail.com</a></h2>
            <a target={"_blank"} rel={"noreferrer"} href={process.env.PUBLIC_URL + "Marc_Steele_Resume_SE.pdf"}><h2>Resume</h2></a>
        </>
        )
    }
}