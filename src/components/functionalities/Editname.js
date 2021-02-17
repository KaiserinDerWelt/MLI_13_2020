import React from 'react'

class Editname extends React.Component{
    render(){
        return(
            <>
             <div className="header">
        <h1 className="customerNameEdit">Welcome back</h1>
         <div className="editInputs">
             <input className="nameEdit" placeholder="Name"></input>
             <input className="lastnameEdit" placeholder="Lastname"></input>
         </div>
         <br></br>
         <div className="editButtons">
         <button className="edit-button-save">Save</button>
         <button className="edit-button-button">Cancel</button>
         </div>
      </div>
            </>
        )
    }
}


export default Editname;