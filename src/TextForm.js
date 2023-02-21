import React, { useState } from "react";

export default function TextForm(props) {
  const handleUlClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Coverted to UpperCase","success")
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Coverted to LowerCase","success")

  }

  const firstCapital = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText)
  }
  const handleOnChange = (e) => {
    setText(e.target.value)
  }
  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control" value={text} id="textarea" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8" placeholder="Enter Text Here"></textarea>
        </div>
        <button type="submit" onClick={handleUlClick} className="btn btn-primary">Convert To Upper Case</button>
        <button type="submit" onClick={handleLoClick} className="btn btn-primary">Convert To Lower Case</button>
        <button type="submit" onClick={firstCapital} className="btn btn-primary">Convert To first letter to Capital Case</button>


      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <p>{text.split(" ").length}words ans {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p> 
      </div>
    </>

  );
}
