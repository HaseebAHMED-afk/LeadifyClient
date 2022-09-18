import React from 'react'
import './Style.css'
import { Avatar ,Dropdown, Menu,  } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch} from 'react-redux'
import { toggleSearch } from '../../Redux/Reducers/Search';
import { AiOutlineSearch } from "react-icons/ai";

const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: 'Employees'
        },
        {
          key: '2',
          danger: true,
          label: 'Log Out',
        },
      ]}
    />
  );

const NavBarMain = () => {

    const dispatch = useDispatch()

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