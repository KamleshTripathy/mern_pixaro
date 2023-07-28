import { useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import  "./login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const handelSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    fetch("https://joyous-robe-tick.cyclic.app/user/update", {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if ((res.msg = "Password Updated Successfully")) {
          toast({
            title: "Password Updated Successfully.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/login");
        } else {
          toast({
            title: "Something Went Wrong",
            status: "error",
            isClosable: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="Container">
      <div id="Box1">
        <div id="sub1">
          <div id="name">
            <h1>Adorama</h1>
          </div>
          <div id="new">
            <h2>New Customer ?</h2>
            <p>
              {" "}
              <Link to="/signup"> Create New Account {">"}</Link>
            </p>
          </div>
        </div>
        <div id="sub2">
          <div id="sign">
            <h1>RESET PASSWORD</h1>
            <div>
              <form onSubmit={handelSubmit}>
                <label>Your Email :</label>
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label>New Password :</label>
                <br />
                <input
                  type="password"
                  placeholder=" New Password"
                  required
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                />

                <input type="submit" value="RESET PASSWORD" />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
