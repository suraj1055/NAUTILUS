import React from 'react'

const Read = ({ setId, NewRow2, deleteRow2, NewRow, rowId }) => {
    return (
        <tr key={rowId} onClick={(event) => setId(event, NewRow)}>

            <td> <input type='text' className="form-control" readOnly/> </td>

            <td> <input type='text' className="form-control" readOnly/> </td>

            <td> <input type='text' className="form-control" name="Viscosity" readOnly /> </td>

            <td> <input type='text' className="form-control" name="Shear_Rate" readOnly /> </td>

            <td> <input type='text' className="form-control" name="Absolute_Viscosity" readOnly /> </td>

            <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(NewRow.id)}></i> </td>
        </tr>
    )
}

export default Read
