// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const SignUpForm = () => (
    <div className="SignUp-style col-md-4 col-md-offset-4">
        <img className="logo" src="img/logo-90.png" />
        <div className="global">
            <h3 className="header">Informe seus dados</h3>
            <form>
                <div className="form-group">
                    <label className="sr-only" for="email">E-mail</label>
                    <i className="glyphicon glyphicon-user"></i>
                    <input type="text" className="form-control" id="email" name="email" placeholder="E-mail" />
                </div>
                
                <div className="form-group">
                    <label className="sr-only" for="password">Senha</label>
                    <i className="glyphicon glyphicon-lock"></i>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Senha" />
                </div>
                
                <div className="form-group">
                    <label className="sr-only" for="password">E-mail</label>
                    <i className="glyphicon glyphicon-certificate"></i>
                    <input type="password" className="form-control" id="retype" name="retype" placeholder="Repita a senha" />
                </div>
                
                <button className="btn btn-primary btn-lg btn-block" name="commit" tabindex="3" type="submit" value="Entrar">Cadastrar</button>
            </form>
            
            <Link to="/signin" className="footer">Já tem usuário? &nbsp;<span>Tente logar</span></Link>
        </div>
    </div>
)

export default SignUpForm;