// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const AuthenticationForm = () => (
    <div>
        <h3>Dados da sua conta</h3>
        <form>
            <label>Seu email:</label>
            <input type="email" name="email" id="email" value="" />
            
            <label>Sua senha:</label>
            <input type="password" name="password" id="password" value="" />
        </form>
    </div>
)

export default AuthenticationForm;