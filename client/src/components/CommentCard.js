import React from 'react'
import { useState, useEffect } from 'react'

const CommentCard = (props) => {

    const [image, setImage] = useState("")
    
    useEffect(() => {
        const getImage = async () => {
            setImage(`https://countryflagsapi.com/png/${props.location}`)
        }
        getImage()
    }, [image])
    return (
        <div>
            <li>{props.first} {props.last} {props.location}</li>
            <img src={image}/>
        </div>
    )
}

export default CommentCard