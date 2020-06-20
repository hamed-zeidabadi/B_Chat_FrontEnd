import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import ChatBox from "./ChatBox";
import { useAlert } from "react-alert";
import io from "socket.io-client";

const Home = ({ username, num }) => {
  const socket = io("http://localhost:5000/");
  const alert = useAlert();
  const user = username && username.trim() !== 0 ? username : "مهمان";
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    console.log("CDU 1");

    // join user
    socket.emit("join", user);

    // msg for current user users
    socket.on("join", (msg) => {
      alert.show(
        <div style={{ textAlign: "center", width: "90%" }}>{msg}</div>,
        {
          type: "success",
        }
      );
    });

    // msg for all user users
    socket.on("message", (msg) => {
      alert.show(
        <div
          style={{
            textAlign: "center",
            width: "90%",
          }}
        >
          {msg}
        </div>,
        {
          type: "info",
        }
      );
    });

    //get all users
    socket.on("allUser", (users) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  return (
    <div className="container-fluid main ">
      <div className="home row ">
        <div className="col-3 ">
          <SideBar usernames={Users} num={num} />
        </div>
        <div className="col-9 ">
          <ChatBox username={user} num={num} />
        </div>
      </div>
    </div>
  );
};

export default Home;
