import React from 'react';

const edit = ({ NewRow2, handleEditFormChange, deleteRow2, NewRow, rowId, editFormData, Max_Press_Available }) => {
    return (
        <tr key={rowId}>

            <td> <input type='text' className="form-control" name="Flow_Area" value={editFormData.Flow_Area} onChange={handleEditFormChange} autoFocus/> </td>

            <td> <input type='text' className="form-control" name="Peak_Pressure" value={editFormData.Peak_Pressure} onChange={handleEditFormChange} autoFocus/> </td>

            <td> <input type='text' className="form-control" name="Percent_Maximum" value={Number(NewRow2[rowId].Percent_Maximum).toFixed(3) === 0 ? ('-') : (Number(NewRow2[rowId].Percent_Maximum).toFixed(3))} readOnly /> </td>

            <td> <input type='text' className="form-control" name="Delta_P" value={ rowId === 0 ? (NewRow2[rowId].Peak_Pressure) : ( NewRow2[rowId].Peak_Pressure === "" ? '-' : ( Math.round(NewRow2[rowId].Peak_Pressure - NewRow2[rowId - 1].Peak_Pressure) ) ) } readOnly /> </td>

             <td> <input type='text' className="form-control" name="Percent_Delta_P" value={ rowId === 0 ? (NewRow2[rowId].Percent_Maximum === "" ? '-' : Number(NewRow2[rowId].Percent_Maximum).toFixed(3)) : ( NewRow2[rowId].Peak_Pressure === "" ? '-' : ( Number((NewRow2[rowId].Peak_Pressure - NewRow2[rowId - 1].Peak_Pressure) * 100 / (Max_Press_Available)).toFixed(3) ) ) } readOnly /> </td>

            <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(NewRow.id)}></i> </td>
        </tr>
    )
}

export default edit;
