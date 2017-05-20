// Imports
import React from 'react'

export default class FinanceAccount extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {    
    return (
    <div className="page-finance-account">
            
        <div className="row ferramenta">
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="btn-group  btn-group-justified" role="group">
                  <a href="#" className="btn btn-default" role="button">Nova conta</a>
                </div>
            </div>
        </div>
    
      <table className="table table-striped table-condesend table-bordered account-table">
        <thead>
            <tr>
                <th className="header2">Conta</th>
                <th className="header2">Tipo</th>
                <th className="header4">Ação</th>
            </tr>
        </thead>
        
        <tbody>
            {[...Array(10)].map((x, i) =>
            <tr className={"transation-"+i}>
                <td className="line2">Banco do brasil</td>
                <td className="line2">Conta corrente</td>
                <td className="line4">Editar Excluir</td>
            </tr>
            )}
        </tbody>
      
      </table>
      
      
    </div>
    )
  }
}