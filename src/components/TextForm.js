import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('UpperCase was clicked' + text);
        let newtext= text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = ()=>{
        // console.log('UpperCase was clicked' + text);
        let newtext= text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearClick = ()=>{
        // console.log('UpperCase was clicked' + text);
        let newtext= '';
        setText(newtext);
        props.showAlert("Cleared the text", "success");
    }

    let newtext;
    const handleInverseClick = ()=>{
        // console.log('UpperCase was clicked' + text);
        if (newtext === text.toLowerCase()){
            setText(newtext = text.toUpperCase()); 
            }else{
                setText(newtext = text.toLowerCase());
            }
            props.showAlert("Inverted the text", "success");
        // setText(newtext);
    }

  
    const handleOnChange = (event)=>{
        // console.log('On Change');
        setText(event.target.value)
    }
        
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1 >{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary my-1 " onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
<button className="btn btn-warning mx-1 my-2"  onClick={handleInverseClick}>Inverse Case</button>
        </div>

        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read these words</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to preview here"}</p>
        </div>
        </>
    )
}
