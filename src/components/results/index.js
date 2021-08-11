import React from 'react';
import './results.scss';
var JSONPretty = require('react-json-pretty');
require('react-json-pretty/themes/monikai.css');
import Loading from "../../Loading";


function Results({data})  {

    return (
<>
    <section data-testid="section">
        {/* <pre>{data ? JSON.stringify(data,undefined,2) : null}</pre> */}


       {data ?  <JSONPretty  id="json-pretty" data={data}></JSONPretty> : <Loading type="balls" color="red"/>
}

      </section>
      
      </>
      
    );

}

export default Results;
