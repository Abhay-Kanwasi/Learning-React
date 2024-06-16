import { Button, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../actions/user";
import "./Login.css";
// import { useAlert } from "react-alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const dispatch = useDispatch();
  // const alert = useAlert();
  // const { loading, message, error } = useSelector((state) => state.login);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(login(email, password));
  };

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     // dispatch({ type: "CLEAR_ERRORS" });
  //   }
  //   if (message) {
  //     alert.success(message);
  //     // dispatch({ type: "CLEAR_MESSAGE" });
  //   }
  // }, [alert, error, message, dispatch]);

  return (
    <div className="login">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={submitHandler}>
        <Box className="loginFormHeading center">
          <Typography variant="h4">
            Admin Pannel
          </Typography>
        </Box>
          <div>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;