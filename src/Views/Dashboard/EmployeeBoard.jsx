import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Boards } from "../../Components/Boards/Boards";
import { RoundedButtonSolid } from "../../Components/Buttons/Buttons";
import { colors } from "../../Utils/colors";
import { baseURL } from "../../Utils/config";
import "./Style.css";

const EmployeeBoard = () => {


  let [tasks , setTasks] = useState([])

  const {id} = useParams()

  const fetchTasks = async () =>{
    fetch(baseURL+'/task/getTaskByEmployees/'+id , {
        method:'GET',
    }).then(res => res.json())
    .then(res2 =>{
        if(res2?.status){
            setTasks(res2?.message)
            console.log(res2?.message);
        }else{
            toast.error(res2?.message)
        }
    }).catch(err =>{
        toast.error(err?.message)
    })
}

useEffect(() =>{
  fetchTasks()
} , [])


  return (
    <div className="dashboard">
      <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between'}} >  
      <h1 className="dashboard-heading">Today's Task</h1>
      </div>

      <div className="taskboard" >
          {/* <Boards title={'New'}  titleColor={colors.lightblue} /> */}
          <Boards refreshFn={fetchTasks} title={'Pending'} data={tasks?.filter(el => el?.taskStatus == 'pending')} titleColor={colors.yellow} />
          {/* <Boards title={'In Progress'} titleColor={colors.orange} /> */}
          <Boards refreshFn={fetchTasks} title={'Completed'} titleColor={'green'} data={tasks?.filter(el => el?.taskStatus == 'completed')} />
          <Boards refreshFn={fetchTasks} title={'Queued'} titleColor={'purple'} data={tasks?.filter(el => el?.taskStatus == 'queued')} />
      </div>
    </div>
  )
}

export default EmployeeBoard