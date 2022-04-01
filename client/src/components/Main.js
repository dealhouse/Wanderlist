import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CommentCard from './CommentCard'

const Main = () => {
    const [comments, setComments] = useState([])
    

    useEffect(() => {
        const getComments = async () => {
            const comms = await axios.get('http://localhost:3001/api/comments')
            setComments(comms.data.comments)
        }
        getComments()
    }, [])
    console.log(comments)
    return (
        <div className='container'>
            <ul className='comment-list'>
                {comments.map((results) => (
                    <CommentCard 
                    key={results._id}
                    first={results.first}
                    last={results.last}
                    description={results.description}
                    date={results.date}
                    location={results.location}
                    />
                    
                ))}
            </ul>
        </div>
    )

}

export default Main