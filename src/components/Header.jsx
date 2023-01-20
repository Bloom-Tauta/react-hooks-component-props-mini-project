import { props } from 'bluebird'
import React from 'react'

function Header(props) {
    return (
        <div>
        <h1>{props.Heading}</h1>
        </div>
    )
}

function Heading() {
    return(
        <div>
            <Header headingText="Overreacted"/>
        </div>
    )
}

export default Header