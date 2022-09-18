import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FacebookSocialBtn, GoogleSocialBtn, RoundedButtonSolid } from "../../Components/Buttons/Buttons";
import {
  EmailInput,
  PasswordInput,
  TextInput,
} from "../../Components/Inputs/Inputs";
import Navbar from "../../Components/Layout/Navbar";
import { signInWithFacebook, signInWithGoogle } from "../../firebase";
import { colors } from "../../Utils/colors";
import { baseURL } from "../../Utils/config";
import { images } from "../../Utils/images";
import { Required } from "../../Utils/validations";
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

  const navigate = useNavigate()

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const [loading , setLoading] = useState(false)

  const login = async () =>{
    setLoading(true);
    if(
      Required('Email' , email) &&
      Required('Password' , password)
    ){
      let obj = {
        email,
        password,
      };
      fetch(baseURL+'/manager/loginManager' , {
        method:'POST',
        headers: new Headers({
          "Content-Type":"application/json"
        }),
        body:JSON.stringify(obj)
      }).then(res => res.json())
      .then(res2 =>{
        if(res2?.status){
        navigate('/dashboard');
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
          <h1>Manager Login</h1>
          <EmailInput label={"Email"} size="large"  onChangeEvent={(e) => setEmail(e?.target?.value)} />
          <PasswordInput label={"Password"} size={"large"} onChangeEvent={(e) => setPassword(e?.target?.value)} />
          <RoundedButtonSolid
          loading={loading}
            btnText={"Login"}
            btnStyle={{
              backgroundColor: colors.darkblue,
              width: "100%",
              marginTop: "2%",
            }}
            onClick={login}
          />
          <div className="dash" /> 
            <p style={{margin:'auto' , textAlign:'center'}} >or</p> 
            <a href="employee-login">Login as Employee?</a>
            {/* <GoogleSocialBtn btnText={'Log In With Google'} onClick={googleRegister} />
            <FacebookSocialBtn btnText={'Log In With Facebook'} onClick={fbRegister} /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
