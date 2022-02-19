
import './App.css';
import React, { Component } from 'react'
import TotalItems from './components/TotalItems';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="card">
            <TotalItems/>
          </div>
        </div>
         
      </div>
    )
  }
}

