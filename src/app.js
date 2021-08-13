

import React from 'react';

import './app.scss';
import {useState,useEffect,useReducer} from 'react'

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';



const initialState = {
    data: null,
    requestParams:{},
    unload:false,
  };
let history=[]


function reducer(state = initialState, action){
//...state in order not to lose objects at another types still have(unload,params,data)
  if(action.type === 'Truthy')
  {
    return { ...state,unload:action.value };

  }
  if(action.type === 'Res')
{

  return {...state,requestParams:action.value};

  }
  if(action.type === 'Data')
  {
    history.push(state)
    return {...state,data:action.value};
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  let callApi = async (requestParams) => {


     dispatch({type: 'Truthy', value: true})


     dispatch({type: 'Res', value: requestParams})

    try
    {


      const response = await fetch(requestParams.url, {
        method:requestParams.method,
        mode: 'cors'
    })

    const data =  await response.json();

  dispatch({type: 'Data', value: data})


    }

    catch(e){


      dispatch({type: 'Data', value: `Method '${requestParams.method}' not ready .`})
    
  }
    
    
  
}

  useEffect(()=>{
console.log("random")
  },[state.requestParams])


return (
  <React.Fragment>
    <Header />
   
    <Form  handleApiCall={callApi} />
{
  history.length > 1 &&
    <History historiesData={history} />
}

    {
    state.unload &&

    <Results data={state.data} />

}



    <Footer />
  </React.Fragment>
);

}

export default App;