import React, { useState } from 'react'
import AddNote from './AddNote'

const NoteDetails = ({ noteDetailsData, close, deleteNote, UpdateNotes, toggleEdit, isOpenEdit }) => {
    const [flag, setFlag] = useState(false)
    
    // flag should be true and call toggleEdit
    const edit = () => {
        setFlag(true)
        toggleEdit()
    }

    if (isOpenEdit) {
        return (
            <>
                <AddNote
                    flag={flag}
                    body={noteDetailsData.body}
                    UpdateNotes={UpdateNotes}
                    updatedNote={noteDetailsData}
                />
                <div style={{ float: "right" }}>
                    <button onClick={() => toggleEdit()}>Back</button>
                </div>
            </>
        )
    }

    return (
        <>
            <h5>{noteDetailsData.body}</h5>
            <span style={{ backgroundColor: "gray", color: "white" }}>{noteDetailsData.createdTime}</span>
            <hr />
            <div style={{ float: "right" }}>
                <button onClick={close}>Back</button>
                <button onClick={edit}>edit</button>
                <button onClick={() => deleteNote(noteDetailsData.id)}>delete</button>
            </div>
        </>
    )
}

export default NoteDetails