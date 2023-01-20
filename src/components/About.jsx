import React from 'react'

const About = (props) => {
    return (
        <div>
            <aside>
                <img src={props.image} placeholder = "https://via.placeholder.com/215" alt="blog logo"/>
                <p text={props.text}>{text}</p>
            </aside>
        </div>
    )
 }


export default About