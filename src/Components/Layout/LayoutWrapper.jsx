import React from 'react'
import NavBarMain from './NavBarMain'
import Sidebar from './Sidebar'
import './Style.css'

const LayoutWrapper = ({children}) => {
  return (
    <div style={{display:'flex',flexDirection:'row' , width:'100%'}} >
        <div className='sidebar-parent' >
          <Sidebar />
        </div>
        <div className='layout-right-section' >
        <NavBarMain />
        {children}
        </div>
    </div>
  )
}

export default LayoutWrapper