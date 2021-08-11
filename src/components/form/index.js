import React from 'react';

import './form.scss';

import {useState,useEffect} from 'react'


function Form({ handleApiCall }) {
  let textInput = React.createRef();
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [textareas, setShow] = useState(false);
  const [showload, setLoad] = useState(false);


 



  






  async function  handleSubmit(e) {
    e.preventDefault();

    //Take values from the state method:method , url:url 
    const formData = {
      method,
      url,
      textareas,
      showload:true
    };


   await  handleApiCall(formData);
    setShow(false)
  }




  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="myinput" ref={textInput} name='url' type='text' onChange={() => setUrl(textInput.current.value)} />
          <button type="submit" data-testid="mybtn" >GO!</button>
        </label>
        <label className="methods">
          <span id="get" data-testid="getmethod" onClick={() => setMethod("GET")
        
        
        }>GET</span>
          <span id="post" onClick={() => {
            setMethod("POST")

            setShow(true)
          }
          }>POST</span>
          <span id="put" onClick={() => {
            setMethod("PUT")
            setShow(true)
          }
          }>PUT</span>
          <span id="delete" onClick={() => setMethod("DELETE")}>DELETE</span>
        </label>
      </form>
    </>
  );
}



export default Form;
