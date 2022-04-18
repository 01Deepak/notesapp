import React, { useState } from 'react'
import LogoAndSearchModule from './LogoAndSearchModule'
import SerchInputModule from './SerchInputModule'


const HeaderWrapper = ({searchNote}) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  
  // open search input field
  const openSearchModule = () => {
    setIsOpenSearch(true)
  }

  //close search input field
  const closeSearchModule = () => {
    setIsOpenSearch(false)
  }

  if(isOpenSearch) {
    return (
      <SerchInputModule 
        closeSearchModule={closeSearchModule}
        searchNote={searchNote}
      />
    )
  }
  
  return (
    <LogoAndSearchModule
      openSearchModule={openSearchModule}
    />
  )
}

export default HeaderWrapper