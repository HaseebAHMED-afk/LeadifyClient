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

const Register = () => {
  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handleProfilePick = async (e) => {
    console.log(e.target.files[0]);
  };


  const googleRegister = async () =>{
    let res = await signInWithGoogle()
    console.log(res);
  }
  const fbRegister = async () =>{
    let res = await signInWithFacebook()
    console.log(res);
  }


  return (
    <div>
      <Navbar />
      <div className="register-page">
        <div className="register-page-section1">
          <img
            src={images.leadifyLogo}
            alt="leadify"
            style={{ width: "20%" }}
          />
          <h1>Register</h1>
          <TextInput label={"Name"} size="large" icon={<IdcardOutlined />} />
          <EmailInput label={"Email"} size="large" />
          <PasswordInput label={"Password"} size={"large"} />
          <p className="label">Profile Picture</p>
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
          />
          <RoundedButtonSolid
            btnText={"Register"}
            btnStyle={{
              backgroundColor: colors.yellow,
              width: "100%",
              marginTop: "2%",
            }}
            />
            <div className="dash" />
            <p style={{margin:'auto' , textAlign:'center'}} >or</p>
            <GoogleSocialBtn btnText={'Register With Google'} onClick={googleRegister} />
            <FacebookSocialBtn btnText={'Register With Facebook'} onClick={fbRegister} />
              

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

export default Register;
