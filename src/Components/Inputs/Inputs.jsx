import React from "react";
import { Input, InputNumber } from "antd";
import { UserOutlined , LockOutlined } from '@ant-design/icons';
import { colors } from "../../Utils/colors";
import './Input.css'

export const EmailInput = ({size ,placeholder , showError , onChangeEvent, value,errorMessage , status , label}) => {
    return (
      <div className='email-input' >
        <p className="label" >{label}</p>
          <Input size={size} placeholder={placeholder} value={value} onChange={onChangeEvent} color={colors.darkblue}  prefix={<UserOutlined />} status={status} />
          {
              showError && (
                  <p style={{textAlign:'left',color:'red'}} >{errorMessage}</p>
              )
          }
      </div>
    )
  }

  export const PasswordInput = ({size ,placeholder , showError , onChangeEvent, value,errorMessage , status, label}) =>{
    return (
      <div className='password-input' >
        <p className="label" >{label}</p>
         <Input.Password size={size} placeholder={placeholder} value={value} onChange={onChangeEvent}  prefix={<LockOutlined />} status={status} />
        {
            showError && (
                <p style={{textAlign:'left',color:'red'}} >{errorMessage}</p>
            )
        }
      </div>
    )
}

export const TextInput = ({size ,placeholder , showError , onChangeEvent, value,errorMessage , status , icon, label}) =>{
    return (
      <div className='text-input' >
         <p className="label" >{label}</p>
         <Input size={size} placeholder={placeholder} value={value} onChange={onChangeEvent}  prefix={icon} status={status} />
        {
            showError && (
                <p style={{textAlign:'left',color:'red'}} >{errorMessage}</p>
            )
        }
      </div>
    )
}

export const NumberInput = ({size ,placeholder , showError , onChangeEvent, value,errorMessage , status , icon, label}) =>{
    return (
      <div className='text-input' >
         <p className="label" >{label}</p>
         <InputNumber size={size} placeholder={placeholder} value={value} onChange={onChangeEvent}  prefix={icon} status={status} min={1} max={100} style={{width:'100%'}} />
        {
            showError && (
                <p style={{textAlign:'left',color:'red'}} >{errorMessage}</p>
            )
        }
      </div>
    )
}