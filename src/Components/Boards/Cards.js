import React from "react";
import "./Style.css";
import { Divider, Tag, Radio } from "antd";
import { baseURL } from "../../Utils/config";
import { toast } from "react-toastify";

export const TaskCard = ({data , refreshFn}) => {

    const completeTask = async (id) =>{
        fetch(baseURL+'/task/finishTask' ,{
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
               taskId: id
            })
        })
        .then(res => res.json())
        .then(res2 =>{
            if(res2?.status){
                toast.success('Task Updated')
                refreshFn()
            }else{
                toast.error(res2?.message)
            }
        })
        .catch(err =>{
            toast.error(err?.message)
        })
      }
      

  return (
    <div className="task-card">
      <h1 style={{ fontSize: 20 }}>Task Title</h1>
      <p>Task Para</p>
      <Tag color="red">red</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <br />
      <Radio onClick={() => completeTask()} >Mark as Complete</Radio>
    </div>
  );
};

export const EmployeeCard = ({data}) => {
    console.log(data);
  return (
    <div className="employee-card">
      <h1 style={{ fontSize: 20 }}>{data?.name}</h1>
      <p>Type: {data?.type}</p>
      <p>Expertise: {data?.expertise}</p>
      <p>Experience: {data?.experience}</p>
      {
        data?.isAvailable ? 
        <Tag color="green">Free</Tag>
    :  
      <Tag color="red">Occupied</Tag>
    }
    </div>
  );
};
