import React from 'react'
import { TaskCard } from './Cards'
import './Style.css'

export const Boards = ({title , data , titleColor , refreshFn }) => {
  return (
    <div className='board' >
        <div>
        <h1 className='board-title' style={{color:titleColor}} >{title}</h1>
        {
          data?.map((el,i) => 
          <TaskCard refreshFn={refreshFn}  data={el} key={i} />
          )
        }
       
        </div>
    </div>
  )
}

