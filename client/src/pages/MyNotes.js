import React, {useState, useEffect, useMemo} from "react";
import axios from "axios";
import { Link} from 'react-router-dom'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { MdDeleteForever } from 'react-icons/md'

const MyNotes = () => {
    const [input, setInput] = useState({
        title: '',
        location: '',
        description: ''
    })
    const [upInput, setUpInput] = useState({
        title: '',
        location: 'L',
        description: ''
    })
    const [notes, setNotes] = useState([])
    const [click, setClick] = useState(0)
    const [selected, setSelected] = useState()
    const [updating, setUpdating] = useState()
    const [value, setValue] = useState('')

    const options = useMemo(() => countryList().getData(), [])

const changeHandler = (e) => {
    setValue(e)
    
    setInput((prevInput) => {
        return {...prevInput, location: e.value}
    })
}

const handleChange = (e) => {
    const {name, value} = e.target
    setInput((prevInput) => {
        return {...prevInput, [name]: value}
    })
} 

const handleUpChange = (e) => {
    const {name, value} = e.target
    setUpInput((prevInput) => {
        return {...prevInput, [name]: value}
    })
    console.log(upInput)
}
const handleAdd = async (e) => {
    e.preventDefault()
    const noteData = {
        title: input.title,
        description: input.description,
        location: input.location
    }
    await axios.post('http://localhost:3001/api/note', noteData)
    setClick((prevState) => prevState + 1)
    setInput({
        title: "",
        description: '',
        location: ''
    })
}

const handleSelect = (e) => {
    e.preventDefault()
    setSelected(e.target.className)

}

const handleDeselect = (e) => {
    e.preventDefault()
    setSelected()
    setUpdating()
}

const handleUpdate = (e) => {
    e.preventDefault()
    setUpdating(selected)
}

const handleSave = async (e) => {
    e.preventDefault()
    const noteUp = {
        title: upInput.title,
        description: upInput.description
    }
    await axios.put(`http://localhost:3001/api/note/${updating}`, noteUp)
    setSelected()
    setUpdating()
    setUpInput({title: "", location: "", description: ""})
    setClick((prevState) => prevState + 1)
}

const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:3001/api/note/${selected}`)
    setClick((prevState) => prevState + 1)

}

    useEffect(() => {
        const getNotes = async () => {
            const note = await axios.get('http://localhost:3001/api/notes')
            
            setNotes(note.data.note)
            
        }
        getNotes()
    }, [click])

    
    return (
        <div className="container note-page">
            <div className="links">
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/about"><h3>About</h3></Link>
            </div>
            <h2>Notes</h2>
            <div className="note-body">
            <img className="image"src={require("../assets/undraw_travel_plans_li01.png")} />
            <div className="note-list">
            {notes.map((note) => (
                <div onClick={handleSelect} className={note._id + ' note'} key={note.createdAt}>
                    <div className="note-heading">
                        <h3>{note.title}</h3>
                        <img src={`https://countryflagsapi.com/png/${note.location}`} />
                    </div>
                <p>{note.description}</p>
                <p>{note.location}</p>
                {selected === (note._id + ' note')&& 
                <button onClick={handleUpdate}>Update</button>}
                {updating === note._id + ' note' && 
                <form>
                    <div className="input-title">
                        <input name="title" onChange={handleUpChange} value={upInput.title}></input>
                    </div>
                    <div className="input-text">
                        <textarea name="description" onChange={handleUpChange} defaultValue={upInput.description}></textarea>
                    </div>
                    <button onClick={handleSave}>Save</button>
                </form>
                }
                {selected === note._id + ' note' && 
                <button onClick={handleDelete}><MdDeleteForever className="delete-icon" /></button>}
                {(selected === note._id  + ' note'|| updating === note._id + ' note') && 
                <button onClick={handleDeselect}>X</button>}
                </div>
                
                
            ))}
            <div className="add note">
            <h3>New note</h3>
            <form className="form1">
                <div className="input-title">
                    <input onChange={handleChange} name="title" value={input.title} placeholder="Title"></input>
                </div>
                <div className="selector">
                    <Select name="location" options={options} value={value} onChange={changeHandler} />
                </div>
                <div className="input-text">
                    <textarea rows="4" cols="20" onChange={handleChange} name="description" value={input.description} placeholder="Type here" ></textarea>
                </div>
                <button onClick={handleAdd}>Add Note</button>
            </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default MyNotes