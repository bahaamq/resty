import React from 'react';

import {useState,useEffect} from 'react'


function History({ historiesData,handleHistory }) {


   function  handleclick(item) {

    handleHistory(item)
  }



  return (
    <>
        <h4>History</h4>
{historiesData.length <=0 &&

<p> history is empty </p>
}
      {historiesData.map((item,index) => (
        <>
        <button key={index+Math.random()} onClick={() => handleclick(item.requestParams)}> {item.requestParams.url}</button>

</>        
      ))}


    </>
  );
}



export default History;
