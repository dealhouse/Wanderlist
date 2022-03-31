import React from "react"
import { Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/mynotes"><h3>My Notes</h3></Link>
            <h2>About</h2>
            <p>This is my second project.</p>
        </div>
    )
}

export default About