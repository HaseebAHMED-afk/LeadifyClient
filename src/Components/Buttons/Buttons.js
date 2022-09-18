import React from 'react'
import { images } from '../../Utils/images'
import './Style.css'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


export const RoundedButtonSolid = ({btnText , btnStyle , onClick , loading}) => {
  return (
    <button className='roundedButtonSolid' style={btnStyle} onClick={onClick} >
      {
        loading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        ) :
        <h3 className='btnText' >{btnText}</h3>
      }
    </button>
  )
}

export const GoogleSocialBtn = ({btnText , btnStyle , onClick}) => {
  return (
    <button className='googleSocialBtn' style={btnStyle} onClick={onClick} >
        <img src={images.google} alt='google' style={{width:40}} />
        <h3  className='socialBtnText' >{btnText}</h3>
    </button>
  )
}

export const FacebookSocialBtn = ({btnText , btnStyle , onClick}) => {
  return (
    <button className='facebookSocialBtn' style={btnStyle} onClick={onClick} >
        <img src={images.facebook} alt='google' style={{width:40}} />
        <h3  className='socialBtnText' >{btnText}</h3>
    </button>
  )
}



export const CircularButtonSolid = ({btnText , btnStyle , onClick}) => {
    return (
      <div>Buttons</div>
    )
  }
  