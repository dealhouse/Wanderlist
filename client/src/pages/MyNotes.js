import React, {useState, useEffect} from "react";
import axios from "axios";

const MyNotes = () => {
    const [input, setInput] = useState({
        title: '',
        location: 'Nassau',
        description: ''
    })
    const [notes, setNotes] = useState([])
    const [click, setClick] = useState(0)
    const [selected, setSelected] = useState()
const handleChange = (e) => {
    const {name, value} = e.target
    setInput((prevInput) => {
        return {...prevInput, [name]: value}
    })
} 

const handleAdd = (e) => {
    e.preventDefault()
    const noteData = {
        title: input.title,
        description: input.description,
        location: input.location
    }
    axios.post('http://localhost:3001/api/note', noteData)
    setClick((prevState) => prevState + 1)
}

const handleSelect = (e) => {
    e.preventDefault()
    setSelected(e.target.className)

}

const handleDeselect = (e) => {
    e.preventDefault()
    setSelected()
}


    useEffect(() => {
        const getNotes = async () => {
            const note = await axios.get('http://localhost:3001/api/notes')
            
            setNotes(note.data.note)
            
        }
        getNotes()
    }, [click])


    return (
        <div>
            <h1>New Note</h1>
            {/* <p>{newNote.title} {newNote.location}</p> */}
            <form>
                <div>
                    <input onChange={handleChange} name="title" value={input.title}></input>
                </div>
                <div>
                    <textarea onChange={handleChange} name="description" value={input.description}></textarea>
                </div>
                <button onClick={handleAdd}>Add Note</button>
            </form>
            <h2>Notes</h2>
            
            {notes.map((note) => (
                <div onClick={handleSelect} className={note._id} key={note.createdAt}>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
                <p>{note.location}</p>
                {selected === note._id && 
                <button>Update</button>}
                {selected === note._id && 
                <button>Delete</button>}
                {selected === note._id && 
                <button onClick={handleDeselect}>X</button>}
                </div>
            ))}
            
        </div>
    )
}

export default MyNotes