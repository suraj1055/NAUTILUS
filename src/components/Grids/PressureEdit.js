import React from 'react'

const edit = ({ NewRow2, handleEditFormChange, deleteRow2, NewRow, rowId, editFormData }) => {
    return (
        <tr key={rowId}>

            <td> <input type='text' className="form-control" name="Injection_Speed"  /> </td>

            <td> <input type='text' className="form-control" name="Fill_Time"  /> </td>

            <td> <input type='text' className="form-control" name="Shear_Rate" readOnly/> </td>

            <td> <input type='text' className="form-control" name="Absolute_Viscosity" readOnly/> </td>

            <td> <input type='text' className="form-control" name="Drop_Viscosity" readOnly/> </td>

            <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(NewRow.id)}></i> </td>
        </tr>
    )
}

export default edit;
