import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = async (requestParams) => {

    // mock output
    //requestParams holds the value of method and url input coming from the form.
    try
    {
      this.setState({requestParams});

      const response = await fetch(requestParams.url, {
        method:requestParams.method,
        mode: 'cors'
    })

    const data =  await response.json();

    this.setState({data});

    console.log("success")
    }

catch(e){

  this.setState({data:{detail: `Method '${this.state.requestParams.method}' not allowed.`
}})
console.log(e,"failure")
}


  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div>
        <Form  handleApiCall={this.callApi} />
        <Results data={this.state.data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
