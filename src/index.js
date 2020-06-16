import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteDisplayed: 'This will be the quote to display!',
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center min100vh">
          <div className="card w-50 mx-auto">
            <div className="card-body">
              <h5 className="card-title">Random quote machine</h5>
              <p className="card-text">{this.state.quoteDisplayed}</p>
              <button className="btn btn-primary">Get new quote</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
