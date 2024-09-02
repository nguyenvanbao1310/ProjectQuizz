import { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { postRegister, postCreateNewUser } from "../../services/apiService";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleConvertLogin = () => {
    navigate("/login");
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleRegister = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid Email");
      return;
    }
    if (!password) {
      toast.error("Invalid Password");
      return;
    }

    let data = await postCreateNewUser(email, password, userName);
    if (data.EC === 0) {
      toast.success(data.EM);
      handleConvertLogin();
    }
    if (data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="Register-container">
      <div className="header">
        <span>Already have an account?</span>
        <button onClick={() => handleConvertLogin()}>Login</button>
      </div>
      <div className="title col-4  mx-auto">Register</div>
      <div className="welcome col-4  mx-auto">Start your journey?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email (*)</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="pass-group">
          <label>Password (*)</label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {showPassword ? (
            <span className="icons-eye" onClick={() => setShowPassword(false)}>
              <VscEye />
            </span>
          ) : (
            <span className="icons-eye" onClick={() => setShowPassword(true)}>
              <VscEyeClosed />
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type={"text"}
            className="form-control"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div>
          <button className="btn-submit" onClick={() => handleRegister()}>
            Create my free account
          </button>
        </div>

        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            &#60;&#60; Go to Homepage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
