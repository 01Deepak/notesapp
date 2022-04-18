import React, { useEffect, useState } from 'react'

const SerchInputModule = ({ closeSearchModule, searchNote }) => {
  const [text, setText] = useState('')

  //Rerender on text change
  useEffect(() => {
    searchNote(text)
  }, [text])

  //handle input change
  const handleChange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
      <input
        type="text"
        placeholder='search...'
        onChange={handleChange}
      />
      <button onClick={closeSearchModule}>X</button>
    </>
  )
}

export default SerchInputModule