import React from 'react';

class Viewtransactionsaving extends React.Component{
    render(){
        return(
            <>
             <div className="container my-4">
             <div className="table-responsive">
  <table className="table">
    <thead className="transparentHeader">
      <tr>
        <th scope="col"></th>
        <th scope="col">Date</th>
        <th scope="col">Description</th>
        <th scope="col">Ammount</th>
        <th scope="col">Balance</th>
      </tr>
    </thead>
    <tbody> 
      <tr className="accordion-toggle collapsed" id="accordion2" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
<td className="expand-button"></td>
<td>Date</td>
<td>Macys</td>
<td>$147</td>
<td>$220.04</td>
</tr>
<tr className="hide-table-padding">
<td></td>
<td colSpan="4">
<div id="collapseTwo" className="collapse in p-3">
  <div className="row">
    <div className="col-2">Transaction</div>
  </div>
  <div className="row">
    <div className="col-2">Category</div>
  </div>
  <div className="row">
    <div className="col-2">Notes</div>
  </div>
</div></td>
</tr>
    </tbody>
  </table>
</div>
             </div>
            </>
        )
    }
}

export default Viewtransactionsaving;