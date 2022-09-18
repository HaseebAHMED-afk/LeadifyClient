import React, { useState } from "react";
import { Boards } from "../../Components/Boards/Boards";
import { RoundedButtonSolid } from "../../Components/Buttons/Buttons";
import { colors } from "../../Utils/colors";
import "./Style.css";

const EmployeeBoard = () => {
  return (
    <div className="dashboard">
      <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between'}} >  
      <h1 className="dashboard-heading">Today's Task</h1>
      </div>

      <div className="taskboard" >
          <Boards title={'New'} titleColor={colors.lightblue} />
          <Boards title={'Pending'} titleColor={colors.yellow} />
          <Boards title={'In Progress'} titleColor={colors.orange} />
          <Boards title={'Completed'} titleColor={'green'} />
      </div>
    </div>
  )
}

export default EmployeeBoard