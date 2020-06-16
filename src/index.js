import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { random } from 'lodash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quoteToDisplay: '',
      authorToDisplay: '',
      currentIndex: null,
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    const randomChoice = random(0, this.state.quotes.quotes.length - 1);

    console.log(encodeURIComponent(this.state.quoteToDisplay));

    this.setState({
      currentIndex: randomChoice,
      quoteToDisplay: this.state.quotes.quotes[randomChoice].quote,
      authorToDisplay: this.state.quotes.quotes[randomChoice].author,
    });
  }

  componentDidMount() {
    fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
      .then((data) => data.json())
      .then((q) =>
        this.setState({ quotes: q }, () => {
          this.setState(
            {
              currentIndex: random(0, this.state.quotes.quotes.length - 1),
            },
            () => {
              this.setState({
                quoteToDisplay: this.state.quotes.quotes[
                  this.state.currentIndex
                ].quote,
                authorToDisplay: this.state.quotes.quotes[
                  this.state.currentIndex
                ].author,
              });
            }
          );
        })
      );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center min100vh">
          <div className="card mx-auto" style={{ maxWidth: '20rem' }}>
            <div className="card-header">Random Quote Machine</div>
            <div className="card-body">
              <p className="card-text">{this.state.quoteToDisplay}</p>
              <p className="card-text text-right font-italic">
                {this.state.authorToDisplay}
              </p>
              <button
                type="button"
                className="btn btn-primary mr-2"
                onClick={this.changeQuote}
              >
                <i className="fas fa-plus-square"></i> New quote
              </button>
              <a href={encodeURIComponent(this.state.quoteToDisplay)} role="button" className="btn btn-info">
                <i className="fab fa-twitter"></i> Tweet quote
              </a>
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
