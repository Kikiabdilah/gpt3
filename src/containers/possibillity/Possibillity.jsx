import React from 'react'
import "./Possibillity.css"
import possibillityImage from '../../assets/possibillity.png'

const Possibillity = () => {
    return (
        <div className="gpt3__possibillity section__padding" id="possibility">
            <div className="gpt3__possibillity-image">
                <img src={possibillityImage} alt="possibillity" />
            </div>
            <div className="gpt3__possibillity-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibillity