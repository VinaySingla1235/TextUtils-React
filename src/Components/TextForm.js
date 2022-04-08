import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    //console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    //console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    //console.log("handleOnChange");
    setText(event.target.value);
  };
  const clear = () => {
    setText("");
  };
  const capitalizeLines = () => {
    let lower = text.toLowerCase();
    console.log(lower);
    //setText(lower);
    console.log(text);
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
        //console.log(k);
        newText[k + 1] = newText[k + 1].toUpperCase();
        //console.log(newText[k+1]);
      }
    }
    //console.log(newText);
    //console.log(newText.join(""));
    setText(newText.join(""));
  };
  const copyWholeText = () => {
    if (text.length > 0) {
      let copyText = text;
      //copyText.select();
      //copyText.setSelectionRange(0, 99999);

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText);

      /* Alert the copied text */
      alert("Copied the text: " + copyText);
    } else {
      alert("Textbox is empty.");
    }
  };
  let wordArray = text.split(" ");
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
  //console.log(k);

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary m-2" onClick={capitalizeLines}>
          Capitalize Lines
        </button>
        <button className="btn btn-primary m-2" onClick={copyWholeText}>
          Copy Text
        </button>
        
      
        
    
      </div>
      <div className="container my-2">
        <h3>Your text summary</h3>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>{0.008 * wordCount} Minutes read</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  )
}
