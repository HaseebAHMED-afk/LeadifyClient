import React from 'react'
import './Style.css'

export const RoundedButtonSolidYellow = ({btnText , btnStyle , onClick}) => {
  return (
    <button className='roundedButtonSolidYellow' style={btnStyle} >
        <h3 className='btnTextYellow' >{btnText}</h3>
    </button>
  )
}

export const RoundedButtonOutlineYellow = ({btnText , btnStyle , onClick}) => {
  return (
    <button className='roundedButtonOutlineYellow' style={btnStyle} >
     <h3 className='btnTextOutlinedYellow' >{btnText}</h3>
    </button>
  )
}

export const CircularButtonSolid = ({btnText , btnStyle , onClick}) => {
    return (
      <div>Buttons</div>
    )
  }
  
export const CircularButtonOutline = ({btnText , btnStyle , onClick}) => {
    return (
      <div>Buttons</div>
    )
  }
  
  