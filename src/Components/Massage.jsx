import React from "react";
import _ from "lodash";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const Massage = ({ user, num, massage }) => {
  const socket = io("http://localhost:5000/");
  const [chats, setchats] = useState([]);

  useEffect(() => {
    console.log("CDU SEND CHAT");
    socket.on("getMsg", (msg) => {
      // setchats([...chats, msg]);
      const index = msg.filter((index) => index.user !== user);
      setchats(index);
    });
  }, []);

  return (
    <>
      {chats.length !== 0 ? (
        chats.map((item) => (
          <div className="chatbox_msg">
            <img
              src={require(`../Assets/images/avatar${num}.png`)}
              alt="avatar for user"
            />
            <p className="chatbox_msg_p1">{item.user}</p>
            <div className="chatbox_msg_content">
              <p className="chatbox_msg_p2">{item.msg}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="chatbox_msg">
          <div className="chatbox_msg_content">
            <p className="chatbox_msg_p2"> صندوق پیام خالی است ! </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Massage;
