// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import navUserInfo from '../functions/navUserInfo';

class SignUpForm extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    const user = e.target.user.value;
    const pass = e.target.pass.value;
    const rety = e.target.rety.value;
    
    localStorage.setItem('user', user);
    
    alert(`Cadastrado com {user} - {pass} e {rety}`);
  }

  render() {
    return (
    <div className="SignUp-style">
        <h3 className="header">Informe seus dados</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label className="sr-only" htmlFor="user">E-mail</label>
                <i className="glyphicon glyphicon-user"></i>
                <input type="text" className="form-control" id="user" name="user" placeholder="E-mail" defaultValue={navUserInfo()} />
            </div>
            
            <div className="form-group">
                <label className="sr-only" htmlFor="pass">Senha</label>
                <i className="glyphicon glyphicon-lock"></i>
                <input type="password" className="form-control" id="pass" name="pass" placeholder="Senha" />
            </div>
            
            <div className="form-group">
                <label className="sr-only" htmlFor="rety">E-mail</label>
                <i className="glyphicon glyphicon-certificate"></i>
                <input type="password" className="form-control" id="rety" name="rety" placeholder="Repita a senha" />
            </div>
            
            <button className="btn btn-primary btn-lg btn-block" name="commit" type="submit" value="Cadastrar">Cadastrar</button>
        </form>
        
        <Link to="/signin" className="footer">Já tem usuário? &nbsp;<span>Tente logar</span></Link>
    </div>
    )
  }
}

export default SignUpForm;