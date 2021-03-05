import React from 'react';

class Viewtransactioncreditcard extends React.Component{
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
<td>June 20th, 2020</td>
<td>CVS Pharmacy</td>
<td>$70.21</td>
<td>$125.00</td>
</tr>
<tr className="hide-table-padding">
<td></td>
<td colSpan="4">
<div id="collapseTwo" className="collapse in p-3">
  <div className="row">
    <div className="col-2" className="microText">Transaction type: Electronic</div>
  </div>
  <br></br>
  <div className="row">
    <div className="col-2" className="microText">Category:</div>
  </div>
  <br></br>
  <div className="row">
    <div className="col-2" className="microText">Notes:
    <input type="text" name="product" list="notes" className="inputNotes"/> 
    <datalist>
        <option>Was expensive</option>
    </datalist>
    </div>
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

export default Viewtransactioncreditcard;