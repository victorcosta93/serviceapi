// Imports
import React from 'react'

export default class FinanceList extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {    
    return (
    <div className="page-home">
      <table className="table table-striped table-condesend">
        <thead>
            <th>&nbsp;</th>
            <th>Movimentação</th>
            <th>Valor</th>
            <th>Ação</th>
        </thead>
        
        <tbody>
            <tr>
                <td><input type="checkbox" /></td>
                <td>Contas de casa</td>
                <td>R$ 250,36</td>
                <td>Editar Excluir</td>
            </tr>
            <tr>
                <td><input type="checkbox" /></td>
                <td>Contas de casa</td>
                <td>R$ 250,36</td>
                <td>Editar Excluir</td>
            </tr>
            <tr>
                <td><input type="checkbox" /></td>
                <td>Contas de casa</td>
                <td>R$ 250,36</td>
                <td>Editar Excluir</td>
            </tr>
            <tr>
                <td><input type="checkbox" /></td>
                <td>Contas de casa</td>
                <td>R$ 250,36</td>
                <td>Editar Excluir</td>
            </tr>
        </tbody>
        <thead>
            <th>&nbsp;</th>
            <th>Total:</th>
            <th>R$ 250,36</th>
            <th>&nbsp;</th>
        </thead>
      
      </table>
    </div>
    )
  }
}