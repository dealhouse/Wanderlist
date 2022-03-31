import React, {useState, useEffect, useMemo} from "react";
import axios from "axios";
import { Link} from 'react-router-dom'
import Select from 'react-select'
import countryList from 'react-select-country-list'

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
        <div>
            <div>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/about"><h3>About</h3></Link>
            </div>
            <h2>New Note</h2>
            <form className="form1">
                <div>
                    <input onChange={handleChange} name="title" value={input.title}></input>
                </div>
                <div>
                    <Select name="location" options={options} value={value} onChange={changeHandler} />
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
                <button onClick={handleUpdate}>Update</button>}
                {updating === note._id && 
                <form>
                    <div>
                        <input name="title" onChange={handleUpChange} value={upInput.title}></input>
                    </div>
                    <div>
                        <textarea name="description" onChange={handleUpChange} defaultValue={upInput.description}></textarea>
                    </div>
                    <button onClick={handleSave}>Save</button>
                </form>
                }
                {selected === note._id && 
                <button onClick={handleDelete}>Delete</button>}
                {(selected === note._id || updating === note._id) && 
                <button onClick={handleDeselect}>X</button>}
                </div>
            ))}
            
        </div>
    )
}

export default MyNotes