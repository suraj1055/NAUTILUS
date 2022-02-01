import React from 'react'

const edit = ({ NewRow2, handleEditFormChange, deleteRow2, NewRow, rowId, editFormData, IntensificationRatio }) => {

    return (
        <>

                <td> <input type='text' className="form-control" name="Injection_Speed" value={editFormData.Injection_Speed} onChange={handleEditFormChange} /> </td>

                <td> <input type='text' className="form-control" name="Fill_Time" value={editFormData.Fill_Time} onChange={handleEditFormChange} /> </td>

                <td> <input type='text' className="form-control" name="Peak_Inj_Press" value={editFormData.Peak_Inj_Press} onChange={handleEditFormChange} /> </td>

                <td> <input type='text' className="form-control" name="Viscosity" value={NewRow2[rowId].Viscosity === "" ? ('-') : (Math.round(NewRow2[rowId].Fill_Time * NewRow2[rowId].Peak_Inj_Press * IntensificationRatio))} readOnly /> </td>

                <td> <input type='text' className="form-control" name="Shear_Rate" value={NewRow2[rowId].Shear_Rate === "" ? '-' : Number(NewRow.Shear_Rate).toFixed(3)} readOnly /> </td>

                <td> <input type='text' className="form-control" name="Absolute_Viscosity" value={rowId === 0 ? ('-') : (NewRow2[rowId].Viscosity === "" ? '-' : (Math.round(NewRow2[rowId - 1].Viscosity - NewRow2[rowId].Viscosity)))} readOnly /> </td>

                <td> <input type='text' className="form-control" name="Drop_Viscosity" value={rowId === 0 ? ('-') : (NewRow2[rowId].Viscosity === "" ? '-' : Number((Math.round(NewRow2[rowId - 1].Viscosity - NewRow2[rowId].Viscosity) * 100) / (NewRow2[rowId - 1].Viscosity)).toFixed(1))} readOnly /> </td>

                <td> <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(NewRow.id)}></i> </td>
            </>
    )
}

export default edit;
