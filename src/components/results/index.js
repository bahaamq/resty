import React from 'react';
import './results.scss';
var JSONPretty = require('react-json-pretty');
require('react-json-pretty/themes/monikai.css');

function Results({data})  {
    return (
      <section data-testid="section">
        {/* <pre>{data ? JSON.stringify(data,undefined,2) : null}</pre> */}


       {data ?  <JSONPretty  id="json-pretty" data={data}></JSONPretty> : null}

      </section>
    );

}

export default Results;
