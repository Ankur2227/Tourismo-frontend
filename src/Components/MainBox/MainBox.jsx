import React from 'react'
import './MainBox.css'
import MyProfile from './MyProfile/MyProfile'

const MainBox = ({clickedButton}) => {
  return (
    <div className='mainbox-container'>
      {clickedButton==='Profile'?<MyProfile/>:<h1>fedv</h1>}

    </div>
  )
}

export default MainBox