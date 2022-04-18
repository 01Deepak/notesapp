import React from 'react'

const LogoAndSearchModule = ({ openSearchModule }) => {
  return (
    <>
      <span>Notes</span>
      <button onClick={openSearchModule}>Search</button>
    </>
  )
}

export default LogoAndSearchModule