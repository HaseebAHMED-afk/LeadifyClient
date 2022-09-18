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


const Dashboard = () => {

  let [tasks , setTasks] = useState()

  const fetchTasks = async () =>{
    fetch(baseURL+'/task/getAllTasks' , {
        method:'GET',
    }).then(res => res.json())
    .then(res2 =>{
        if(res2?.status){
            setTasks(res2?.message)
            // console.log(res2?.message);
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
      <h1 className="dashboard-heading">Today's Task</h1>
      <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between'}} > 
      <TextInput label={"New Task"} size="large"/> 
      <RoundedButtonSolid
          btnText={"Create a new Task"}
          btnStyle={{
            backgroundColor: colors.orange,
            width: "10%",
            marginTop: "2%",
          }}
          />
      </div>

      <div className="taskboard" >
          <Boards title={'New'} titleColor={colors.lightblue} />
          <Boards title={'Pending'} titleColor={colors.yellow} />
          <Boards title={'In Progress'} titleColor={colors.orange} />
          <Boards title={'Completed'} titleColor={'green'} />
      </div>
    </div>
  );
};

export default Dashboard;
