// Imports
import React from 'react'
import ReactDOM from 'react-dom';
import {
    Route,
    Link
} from 'react-router-dom'

// Pages

// Class Principal
export default class AppSystem extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="system-ops">
        
        <h1>Ops... erro 404</h1>
        <p>A página requerida não existe no sistema</p>
        
    </div>
    )
  }
}