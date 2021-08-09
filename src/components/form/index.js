import React from 'react';

import './form.scss';

import {useState} from 'react'


function Form({handleApiCall})
{
  let textInput = React.createRef();
  const [method, setMethod] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    //Take values from the state method:method , url:url 
    const formData = {
      method,
      url
    };


    handleApiCall(formData);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input  data-testid="myinput" ref={textInput} name='url' type='text' onChange={()=>setUrl(textInput.current.value)}/>
          <button type="submit" data-testid="mybtn" >GO!</button>
        </label>
        <label className="methods">
          <span id="get" data-testid="getmethod" onClick={()=>setMethod("GET")}>GET</span>
          <span id="post" onClick={()=>setMethod("POST")}>POST</span>
          <span id="put" onClick={()=>setMethod("PUT")}>PUT</span>
          <span id="delete" onClick={()=>setMethod("DELETE")}>DELETE</span>
        </label>
      </form>
    </>
  );
}



export default Form;
