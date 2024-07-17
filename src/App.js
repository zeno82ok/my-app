import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";
import React from "react";

function App() {
  const [Mode, setMode] = useState("light")
  const [Alerts, setAlerts] = useState({})

  const showAlert = (type, message) => {
    setAlerts({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlerts({})
    }, 3000)
  }

  const toggleTheme = () => {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("warning", "light mode has been enable");
    } else {
      setMode("dark")
      document.body.style.backgroundColor = "#000";
      document.title = "TextUtiles - Dark";
      showAlert("success", "dark mode has been enable");
    }
  }
  const toggleBlue = () => {
    if (Mode==="light" || Mode==="dark" || Mode==="danger") {
      setMode("primary")
      document.body.style.backgroundColor = "#10012D";
      showAlert("success", "blur mode has been enable");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("warning", "light mode has been enable");
    }
  }
  const toggleRed = () => {
    if (Mode==="light" || Mode==="dark" || Mode==="primary") {
      setMode("danger")
      document.body.style.backgroundColor = "#7D1108";
      showAlert("success", "blur mode has been enable");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("warning", "light mode has been enable");
    }
  }

  return (
    <>
      <Navbar title="TextUtiles" link1="Home" link2="About" mode={Mode} toggle={toggleTheme} toggleB={toggleBlue} toggleR={toggleRed}/>
      <Alert alert={Alerts} />
      <div className="container">
        <Form title="Enter your Text below" mode={Mode} preview="Enter some text to analyze" />
      </div>
    </>
  );
}

export default App;
