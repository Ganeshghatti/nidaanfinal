import React from "react";
import { useSelector } from "react-redux";

const Readchats = () => {
  const chatHistory = useSelector((state) => state.chats.chats);
  return (
    <>
      {chatHistory.map((message, index) => (
        <span
          key={index}
          className={`chat-message ${
            message.role === "assistant" ? "left" : "right"
          }`}
        >
          {message.content}
        </span>
      ))}
    </>
  );
};

export default Readchats;
