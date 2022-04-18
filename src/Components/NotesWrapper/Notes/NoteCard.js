import React, { useState } from 'react'

const NoteCard = ({ note, openNoteDetail }) => {

  return (
    <div onClick={() => openNoteDetail(note)}>
      <h5>{note.body}</h5>
      <span style={{ backgroundColor: "green", color: "white" }}>{note.createdTime}</span>
      <hr />
    </div>
  )
}

export default NoteCard