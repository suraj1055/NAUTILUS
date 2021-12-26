import React from 'react'

const Edit = ({ handleEditFormChange, rowId, editFormData, }) => {
    return (
            <tr key={rowId}>
                <td> <input type='text' className="form-control" name="Melt_Temp" value={editFormData.Melt_Temp} onChange={handleEditFormChange} /> </td>
                <td> <input type='text' className="form-control" name="Low" value={editFormData.Low} onChange={handleEditFormChange} /> </td>
                <td> <input type='text' className="form-control" name="High" value={editFormData.High} onChange={handleEditFormChange} /> </td>
            </tr>
    )
}

export default Edit
