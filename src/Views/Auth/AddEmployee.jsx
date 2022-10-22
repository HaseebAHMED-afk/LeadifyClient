import React, { useRef } from "react";
import {
  FacebookSocialBtn,
  GoogleSocialBtn,
  RoundedButtonSolid,
} from "../../Components/Buttons/Buttons";
import {
  EmailInput,
  NumberInput,
  PasswordInput,
  TextInput,
} from "../../Components/Inputs/Inputs";
import Navbar from "../../Components/Layout/Navbar";
import { colors } from "../../Utils/colors";
import { images } from "../../Utils/images";
import "./Style.css";
import { IdcardOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, message, Select, Upload } from "antd";
import { signInWithFacebook, signInWithGoogle } from "../../firebase";
import { useState } from "react";
import { Required, RequiredNumber } from "../../Utils/validations";
import { baseURL } from "../../Utils/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const { Option } = Select;

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [expertise, setExpertise] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [technicalAssessment, setTechnicalAssessment] = useState(0);
  const [intelligenceAssessment, setIntelligenceAssessment] = useState(0);
  const [professionalAssessment, setProfessionalAssessment] = useState(0);

  const [loading, setLoading] = useState(false);

  const addEmployee = async (req, res) => {
    setLoading(true);
    if(
      Required('Name' , name) &&
      Required('Email' , email) &&
      Required('Password' , password) &&
      RequiredNumber('Years Of Experience' , yearsOfExperience) &&
      Required('Expertise' , expertise) &&
      Required('Gender' , gender) &&
      RequiredNumber('Age' ,age) &&
      RequiredNumber('Techincal Assessment' ,technicalAssessment) &&
      RequiredNumber('Intelligence Assessment' ,intelligenceAssessment) &&
      RequiredNumber('Professional Assessment' ,professionalAssessment)
    ){
      let obj = {
        name,
        email,
        password,
        experience:yearsOfExperience,
        type:expertise,
        gender,
        age,
        technicalExpertise: technicalAssessment,
        intelligenceExpertise: intelligenceAssessment,
        professionalExpertise: professionalAssessment,
      };
      fetch(baseURL+'/employee/addEmployee' , {
        method:'POST',
        headers: new Headers({
          "Content-Type":"application/json"
        }),
        body:JSON.stringify(obj)
      }).then(res => res.json())
      .then(res2 =>{
        if(res2?.status){
         navigate('/employees')
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

  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="register-page">
        <div className="addEmployeeHeading1">
          <h1 className="addEmployeeHeading">Add a New Employee</h1>
          <TextInput
            label={"Name"}
            size="large"
            icon={<IdcardOutlined />}
            onChangeEvent={(e) => setName(e?.target?.value)}
          />
          <EmailInput
            label={"Email"}
            size="large"
            onChangeEvent={(e) => setEmail(e?.target?.value)}
          />
          <PasswordInput
            label={"Password"}
            size={"large"}
            onChangeEvent={(e) => setPassword(e?.target?.value)}
          />
          <NumberInput
            label={"Years of Experience"}
            size={"large"}
            onChangeEvent={(e) => setYearsOfExperience(e)}
          />
          <p>Expertise</p>
          <Select
            placeholder={"Expertise"}
            size={"large"}
            style={{ width: "100%" }}
            onChange={(e) => setExpertise(e)}
          >
            <Option value="front-end development">Frontend Development</Option>
            <Option value="back-end development">Backend Development</Option>
            <Option value="tester">Tester</Option>
            <Option value="designer">Designer</Option>
          </Select>
          <p>Gender</p>
          <Select
            placeholder={"Gender"}
            size={"large"}
            style={{ width: "100%" }}
            onChange={(e) => setGender(e)}
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
          <NumberInput
            label={"Age"}
            size={"large"}
            onChangeEvent={(e) => setAge(e)}
          />
          <NumberInput
            label={"Technical Assessment"}
            size={"large"}
            onChangeEvent={(e) => setTechnicalAssessment(e)}
          />
          <NumberInput
            label={"Intelligence Assessment"}
            size={"large"}
            onChangeEvent={(e) => setIntelligenceAssessment(e)}
          />
          <NumberInput
            label={"Professional Assessment"}
            size={"large"}
            onChangeEvent={(e) => setProfessionalAssessment(e)}
          />
          {/* <p className="label">Profile Picture</p>
        <Button
          size="large"
          style={{ width: "100%" }}
          onClick={onButtonClick}
          icon={<UploadOutlined />}
        >
          Click to Upload
        </Button>
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={handleProfilePick}
        /> */}
          <RoundedButtonSolid
            onClick={addEmployee}
            loading={loading}
            btnText={"Add Employee"}
            btnStyle={{
              backgroundColor: colors.yellow,
              width: "100%",
              marginTop: "2%",
            }}
          />
          {/* <div className="dash" />
          <p style={{margin:'auto' , textAlign:'center'}} >or</p> */}
          {/* <GoogleSocialBtn btnText={'Register With Google'} onClick={googleRegister} />
          <FacebookSocialBtn btnText={'Register With Facebook'} onClick={fbRegister} /> */}
        </div>
        <div className="register-page-section2">
          <img
            src={images.registerArtwork}
            alt="register-artwork"
            style={{ width: "75%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
