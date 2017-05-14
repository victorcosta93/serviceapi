// Imports
import React from 'react'

export default class FinanceList extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {    
    return (
    <div className="page-home">
    
        <div className="saldo-mobile">
            <div className="Prev">Jan</div>
            <div className="Atual">
                <span>Fevereiro/2017</span>
                <h1>R$ 250.500,11</h1>
            </div>
            <div className="Next">Mar</div>
            <p>Caixa Econômica (P) 	Conta Poupança</p>
        </div>
        
        <div className="row ferramenta">
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="btn-group  btn-group-justified" role="group">
                  <a href="#" className="btn btn-default" role="button">Transferência</a>
                  <a href="#" className="btn btn-default" role="button">Movimentação</a>
                </div>
            </div>
            
            <div className="col-md-6 col-md-offset-3 col-sm-6 hidden-xs">
                <div className="btn-group  btn-group-justified" role="group">
                  <a href="#" className="btn btn-default" role="button">Categorias</a>
                  <a href="#" className="btn btn-default" role="button">Contas</a>
                </div>
            </div>
        </div>
    
      <table className="table table-striped table-condesend finance-table">
        <thead>
            <th>&nbsp;</th>
            <th>Movimentação</th>
            <th>Valor</th>
            <th>Ação</th>
        </thead>
        
        <tbody>
            <tr>
                <td className="no-mobile"><input type="checkbox" /></td>
                <td><i className="glyphicon glyphicon-bookmark" /> Contas de casa <span>Alimento</span></td>
                <td className="price">R$ 250.500,11<span>Pago</span></td>
                <td className="no-mobile">Editar Excluir</td>
            </tr>
            <tr>
                <td className="no-mobile"><input type="checkbox" /></td>
                <td><i className="glyphicon glyphicon-bookmark" /> Contas de casa <span>Alimento</span></td>
                <td className="price">R$ 250.500,11<span>Pago</span></td>
                <td className="no-mobile">Editar Excluir</td>
            </tr>
            <tr>
                <td className="no-mobile"><input type="checkbox" /></td>
                <td><i className="glyphicon glyphicon-bookmark" /> Contas de casa <span>Alimento</span></td>
                <td className="price">R$ 250.500,11<span>Pago</span></td>
                <td className="no-mobile">Editar Excluir</td>
            </tr>
            <tr>
                <td className="no-mobile"><input type="checkbox" /></td>
                <td><i className="glyphicon glyphicon-bookmark" /> Contas de casa <span>Alimento</span></td>
                <td className="price">R$ 250.500,11<span>Pago</span></td>
                <td className="no-mobile">Editar Excluir</td>
            </tr>
            <tr>
                <td className="no-mobile"><input type="checkbox" /></td>
                <td><i className="glyphicon glyphicon-bookmark" /> Contas de casa <span>Alimento</span></td>
                <td className="price">R$ 250.500,11<span>Pago</span></td>
                <td className="no-mobile">Editar Excluir</td>
            </tr>
        </tbody>
        <tfoot>
            <th className="no-mobile">&nbsp;</th>
            <th>Total:</th>
            <th className="price">R$ 250.500,11</th>
            <th className="no-mobile">&nbsp;</th>
        </tfoot>
      
      </table>
      
      <div className="descritivo-mobile">
        <dl className="dl-horizontal">
          <dt>Receitas:</dt>
          <dd>R$ 250.500,11</dd>
          <dt>Despesas:</dt>
          <dd>R$ 256.565,00</dd>
          <dt>Saldo:</dt>
          <dd>R$ 256.565,00</dd>
        </dl>
      </div>
      
      
    </div>
    )
  }
}