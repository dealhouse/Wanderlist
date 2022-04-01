import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className='links'>
            <Link to="/"><p>Home</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/mynotes"><p>My Notes</p></Link>
        </div>
    )
}

export default Nav