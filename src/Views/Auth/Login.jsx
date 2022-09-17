import React from "react";
import { FacebookSocialBtn, GoogleSocialBtn, RoundedButtonSolid } from "../../Components/Buttons/Buttons";
import {
  EmailInput,
  PasswordInput,
  TextInput,
} from "../../Components/Inputs/Inputs";
import Navbar from "../../Components/Layout/Navbar";
import { signInWithFacebook, signInWithGoogle } from "../../firebase";
import { colors } from "../../Utils/colors";
import { images } from "../../Utils/images";
import "./Style.css";

const Login = () => {

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
      <div className="login-page">
        <div className="login-page-section2">
          <img
            src={images.loginArtwork}
            alt="login-artwork"
            style={{ width: "75%" }}
          />
        </div>
        <div className="login-page-section1">
          <img
            src={images.leadifyLogo}
            alt="leadify"
            style={{ width: "20%" }}
          />
          <h1>Login</h1>
          <EmailInput label={"Email"} size="large" />
          <PasswordInput label={"Password"} size={"large"} />
          <RoundedButtonSolid
            btnText={"Login"}
            btnStyle={{
              backgroundColor: colors.darkblue,
              width: "100%",
              marginTop: "2%",
            }}
          />
          <div className="dash" />
            <p style={{margin:'auto' , textAlign:'center'}} >or</p>
            {/* <GoogleSocialBtn btnText={'Log In With Google'} onClick={googleRegister} />
            <FacebookSocialBtn btnText={'Log In With Facebook'} onClick={fbRegister} /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
