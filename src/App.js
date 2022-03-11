// import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
        items: [],
        DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch(
    "https://raw.githubusercontent.com/srijanDubey/chitkara-test-api-mock/main/data.json")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json.data,
                DataisLoaded: true
            });
        })
    }

  render() {
    const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

    return (
      <div className = "App">
          
          <h1> Fetch data from an api in react </h1>  {
            
              items.map((data) => ( 
                <ol key = { data.id } >
                  <div className="list">
                    <div className="left">
                      { <img alt="user_profile" src={data.avatar_url} /> }
                    </div>
                    <div className="right">
                      <div className="username">Username : { data.login }</div>
                      <div className="type">Type : { data.type }</div>
                      {/* Html_Url: [data.url] */}
                    </div> 
                  </div>
                </ol>
              ))
          }
        </div>
    );
  }
}

export default App;
