import { useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import styles from "./signup.module.css";

const Signup = () => {
  const [firstname,setFirstName] = useState("")
  const[lastname,setLastName] = useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]= useState("")
  const[cpassword,setcpassword]=useState("")
  const toast = useToast()
const navigate = useNavigate()

const handelSubmit = async(e)=>{
  e.preventDefault()
  const payload ={
    firstname,
    lastname,
    email,
    password,
    cpassword
  }
   

 

  await fetch(`${process.env.REACT_APP_BASE_URL}/user/signup`,{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
      "Content-type":"application/json"
    }
  }).then(res=>res.json())
  .then(res=> {
    if(res.msg==="Registration Successfull"){
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/login")
    }
  })
  .catch(err=>console.log(err))
}

 

  return (
    <div id={styles.Container}>
      <div id={styles.Box1}>
        <div id={styles.sub1}>
          <div id={styles.name}>
            <h1>Pexaro</h1>
          </div>
          <div id={styles.new}>
            <h2>Have an Account?</h2>
            <p> <Link  to="/login"> SIGN IN {">"}</Link></p>
          </div>
        </div>
        <div id={styles.sub2}>
          <div id={styles.sign}>
            <h1>Create An Account</h1>
            <div>
              <form onSubmit={handelSubmit}>
                <div id={styles.fl}>
             
                 
                 <input type="text" placeholder="First Name" required value={firstname} onChange={(e)=>setFirstName(e.target.value)} /><br />
                  
                 <input type="text" placeholder="Last Name" required value={lastname} onChange={(e)=>setLastName(e.target.value)} /><br />
                </div>
             
              

                 
                
                <label id={styles.ps}>Your Email :</label>
                <br />
                <input id={styles.ps} type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <label>Your Password :</label>
                <br />
                <input type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                
                <label>Confirm Password :</label>
                <br />
                <input type="text" placeholder="Confirm Password" required value={cpassword} onChange={(e)=>setcpassword(e.target.value)} />
               
                <div id={styles.lab}>
                <label>
                  <input type="checkbox" name="remember" /> Yes, I would like to receive expert tips, special offers, and product news.
                </label><br />
                <label>
                  <input type="checkbox" name="remember" />  Yes, sign me up for Adorama Rewards.
                </label><br />
                <label>
                  <input type="checkbox" name="remember" />  Remember Me.
                </label><br />
                </div>
                
                <input type="submit" value="CREATE ACCOUNT" />
                 
              </form>
        
            </div>
            
         </div>
         </div>
      </div>
    </div>
  );
};

export default Signup;

 
