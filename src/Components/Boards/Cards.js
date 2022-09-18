import React from 'react'
import './Style.css'
import { Divider, Tag } from 'antd';

export const TaskCard = () => {
  return (
    <div className='task-card' >
        <h1 style={{fontSize:20}} >Task Title</h1>
        <p>Task Para</p>
        <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </div>
  )
}
