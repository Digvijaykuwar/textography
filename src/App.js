import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
// import About from "./About";
import React, { useState } from "react";
import Alert from "./Alert";
// import{ BrowserRouter,
//   Routes,
//   Route,
//   Link }
//   from "react-router-dom";



function App() {
  const[mode,setMode] = useState ('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ="grey";
      showAlert(" dark mode is on", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert(" light mode is on", "success")

    }
  }
  const customColor=()=>{
    
      let clr = document.getElementById("myColor").value;
      document.body.style.backgroundColor = clr;
    
  }
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="FirstSite" mode={mode} toggleMode={toggleMode} customColor= {customColor}/>
      <Alert alert ={alert}/> 
      <div className="container my-3">
      {/* <Routes> */}
            {/* <Route path="/home" element={}/> */}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            {/* <About /> */}
            {/* <Route path="/about" element={}/> */}
          {/* </Routes> */}
      </div>    
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

