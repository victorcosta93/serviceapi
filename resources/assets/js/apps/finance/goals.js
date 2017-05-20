// Imports
import React from 'react'

export default class FinanceGoals extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {    
    return (
    <div className="page-finance-goals">
            
        <div className="row ferramenta">
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="btn-group  btn-group-justified" role="group">
                  <a href="#" className="btn btn-default" role="button">Nova meta</a>
                </div>
            </div>
        </div>
    
      <table className="table table-striped table-condesend table-bordered goals-table">
        <thead>
            <tr>
                <th className="header1">Conta</th>
                <th className="header2">Categoria</th>
                <th className="header2">Meta</th>
                <th className="header2">Alcançado</th>
                <th className="header2">Residual</th>
                <th className="header4">Ação</th>
            </tr>
        </thead>
        
        <tbody>
            {[...Array(10)].map((x, i) =>
            <tr className={"transation-"+i}>
                <td className="line1 no-mobile">Conta corrente</td>
                <td className="line2">Alimentação</td>
                <td className="line3">R$ 250.500,11</td>
                <td className="line3">50%</td>
                <td className="line3">R$ 250.500,11</td>
                <td className="line4">Editar Excluir</td>
            </tr>
            )}
        </tbody>
      
      </table>
      
      
    </div>
    )
  }
}