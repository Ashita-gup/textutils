import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
   // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase ! ", "success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces ! ", "success");
  }

  const handleCopy = ()=>{
    console.log("Copied text ! ")
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard ! ", "success");
  }

  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked");
     let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to LowerCase ! ", "success");
   }

   const handleClearClick = ()=>{
    // console.log("Uppercase was clicked");
     let newText = '';
     setText(newText);
     props.showAlert("Text Cleared !", "success");
   }
  const handleOnChange = (event)=>{
    
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  //setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'#0a1641':'white'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}}></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove the extra spaces</button>
  </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#0a1641':'white'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * (text.split(" ").length) } Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}