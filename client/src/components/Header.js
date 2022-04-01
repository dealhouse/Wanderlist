import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <div className='header'>
            <div className='nav'>
                <Nav />
            </div>
            <h2>Wanderlist</h2>
            <img className="image" src={require('../assets/undraw_journey_lwlj.png')} />
        </div>
    )
}

export default Header

