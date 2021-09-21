import React, { Component } from "react";


export default class About extends Component {
    render() {
        return (
            <>
                <h2 class="about-title">About Me</h2>
                <p class="about">
                    I attended Phillips Exeter Academy and Springfield College before a career in professional ice hockey that 
                    was shortened due to the COVID-19 pandemic. The sudden need for everyone to work remotely solidified the fact that
                    technology is the future for me. That's when I applied to the Flatiron School and ultimately completed their 
                    self-paced online software engneering program. Because of my personal interests in sports and the outdoors, and the 
                    recent focus on health and wellness, I would love to be able to help advance the technology in those fields.
                </p>
                <div class="logos">
                    <img id="Exeter" src={process.env.PUBLIC_URL + 'Phillips_Exeter_Academy_Seal.png'} alt="Phillips Exeter Academy Logo" />
                    <img id="Springfield" src={process.env.PUBLIC_URL + 'Springfield College Logo.png'} alt="Springfield College Logo" />
                    <img id="Flatiron" src={process.env.PUBLIC_URL + 'Flatiron_School_Logo.png'} alt="Flatiron School Logo" />
                </div>
                <p>
                    {process.env.PUBLIC_URL}
                </p>
            </>
        )
    }
}