import React from 'react'
import './Style.css'
import { Avatar ,Dropdown, Menu,  } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch} from 'react-redux'
import { toggleSearch } from '../../Redux/Reducers/Search';
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const NavBarMain = () => {
  
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const menu = (
      <Menu
        items={[
          {
            key: '1',
            label: 'Employees',
            onClick: ()=> navigate('/employees')
          },
          {
            key: '2',
            danger: true,
            label: 'Log Out',
            onClick: ()=> navigate('/')
          },
        ]}
      />
    );

  return (
    <div className='navbar-main' >
        <div  className='search-section' >
            {/* <div  onClick={() => dispatch(toggleSearch())} >
            <AiOutlineSearch size={'32px'} />
            </div> */}
            <Dropdown overlay={menu} >
                <Avatar size={'medium'} icon={<UserOutlined />} />
            </Dropdown>
        </div>
        
    </div>
  )
}

export default NavBarMain