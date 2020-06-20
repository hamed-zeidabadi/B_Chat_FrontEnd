import React, { useState, useEffect } from "react";

const SideBar = ({ usernames, num }) => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    console.log("CDU SideBar");
    //get all users
    setuser(usernames);
    console.log("allusers :", usernames);
  }, [usernames]);

  return (
    <div className="sidebar " id="scrollbar">
      <div className=" sidebar_input ">
        <input
          type="text"
          name="search"
          id="search"
          className=" sidebar_input_item rounded "
          autoComplete="none"
          autoCorrect="none"
          placeholder="   جست و جو ...  "
        />
      </div>

      {user
        ? user.map((item) => (
            <div className=" sidebar_user">
              <div className="sidebar_user_item">
                <img
                  className="sidebar_user_item_img rounded-circle"
                  src={require(`../Assets/images/avatar${num}.png`)}
                  alt="avatar user"
                />
                <p className="sidebar_user_item_name">{item}</p>
                {/* <p className="sidebar_user_item_msg">آنلاین</p> */}
                {/* <p className="sidebar_user_item_badge badge badge-secondary "> </p>
          <p className="sidebar_user_item_badge badge badge-success "> </p> */}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default SideBar;
