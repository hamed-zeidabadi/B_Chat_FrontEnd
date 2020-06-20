import React, { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import Massage from "./Massage";
import MyMassage from "./MyMassage";
import io from "socket.io-client";

const ChatBox = ({ username, num }) => {
  const socket = io("http://localhost:5000/");

  const [massage, setMassage] = useState("");
  const [Mymassage, setMyMassage] = useState([]);

  const _handleClickBtn = (e) => {
    if (massage.trim() !== 0)
      return (
        socket.emit("sendMsg", { massage, username }),
        setMassage(""),
        setMyMassage([...Mymassage, massage])
      );
  };

  return (
    <>
      <div className="chatbox " id="scrollbar">
        <Massage user={username} num={num} massage={Mymassage} />
        {MyMassage ? <MyMassage massage={Mymassage} /> : null}
      </div>

      {/* input user  */}
      <div className="chatbox_input">
        <IoIosSend className="chatbox_input_icon" onClick={_handleClickBtn} />
        <input
          className="chatbox_input_element"
          type="text"
          onChange={(e) => setMassage(e.target.value)}
          value={massage}
        />
      </div>
    </>
  );
};

export default ChatBox;
