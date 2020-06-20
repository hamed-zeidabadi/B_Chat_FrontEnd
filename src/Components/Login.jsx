import React, { useState } from "react";
import logo from "../Assets/images/logo.png";
import { IoIosCheckmark } from "react-icons/io";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import Home from "./Home";
import { useHistory } from "react-router-dom";
import _ from "lodash";
const rand = _.random(1, 8); // random number for random avatar image !
const Login = () => {
  let history = useHistory();
  const alert = useAlert();
  const [username, setusername] = useState("");
  const [isOk, setisOk] = useState(false);
  const [Number, setNumber] = useState(1);

  const handleClick = (e) => {
    e.preventDefalut();

    history.replace("/home");
  };

  const _handleSubmit = () => {
    //  INFO: "info";
    //  SUCCESS: "success";
    //  ERROR: "error";

    if (username.trim() <= 3 || username.length <= 3) {
      return alert.show(
        <div style={{ textAlign: "center", width: "90%" }}>
          نام کاربری حداقل باید 4 حرف باشد .{" "}
        </div>,
        {
          type: "error",
        }
      );
    }

    alert.show(
      <div style={{ textAlign: "center", width: "90%" }}>
        ثبت نام با موفقیت انجام شد
      </div>,
      {
        type: "success",
      }
    );
    setTimeout(() => {
      setisOk(true);
    }, 2500);
  };

  return (
    <>
      {isOk ? (
        <Home username={username} num={rand} />
      ) : isOk ? null : (
        <div className="login">
          <div className="login_items">
            <img src={logo} alt="log B chat" className="login_items_logo" />
            <p className="login_items_desc">
              به 'بی چت' خوش آمدید، لطفا یک نام کاربری حداقل 4 کلمه‌ای برای خود
              انتخاب کنید .
            </p>
            <div className="login_items_inputUser">
              <label htmlFor="username"> نام کاربری :</label>
              <input
                autoCorrect="none"
                required
                type="text"
                name="username"
                id="username"
                onChange={(e) => setusername(e.target.value.trim().toString())}
              />
              {username.length >= 6 ? (
                <IoIosCheckmark className="login_icon" />
              ) : null}
            </div>

            <Link to={isOk ? (e) => handleClick : ""}>
              <input
                type="submit"
                className="login_items_btn"
                value="ورود"
                onClick={_handleSubmit}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
