import React, { useState } from 'react'

const NoteCard = ({ val }) => {

  return (
    <>
      <h5>{val.body}</h5>
      <span style={{ backgroundColor: "green", color: "white" }}>{val.createdTime}</span>
      <hr />
    </>
  )
}

export default NoteCard