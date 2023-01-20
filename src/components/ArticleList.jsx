import { props } from 'bluebird'
import React from 'react'

const ArticleList = (props) => {
    return (
        <div>
            <h3 title={props.title}>{title}</h3>
            <small date={props.date}>{date = "January 1, 1970"}</small>
            <p preview={props.preview}>{preview}</p>
        </div>
    )
}

export default ArticleList