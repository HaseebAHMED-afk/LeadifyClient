import React from 'react'
import { TaskCard } from './Cards'
import './Style.css'

export const Boards = ({title , data , titleColor }) => {
  return (
    <div className='board' >
        <div>
        <h1 className='board-title' style={{color:titleColor}} >{title}</h1>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        </div>
    </div>
  )
}
