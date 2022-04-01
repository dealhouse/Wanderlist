import React from 'react'
import { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa"

const CommentCard = (props) => {

    const [image, setImage] = useState("")
    
    
    

    useEffect(() => {
        const getImage = async () => {
            setImage(`https://countryflagsapi.com/png/${props.location}`)
        }
        getImage()
    }, [image])
    return (
        <div onClick={props.onClick}>
            <li className='comment'>
                {props.first} {props.last}, {props.location} <span>{Math.ceil(Math.random() * 5)} <FaStar/></span>
                <span className='comment-content'><img src={image} /> 
                <small>{props.description}</small>
                </span>
            </li>
            
        </div>
    )
}

export default CommentCard