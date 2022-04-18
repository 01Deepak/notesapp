import React, { useState } from 'react'

const AddNote = ({ flag, UpdateNotes, updatedNote, body, closeAddNote, addNote }) => {
    const [text, setText] = useState(body)

    //handle input change
    const handleChange = (event) => {
        const value = event.target.value
        setText(value)
    }

    //generate unique id
    const generateId = () => {
        return new Date().valueOf();
    }

    //gererate date
    const generateDate = () => {
        const d = new Date()
        return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    }

    // add note and edit note
    const save = () => {
        if (!text.trim()) return
        if (flag) {
            UpdateNotes({ ...updatedNote, body: text })
        }
        else {
            closeAddNote()
            addNote(text, generateId(), generateDate())
        }
    }

    return (
        <div>
            <textarea
                value={text}
                onChange={handleChange}
                rows="10"
            />
            <button onClick={save}>Save</button>
        </div>
    )
}

export default AddNote