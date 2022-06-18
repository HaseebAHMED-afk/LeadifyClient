import React from 'react'
import { colors } from '../../Utils/colors'
import { images } from '../../Utils/images'
import { RoundedButtonOutlineYellow, RoundedButtonSolidYellow } from '../Buttons/Buttons'
import './Style.css'

const Navbar = () => {
  return (
    <div className='navbar' >
        <img src={images.leadifyNav} alt="leadify-nav" className='nav-logo' />
         <RoundedButtonSolidYellow btnText={'Login'}  />
         <RoundedButtonOutlineYellow btnText={'Login'} />
    </div>
  )
}

export default Navbar