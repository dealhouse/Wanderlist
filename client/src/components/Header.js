import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <div className='header'>
        <Nav />
        <img className="image" src={require('../assets/Wanderlist.png')} />
        </div>
    )
}

export default Header

