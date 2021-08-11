import React from 'react';

import './app.scss';
import {useState,useEffect} from 'react'

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';





function App() {
  const [data, setData] = useState(null);
  const [requestParams, setparams] = useState([]);
  const [unload, setUnload] = useState(false);

 let callApi = async (requestParams) => {
    setUnload(requestParams.showload)
    // mock output
    //requestParams holds the value of method and url input coming from the form.
   console.log(requestParams.textareas)
   setparams(requestParams)



  }

  
  useEffect(async () => {
    console.log("hello from app")
    try
    {
      

      const response = await fetch(requestParams.url, {
        method:requestParams.method,
        mode: 'cors'
    })

    const data =  await response.json();

    setData({data:data})  

    console.log("success")
    }

    catch(e){


    setData({data:{detail: `Method '${requestParams.method}' not allowed.`
    
  }}
    
    
  )
console.log(e,"failure")
}


  }, [requestParams])
 
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form  handleApiCall={callApi} />
{requestParams.textareas &&

<textarea className="comment"> JSON Body : 
  </textarea>
}


        {
        unload &&
   
        <Results data={data} />


  }


 
        <Footer />
      </React.Fragment>
    );
  
  }

export default App;
