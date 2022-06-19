import React from 'react'
import { colors } from '../../Utils/colors'
import { images } from '../../Utils/images'
import { RoundedButtonSolid } from '../Buttons/Buttons'
import './Style.css'
import { useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='navbar' >
        <img src={images.leadifyNav} alt="leadify-nav" className='nav-logo' />
        <div style={{display:'flex',flexDirection:'row' , alignItems:'center' , justifyContent:'space-between'}} >
         <RoundedButtonSolid onClick={()=>navigate('/login')} btnText={'Login'} btnStyle={{backgroundColor: colors.darkblue , marginLeft:5 , marginRight:5}}  />
         <RoundedButtonSolid  onClick={()=>navigate('/register')} btnText={'Register'} btnStyle={{backgroundColor: colors.yellow}}  />
         </div>
    </div>
  )
}

export default Navbar