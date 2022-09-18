import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Boards } from "../../Components/Boards/Boards";
import { EmployeeCard } from "../../Components/Boards/Cards";
import { RoundedButtonSolid } from "../../Components/Buttons/Buttons";
import { colors } from "../../Utils/colors";
import { baseURL } from "../../Utils/config";
import "./Style.css";

const Employees = () => {

    const navigate = useNavigate()

    const [data , setData] = useState([])
    const [loading , setLoading] = useState([])

    const getAllEmployees = async () =>{
        fetch(baseURL+'/employee/getAllEmployees').then(res => res.json())
          .then(res2 =>{
            if(res2?.status){
            setData(res2?.message)
              setLoading(false);
            }else{
              toast.error(res2?.message)
              setLoading(false);
            }
          }).catch(err =>{
            toast.error(err)
            setLoading(false);
          })
    }

    useEffect(()=>{
        getAllEmployees()
    } , [])

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
          onClick={() => navigate('/addEmployee')}
          />
    </div>

    <div className="employees" >
        {
            data && data?.map((el , i) =>(
                <EmployeeCard key={i} data={el} />
            ))
        }
    </div>
  </div>
  )
}

export default Employees