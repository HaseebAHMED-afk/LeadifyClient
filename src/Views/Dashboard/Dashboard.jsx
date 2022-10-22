import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Boards } from "../../Components/Boards/Boards";
import { RoundedButtonSolid } from "../../Components/Buttons/Buttons";
import { colors } from "../../Utils/colors";
import { baseURL } from "../../Utils/config";
import "./Style.css";
import { TextInput } from "../../Components/Inputs/Inputs";
import { Required } from "../../Utils/validations";


const Dashboard = () => {

  let [tasks , setTasks] = useState([])

  const [title , setTitle] = useState('')

  const fetchTasks = async () =>{
    fetch(baseURL+'/task/getAllTasks' , {
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


const createTask = () =>{
  if(Required('Title' , title)){
    fetch(baseURL+'/task/createTask',{
      method:'POST',
      body: JSON.stringify({
        title:title
      }),
      headers: new Headers({
        'Content-Type':'application/json'
      })
    }).then(res => res.json())
    .then(res2=>{
      console.log(res2);
    }).
    catch(err => {
      console.log(err);
    })
  }
}




  return (
    <div className="dashboard">
      <h1 className="dashboard-heading">Today's Task</h1>
      <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between'}} > 
      <div style={{width:'50%'}} >
      <TextInput  label={"New Task"} size="large"value={title} onChangeEvent={(e)=>setTitle(e?.target?.value)} placeholder={'Enter a task title'} /> 
      </div>
      <RoundedButtonSolid
          btnText={"Create a new Task"}
          btnStyle={{
            backgroundColor: colors.orange,
            width: "20%",
          }}
          onClick={createTask}
          />
      </div>

      <div className="taskboard" >
          {/* <Boards title={'New'}  titleColor={colors.lightblue} /> */}
          <Boards title={'Pending'} data={tasks?.filter(el => el?.taskStatus == 'pending')} titleColor={colors.yellow} />
          {/* <Boards title={'In Progress'} titleColor={colors.orange} /> */}
          <Boards title={'Completed'} titleColor={'green'} data={tasks?.filter(el => el?.taskStatus == 'completed')} />
          <Boards title={'Queued'} titleColor={'purple'} data={tasks?.filter(el => el?.taskStatus == 'queued')} />
      </div>
    </div>
  );
};

export default Dashboard;
