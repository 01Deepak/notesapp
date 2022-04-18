import React, { useEffect, useState } from 'react'
import AddNote from '../AddNote'
import { VIEW_CONSTANT } from '../Constant/ViewConstant'
import NoteDetails from '../NoteDetails'
import HeaderWrapper from './Header/HeaderWrapper'
import NoteCard from './Notes/NoteCard'

const NotesWrapper = () => {
  const [viewType, setViewType] = useState(null)
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
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
    setViewType(null)
  }

  //open Note details
  const noteDetailForEditDelete = (note) => {
    setViewType(VIEW_CONSTANT.NOTE_DETAIL)
    setNoteDetailsData(note)
  }

  //close NoteDetails Component
  const close = () => {
    setViewType(null)
  }

  //delete Note
  const deleteNote = (id) => {
    const deletedData = notes.filter((note) => {
      return note.id === id ? false : true
    })
    setNotes(deletedData)
    close()
  }

  //toggle Edit
  const toggleEdit = () => {
    setIsOpenEdit((p) => !p)
  }

  //Update Note
  const UpdateNotes = (updatedNote) => {
    const updatedData = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote
      }
      return note
    })
    setNotes(updatedData)
    toggleEdit()
    close()
  }

  // Search Notes
  const searchNote = (text) => {
    const data = notes.filter((note) => {
      if (note.body.includes(text)) {
        return true
      }
      return false
    })
    setSearchedData(data)
  }

  const renderView = () => {
    switch(viewType) {
      case VIEW_CONSTANT.ADD_NOTE:
        return (
          <>
            <AddNote
              closeAddNote={closeAddNote}
              addNote={addNote}
            />
            <div style={{ float: "right" }}>
              <button onClick={() => setViewType(null)}>Back</button>
            </div>
          </>
        ) 

      case VIEW_CONSTANT.NOTE_DETAIL:
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

      default : 
      return (
        <>
          <HeaderWrapper
            searchNote={searchNote}
          />
          {
            searchedData.map((note) =>  (
              <NoteCard
                key={note.id}
                openNoteDetail={noteDetailForEditDelete}
                note={note}
              />
            ))
          }
          <div style={{ float: "right" }}>
            <button onClick={() => setViewType(VIEW_CONSTANT.ADD_NOTE)}>Add</button>
          </div>
        </>
      )
    }
  }
   
  return (
    <>
      {
        renderView()
      }
    </>
  )
}

export default NotesWrapper