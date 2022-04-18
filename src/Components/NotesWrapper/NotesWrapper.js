import React, { useEffect, useState } from 'react'
import AddNote from '../AddNote'
import NoteDetails from '../NoteDetails'
import HeaderWrapper from './Header/HeaderWrapper'
import NotesContainer from './Notes/NotesContainer'

const NotesWrapper = () => {
  const [isAddNote, setIsAddNote] = useState(false)
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [openNoteDetail, setOpenNoteDetail] = useState(false)
  const [noteDetailsData, setNoteDetailsData] = useState({})
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [searchedData, setSearchedData] = useState([])

  //Add data in local storage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    setSearchedData(notes)
  }, [notes])

  //Add Note 
  const addNote = (text, id, dateTime) => {
    setNotes([
      ...notes,
      {
        id: id,
        body: text,
        createdTime: dateTime
      }])
  }

  //close note component
  const closeAddNote = () => {
    setIsAddNote(false)
  }

  //open Note details with Edit Delete Buttons
  const noteDetailForEditDelete = (val) => {
    setOpenNoteDetail(true)
    setNoteDetailsData(val)
  }

  //close NoteDetails Component
  const close = () => {
    setOpenNoteDetail(false)
  }

  //delete Note
  const deleteNote = (id) => {
    const deletedData = notes.filter((val) => {
      return val.id === id ? false : true
    })
    setNotes(deletedData)
    close()
  }

  //toggle Edit
  const toggleEdit = () => {
    setIsOpenEdit((p) => !p)

    // if (isOpenEdit) {
    //   setIsOpenEdit(false)
    // } else {
    //   setIsOpenEdit(true)
    // }
  }

  //Update Note
  const UpdateNotes = (updatedNote) => {
    const updatedData = notes.map((val) => {
      if (val.id === updatedNote.id) {
        return updatedNote
      }
      return val
    })
    setNotes(updatedData)
    toggleEdit()
    close()
  }

  // Search Notes
  const searchNote = (text) => {
    const data = notes.filter((val) => {
      if (val.body.includes(text)) {
        return true
      }
      return false
    })
    setSearchedData(data)
  }

  // return AddNote component
  if (isAddNote) {
    return (
      <>
        <AddNote
          closeAddNote={closeAddNote}
          addNote={addNote}
        />
        <div style={{ float: "right" }}>
          <button onClick={() => setIsAddNote(false)}>Back</button>
        </div>
      </>
    )
  }

  // return NoteDetails Component
  if (openNoteDetail) {
    return (
      <NoteDetails
        noteDetailsData={noteDetailsData}
        close={close}
        deleteNote={deleteNote}
        UpdateNotes={UpdateNotes}
        toggleEdit={toggleEdit}
        isOpenEdit={isOpenEdit}
      />
    )
  }

  return (
    <>
      <HeaderWrapper
        searchNote={searchNote}
      />
      {
        searchedData.map((val) =>  (
          <div
            key={val.id}
            onClick={() => noteDetailForEditDelete(val)}
          >
            <NotesContainer
              val={val}
            />
          </div>
        ))
      }
      <div style={{ float: "right" }}>
        <button onClick={() => setIsAddNote(true)}>Add</button>
      </div>
    </>
  )
}

export default NotesWrapper