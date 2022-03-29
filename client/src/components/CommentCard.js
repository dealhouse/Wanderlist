import React from 'react'

const CommentCard = (props) => {
    return (
        <div>
            <li>{props.first} {props.last}</li>
        </div>
    )
}

export default CommentCard