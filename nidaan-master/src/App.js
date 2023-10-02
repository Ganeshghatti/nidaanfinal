// <<<<<<< HEAD
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import NavBar from './Component/Header/NavBar';
// import Home from './Component/Home/Home';
// import MeetNeo from './Component/MeetNeo/MeetNeo';
// import Footer from './Component/Footer/Footer';
// import Pricing from './Component/Pricing/Pricing';
// import Blogs from './Component/Blogs/Blogs';
// import ContactUs from './Component/ContactUs/ContactUs';
// import Register from './Component/Register/Register';
// import SignIn from './Component/Register/SignIn/SignIn';
// import Login from './Component/Login/Login';

// import './App.css';

// function App() {

//   const location = useLocation();
//   // console.log(location)
//   const pathsWithoutFooter = ['/register', '/signin'];
//   const shouldRenderFooter = !pathsWithoutFooter.includes(location.pathname);
// =======
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./Component/Header/NavBar";
import Home from "./Component/Home/Home";
import MeetNeo from "./Component/MeetNeo/MeetNeo";
import Footer from "./Component/Footer/Footer";
import Pricing from "./Component/Pricing/Pricing";
import Blogs from "./Component/Blogs/Blogs";
import ContactUs from "./Component/ContactUs/ContactUs";
import Register from "./Component/Register/Register";
import SignIn from "./Component/Register/SignIn/SignIn";
import Login from "./Component/Login/Login";
import Chathistory from "./Component/Chathistory/Chathistory";
import "./App.css";
import { useDispatch } from "react-redux";
import { saveuser } from "./features/User";
import { useSelector } from "react-redux";
import Sucess from "./Component/Payment/Sucess";
import Failure from "./Component/Payment/Failure";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const pathsWithoutFooter = ["/register", "/signin"];
  const shouldRenderFooter = !pathsWithoutFooter.includes(location.pathname);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      dispatch(
        saveuser({ email: user.email, token: user.token, type: user.type })
      );
    }
  }, []);
  // >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867

  return (
    <>
      <NavBar />
      <Routes>
        {/* <<<<<<< HEAD */}
        <Route path="/" element={<Home />} />
        <Route path="/meetneo" element={<MeetNeo />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chathistory" element={<Chathistory />} />
        <Route path="/success" element={<Sucess />} />
        <Route path="/failed" element={<Failure />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path="*" element={<div>404! Page Not Found</div>} />
      </Routes>
      {shouldRenderFooter && <Footer />} {/* Conditionally render the footer */}
      {/* ======= */}
      {/* <Route path="/" element={<Home />} />
        <Route path="/meetneo" element={<MeetNeo />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chathistory" element={<Chathistory />} />
        {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path="*" element={<div>404! Page Not Found</div>} />
      </Routes>
      {shouldRenderFooter && <Footer />} Conditionally render the footer */}
      {/* // >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867 */}
    </>
  );
}

export default App;
