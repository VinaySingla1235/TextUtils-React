import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const [prevText,setPrevText]=useState("");
  const handleUpClick = () => {
    //console.log("Uppercase was clicked");
    setPrevText(text);
    //console.log(prevText);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };
  const handleLowerClick = () => {
    setPrevText(text);
    //console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  const handleOnChange = (event) => {
    //console.log("handleOnChange");
    setText(event.target.value);
  };
  const clear = () => {
    setPrevText(text);
    setText("");
    props.showAlert("Cleared the textbox!","success");
  };
  const capitalizeLines = () => {
    setPrevText(text);
    let lower = text.toLowerCase();
    //console.log(lower);
    //setText(lower);
    //console.log(text);
    let newText = [...lower];
    //console.log(newText);
    let i = 0;
    while (newText[i] === " ") {
      i++;
    }
    newText[i] = newText[i].toUpperCase();
    for (i; i < newText.length - 1; i++) {
      if (newText[i] === ".") {
        //console.log("found",i);
        let k = i;
        while (newText[k + 1] === " ") {
          //console.log("inner loop started");
          k++;
        }
        if(k>=newText.length-1){
          break;
        }
        //console.log(k);
        newText[k + 1] = newText[k + 1].toUpperCase();
        //console.log(newText[k+1]);
      }
    }
    //console.log(newText);
    //console.log(newText.join(""));
    setText(newText.join(""));
    props.showAlert("Capitalized the lines!","success");
  };
  const copyWholeText = () => {
    if (text.length > 0) {
      let copyText = text;
      //copyText.select();
      //copyText.setSelectionRange(0, 99999);
      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText);

      /* Alert the copied text */
      props.showAlert("Text copied!","success")
    } else {
      props.showAlert("Textbox is empty!","success")
    }
  };
  const handleExtraSpaces=()=>{
    setPrevText(text);
    //console.log("remove extra spaces function initiated");
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!","success")
    
  }
  /*let wordArray = text.split(" ");
  let wordCount = wordArray.length;
  let k = wordCount;
  for (let i = 0; i < wordCount; i++) {
    //console.log("loopStarted");
    //console.log(wordArray[i],i);
    if (wordArray[i] === "") {
      //console.log("found");
      k--;
    }
  }
  wordCount = k;
  //console.log(wordArray);
  //console.log(wordCount);
  //console.log(k);*/
  const undo=()=>{
    //console.log(prevText);
    setText(prevText);
    props.showAlert("Undone the changes!","success")
  }
  return (
    <>
      <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==="dark"?"#292d31":"white" , color:props.mode==="light"?"black":"white",}}
            
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick} disabled={text.length===0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLowerClick} disabled={text.length===0}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={clear} disabled={text.length===0}>
          Clear
        </button>
        <button className="btn btn-primary m-2" onClick={capitalizeLines} disabled={text.length===0}>
          Capitalize Lines
        </button>
        <button className="btn btn-primary m-2" onClick={copyWholeText} disabled={text.length===0}>
          Copy Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleExtraSpaces} disabled={text.length===0}>Remove Extra Spaces</button>
        <button className="btn btn-primary m-2" onClick={undo} disabled={prevText.length===0}>Undo</button>
        
      
        
    
      </div>
      <div className="container my-2" style={{color:props.mode==="light"?"black":"white"}}>
        <h3>Your text summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0 ? text:"Enter something in the text box to preview it here"}</p>
      </div>
    </>
  )
}
