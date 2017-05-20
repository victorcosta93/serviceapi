// Imports
import React from 'react'
import {
    Route,
    Link
} from 'react-router-dom'

export default class AppSystem extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {    
    return (
    <div className="private-app">
    
        <nav className="private-appNav">
            <ul>
            {
                this.props.menu.map((x, i) =>
                    <li><Link to={x.url}><i className={x.icon} />{x.name}</Link></li>
                )
            }
            </ul>
        </nav>
        <div className="private-appBar">
            <h1>{this.props.name}</h1>
        </div>
        <div className="private-appBody">
            {this.props.children}
        </div>
        
    </div>
    )
  }
}