import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [Mode , setMode]=useState('light');
  /*const [blueMode , setBluishMode]=useState('light');*/
  const [modeRev, revMode]=useState('dark');
  const[alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  //let modeRev="dark";
  const toggleMode=()=>{
    if(Mode ==="light"){
      setMode("dark");
      revMode("light");
      document.body.style.backgroundColor='#0f0b0b';
      showAlert("Dark mode has been enabled","success");
      //document.title='Text-Utils - Dark Mode';
    }
    else{
      setMode("light");
      revMode("dark");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      //document.title='Text-Utils - Light Mode';
    }
    //console.log(Mode,modeRev);
  }
  const toggleModeBlue=()=>{
    if(Mode ==="light"){
      setMode("dark");
      revMode("light");
      document.body.style.backgroundColor='#08053b';
      showAlert("Bluish Dark mode has been enabled","success");
      //document.title='Text-Utils - Bluishdark Mode';
    }
    else{
      setMode("light");
      revMode("dark");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      //document.title='Text-Utils - Light Mode';
    }
    //console.log(Mode,modeRev);
  }
  
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} /*blueMode={blueMode} */toggleModeBlue={toggleModeBlue}  modeRever={modeRev}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={Mode} />
          </Route>
          <Route exact path="/">
          <TextForm heading = "Enter the text to analyze below" mode={Mode} modeRever={modeRev} showAlert={showAlert}/>
          </Route>
        </Switch>
      
      
      {/*<About/>*/}
      </div>
      
      </Router>
    </>
  );
}

export default App;
