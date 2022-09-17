import React, { useRef } from "react";
import { FacebookSocialBtn, GoogleSocialBtn, RoundedButtonSolid } from "../../Components/Buttons/Buttons";
import {
  EmailInput,
  PasswordInput,
  TextInput,
} from "../../Components/Inputs/Inputs";
import Navbar from "../../Components/Layout/Navbar";
import { colors } from "../../Utils/colors";
import { images } from "../../Utils/images";
import "./Style.css";
import { IdcardOutlined, UploadOutlined  } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { signInWithFacebook, signInWithGoogle } from "../../firebase";

const AddEmployee = () => {
  return (
    <div>
    <Navbar />
    <div className="register-page">
      <div className="addEmployeeHeading1">
        <h1 className="addEmployeeHeading" >Add a New Employee</h1>
        <TextInput label={"Name"} size="large" icon={<IdcardOutlined />} />
        <EmailInput label={"Email"} size="large" />
        <PasswordInput label={"Password"} size={"large"} />
        <TextInput label={"Years of Experience"} size={"large"} />
        <TextInput label={"Years Expertise"} size={"large"} />
        <TextInput label={"Gender"} size={"large"} />
        <TextInput label={"Age"} size={"large"} />
        <TextInput label={"Technical Assessment"} size={"large"} />
        <TextInput label={"Intelligence Assessment"} size={"large"} />
        <TextInput label={"Professional Assessment"} size={"large"} />
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
  )
}

export default AddEmployee