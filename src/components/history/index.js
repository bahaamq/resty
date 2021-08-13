import React from 'react';

import {useState,useEffect} from 'react'


function History({ historiesData,handleHistory }) {



    historiesData.map((item,index)=>{

        console.log(item)
    })


  return (
    <>
<ul>
        {historiesData.map((item, index) => {
          return (<li key={index}> {item.unload}</li>)
        })}
      </ul>

    </>
  );
}



export default History;
