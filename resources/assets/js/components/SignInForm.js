// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import navUserInfo from '../functions/navUserInfo';

class SignInForm extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    const user = e.target.user.value;
    const pass = e.target.pass.value;
    
    localStorage.setItem('user', user);
    
    alert(`Logado com ${user} - ${pass}`);
  }
  
  render() {

    return (
    <div className="SignIn-style">
        <h3 className="header">Dados da sua conta</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label className="sr-only" htmlFor="user">E-mail</label>
                <i className="glyphicon glyphicon-user"></i>
                <input type="text" className="form-control" id="user" name="user" placeholder="E-mail" defaultValue={navUserInfo()} />
            </div>
            
            <div className="form-group">
                <label className="sr-only" htmlFor="pass">E-mail</label>
                <i className="glyphicon glyphicon-lock"></i>
                <input type="password" className="form-control" id="pass" name="pass" placeholder="Senha" />
            </div>
            
            <button className="btn btn-primary btn-lg btn-block" name="commit" type="submit" value="Entrar">Entrar</button>
        </form>
        
        <Link to="/signup" className="footer">Novo por aqui? &nbsp;<span>Cadastre-se</span></Link>
    </div>
    )
  }
}

export default SignInForm;