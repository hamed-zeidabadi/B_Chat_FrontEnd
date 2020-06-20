import React from "react";
const MyMassage = ({ massage }) => {
  return (
    <>
      {massage
        ? massage.map((items) => (
            <div className="chatbox_text">
              <div className="chatbox_text_content">
                <p>{items}</p>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default MyMassage;
