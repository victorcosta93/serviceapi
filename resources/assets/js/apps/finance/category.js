// Imports
import React from 'react'

export default class FinanceCategory extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {    
    return (
    <div className="page-finance-category">
            
        <div className="row ferramenta">
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="btn-group  btn-group-justified" role="group">
                  <a href="#" className="btn btn-default" role="button">Nova categoria</a>
                </div>
            </div>
        </div>
    
      <table className="table table-striped table-condesend table-bordered category-table">
        <thead>
            <tr>
                <th className="header2">Categoria</th>
                <th className="header4">Ação</th>
            </tr>
        </thead>
        
        <tbody>
            {[...Array(10)].map((x, i) =>
            <tr className={"transation-"+i}>
                <td className="line2">Alimentação</td>
                <td className="line4">Editar Excluir</td>
            </tr>
            )}
        </tbody>
      
      </table>
      
      
    </div>
    )
  }
}