// <<<<<<< HEAD
// import React from 'react'
// import './Chatbot.css'

// const Chatbot = () => {
//     return (<>
//         <div className='chatbotSectionContainer' id='chatBot'>
//             <h2 className="chatbotSectionHeader">
//                 Meet with Neo
//             </h2>
//             <p className="chatbotIntro">Our AI chatbot is just a message away, providing you with instant medical guidance right when you need it, 24/7</p>
//             <div className="chatbotContainer"></div>
//         </div>
//     </>
//     )
// }

// export default Chatbot
// =======
import React, { useState, useEffect } from "react";
import "./Chatbot.css";
import OpenAI from "openai";
import neo from "../../Assets/neoLogo.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import clock from "../../Assets/clockicon.png";
import credit_card from "../../Assets/creditcard.png";
import message from "../../Assets/message.png";
import send from "../../Assets/send.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addChat } from "../../features/Chat";
import { useSelector } from "react-redux";
import Readchats from "../Readchats/Readchats";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chatbot = () => {
  const [error, seterror] = useState("");
  // const [flag, setflag] = useState(false);
  // const [count, setcount] = useState(0);
  const dispatch = useDispatch();
  const notify = () => toast(error);

  const [chatHistory, setChatHistory] = useState([]);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    name: "",
    days: "",
    problem: "",
  });
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  // useEffect(() => {
  //   if (count >= 2) {
  //     setflag(true);
  //   }
  // }, [flag]);

  let allchats = useSelector((state) => state.chats.chats);
  let user = useSelector((state) => state.user);

  const handleSubmit = async () => {
    if (formData.problem) {
      try {
        const openaiInstance = new OpenAI({
          apiKey: process.env.REACT_APP_OPENAI_API_KEY,
          dangerouslyAllowBrowser: true,
        });
        const completion = await openaiInstance.chat.completions.create({
          messages: [
            ...allchats,
            { role: "user", content: formData.problem },
            {
              role: "system",
              content: `If ${formData.problem} is not related to a health problem, strictly return "Please enter your health problem" and end the conversation. Otherwise, if ${formData.problem} is related to a health problem, refer to chat history for patient age, gender, and patient health problem. If you don't find all these details, ask the user for these details. If you find these details, then diagnose the patient.`,
            },
          ],
          model: "gpt-3.5-turbo",
        });
        const completionText = completion.choices[0].message.content;
        let userchat = {
          role: "user",
          content: formData.problem,
        };

        dispatch(addChat(userchat));
        let assistantchat = {
          role: "assistant",
          content: completionText,
        };
        dispatch(addChat(assistantchat));

        setFormData((prevData) => ({
          ...prevData,
          problem: "",
        }));
        if (user.user.email) {
          const dataToSend = {
            userchat: { role: "user", content: formData.problem },
            assistantchat: { role: "assistant", content: completionText },
            userData: { email: user.user.email, token: user.user.token },
          };

          await axios.post("https://nidaanbackend.onrender.com/chat", dataToSend);
        }
      } catch (error) {
        console.log(error);
        seterror("Error! Please try again later");
        setFormData((prevData) => ({
          ...prevData,
          problem: "",
        }));
        notify();
      }
    } else {
      seterror("please enter your problem");
      notify();
    }
  };
  return (
    <div className="chatbotSectionContainer" id='chatBot'>
      <h2 className="chatbotSectionHeader">Meet with Neo</h2>
      <p className="chatbotIntro">
        Our AI chatbot is just a message away, providing you with instant
        medical guidance right when you need it, 24/7
      </p>
      <div className="chatbotContainer">
        <div className="chatbotContainer-top">
          <img src={neo} alt="neo-logo" />
          <div className="chatbotContainer-top-content">
            <p>Neo</p>
            <p>Online</p>
          </div>
        </div>
        <div className="chatbotContainer-chatarea">
          <Readchats />
        </div>
        <div className="chatbotContainer-textarea">
          <textarea
            value={formData.problem}
            onChange={(e) => handleChange("problem", e.target.value)}
            required
            placeholder="Eg: type here about your problem"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="app-submitbutton"
          >
            {window.innerWidth > 900 ? <p>Send</p> : ""}
            <img src={send} alt="" />
          </button>
          <ToastContainer bodyClassName="custom-toast-text" />
        </div>
        {user.user.email ? (
          <div className="chatbotContainer-bottom">
            <Link to="/chathistory">History</Link>
          </div>
        ) : (
          <div className="chatbotContainer-bottom">
            <p className="chatbotContainer-bottom-title">
              In the Demo chat, you have 2 messages left. Register now and get:
            </p>
            <div>
              <div>
                <img src={message} alt="" />
                <p>More Messages</p>
              </div>
              <div>
                <img src={clock} alt="" />
                <p>chat History</p>
              </div>
              <div>
                <img src={credit_card} alt="" />
                <p> No credit card required</p>
              </div>
            </div>
            <Link to="/register">
              <button className="registerBtn">Register Now</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
// >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867
