import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className='links'>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/about"><h3>About</h3></Link>
            <Link to="/mynotes"><h3>My Notes</h3></Link>
        </div>
    )
}

export default Nav