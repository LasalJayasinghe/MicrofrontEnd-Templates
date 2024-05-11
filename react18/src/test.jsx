import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  render() {
    return ([
        <h1>
          React App
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
        </h1>,
        <p>
          React Version: 18.0.2
        </p>
    ])
  }
}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    let rootElement = document.getElementById('root');
    if (!rootElement) {
      rootElement = document.createElement('div');
      rootElement.id = 'root';
      document.body.appendChild(rootElement);
    }

    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  }
}

customElements.define('react18-element', Mfe4Element);
