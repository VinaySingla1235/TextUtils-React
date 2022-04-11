import { useState } from "react";
import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  const [Mode , setMode]=useState('light');
  const [modeRev, revMode]=useState('dark');
  //let modeRev="dark";
  const toggleMode=()=>{
    if(Mode ==="light"){
      setMode("dark");
      revMode("light");
      document.body.style.backgroundColor='#0f0b0b';
    }
    else{
      setMode("light");
      revMode("dark");
      document.body.style.backgroundColor='white';
    }
    //console.log(Mode,modeRev);
  }
  
  return (
    <>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} modeRever={modeRev}/>
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below" mode={Mode} modeRever={modeRev}/>
      {/*<About/>*/}
      </div>
      
      
    </>
  );
}

export default App;
