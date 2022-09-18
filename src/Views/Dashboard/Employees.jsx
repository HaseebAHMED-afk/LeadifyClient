import React, { useState } from "react";
import { Boards } from "../../Components/Boards/Boards";
import { EmployeeCard } from "../../Components/Boards/Cards";
import { RoundedButtonSolid } from "../../Components/Buttons/Buttons";
import { colors } from "../../Utils/colors";
import "./Style.css";

const Employees = () => {
  return (
    <div className="dashboard">
    <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between'}} >  
    <h1 className="dashboard-heading">Your Employees</h1>
    <RoundedButtonSolid
          btnText={"Create a new Employee"}
          btnStyle={{
            backgroundColor: colors.orange,
            width: "15%",
            marginTop: "2%",
          }}
          />
    </div>

    <div className="employees" >
        
      <EmployeeCard />
      <EmployeeCard />
    </div>
  </div>
  )
}

export default Employees