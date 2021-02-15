import React from 'react';

class Viewtransactions extends React.Component{
    render(){
        return(
            <>
             <div className="container my-4">
             <div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr className="accordion-toggle collapsed" id="accordion1" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne">
<td className="expand-button"></td>
<td>Cell</td>
<td>Cell</td>
<td>Cell</td>

</tr>
<tr className="hide-table-padding">
<td></td>
<td colSpan="3">
<div id="collapseOne" className="collapse in p-3">
  <div className="row">
    <div className="col-2">label</div>
    <div className="col-6">value 1</div>
  </div>
  <div className="row">
    <div className="col-2">label</div>
    <div className="col-6">value 2</div>
  </div>
  <div className="row">
    <div className="col-2">label</div>
    <div className="col-6">value 3</div>
  </div>
  <div className="row">
    <div className="col-2">label</div>
    <div className="col-6">value 4</div>
  </div>
</div></td>
</tr>
      <tr className="accordion-toggle collapsed" id="accordion2" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
<td className="expand-button"></td>
<td>Cell</td>
<td>Cell</td>
<td>Cell</td>

</tr>
<tr className="hide-table-padding">
<td></td>
<td colSpan="4">
<div id="collapseTwo" className="collapse in p-3">
  <div className="row">
    <div className="col-2">label</div>
    <div className="col-6">value</div>
  </div>
  <div className="row">
    <div className="col-2">label</div>
    <div className="col-6">value</div>
  </div>
  <div className="row">
    <div className="col-2">label</div>
    <div className="col-6">value</div>
  </div>
  <div className="row">
    <div className="col-2">label</div>
    <div className="col-6">value</div>
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

export default Viewtransactions;