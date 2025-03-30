
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert'
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  // const[greenMode,setGreenMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }
  const modes = {
    light: { bg: 'white', text: 'black', Name:'Light' },
    dark: { bg: '#233979', text: 'white',Name:'Dark' },
    success: { bg: '#99BC85', text: '#E4EFE7',Name:'Green' },
    danger: { bg: '#EB5A3C', text: '#E7D283',Name:'Red' }
  };
  // const toggleGreenMode = () => {
  //   if (mode === 'light' || mode === 'dark' || mode === 'danger') {
  //     setMode('success');
  //     document.body.style.backgroundColor = '#99BC85';
  //     document.body.style.color = '#E4EFE7';
  //     showAlert("Green Mode has been enabled", "success");
  //     console.log(mode);

  //   }
  //   else if (mode === 'success') {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //     showAlert("Light Mode has been enabled", "success");
  //     console.log(mode);

  //   }
  // }
  // const toggleRedMode = () => {
  //   if (mode === 'light' || mode === 'dark' || mode === 'success') {
  //     setMode('danger');
  //     document.body.style.backgroundColor = '#EB5A3C';
  //     document.body.style.color = '#E7D283';
  //     showAlert("Red Mode has been enabled", "danger");
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //     showAlert("Light Mode has been enabled", "success");
  //   }
  // }
  // const toggleMode = () => {
  //   if (mode === 'light' || mode === 'success' || mode === 'danger') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#233979';
  //     document.body.style.color = 'white';
  //     showAlert("Dark Mode has been enabled", "success");
  //     console.log(mode);

  //   }
  //   else if (mode === 'dark') {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //     showAlert("Light Mode has been enabled", "success");
  //     console.log(mode);
  //   }
  // }
  
  const changeMode = (newMode) => {
    if (modes[newMode]) {
      setMode(newMode);
      document.body.style.backgroundColor = modes[newMode].bg;
      document.body.style.color = modes[newMode].text;
      showAlert(`${modes[newMode].Name} Mode has been enabled`, "success");
    }
  };
  return (
    <>
       <Router>
        <Navbar title="TextFuzion" aboutText="About Us" mode={mode} toggleMode={()=>{
          changeMode(mode==='dark'?'light':'dark')
        }}
         toggleGreenMode={()=>{
          changeMode(mode==='success'?'light':'success')
         }}
          toggleRedMode={()=>{
            changeMode(mode==='danger'?'light':'danger')
          }} />
        <Alert alert={alert} />
         <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={ 
            <Textform
              heading="TextFuzion- Word Counter, Character Counter,Remove Extra Spaces"
              mode={mode}
              showAlert={showAlert}
            />
           } />
        </Routes>
      </Router> 
    </>

  );
}

export default App;
