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
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="btn-group  btn-group-justified" role="group">
                  <a href="#" className="btn btn-default" role="button">Transferência</a>
                  <a href="#" className="btn btn-default" role="button">Movimentação</a>
                </div>
            </div>
            
            <div className="col-md-4 col-md-offset-4 col-sm-6 hidden-xs">
                <div className="btn-group  btn-group-justified" role="group">
                  
                    <div className="btn-group">
                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categorias <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a href="#">Conta corrente</a></li>
                        <li><a href="#">Conta poupança</a></li>
                        <li><a href="#">Cartão de crédito</a></li>
                      </ul>
                    </div>
                    
                    <div className="btn-group">
                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contas <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a href="#">Conta corrente</a></li>
                        <li><a href="#">Conta poupança</a></li>
                        <li><a href="#">Cartão de crédito</a></li>
                      </ul>
                    </div>
                  
                </div>
            </div>
        </div>
    
      <table className="table table-striped table-condesend table-bordered finance-table">
        <thead>
            <tr>
                <th className="header1">&nbsp;</th>
                <th className="header2">Movimentação</th>
                <th className="header3">Valor</th>
                <th className="header4">Ação</th>
            </tr>
        </thead>
        
        <tbody>
            {[...Array(10)].map((x, i) =>
            <tr className={"transation-"+i}>
                <td className="line1 no-mobile"><input type="checkbox" /></td>
                <td className="line2"><i className="glyphicon glyphicon-bookmark" /> Contas de casa <span>Alimento</span></td>
                <td className="line3">R$ 250.500,11<span>Pago</span></td>
                <td className="line4 no-mobile">Editar Excluir</td>
            </tr>
            )}
        </tbody>
        <tfoot>
            <tr>
                <th className="footer1 no-mobile">&nbsp;</th>
                <th className="footer2">Total:</th>
                <th className="footer3">R$ 250.500,11</th>
                <th className="footer4 no-mobile">&nbsp;</th>
            </tr>
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