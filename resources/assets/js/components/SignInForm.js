// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const SignInForm = () => (
    <div className="SignIn-style col-md-4 col-md-offset-4">
        <div className="global">
            <h3 className="header">Dados da sua conta</h3>
            <form>
                <div className="form-group">
                    <label className="sr-only" for="email">E-mail</label>
                    <i className="glyphicon glyphicon-user"></i>
                    <input type="text" className="form-control" id="email" name="email" placeholder="E-mail" />
                </div>
                
                <div className="form-group">
                    <label className="sr-only" for="password">E-mail</label>
                    <i className="glyphicon glyphicon-lock"></i>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Senha" />
                </div>
                
                <button className="btn btn-primary btn-lg btn-block" name="commit" tabindex="3" type="submit" value="Entrar">Entrar</button>
            </form>
            
            <Link to="/signup" className="footer">Novo por aqui? &nbsp;<span>Cadastre-se</span></Link>
        </div>
    </div>
)

export default SignInForm;