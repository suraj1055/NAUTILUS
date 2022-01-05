import React from 'react'

const CavityEditRow = ({ key1, handleEditFormChange, handleEditFormSubmit, value2, NewRow2 }) => {
    return (

        <td onMouseOut={handleEditFormSubmit}> <input type='text' className="form-control" name={value2.header} onChange={ handleEditFormChange } defaultValue={NewRow2[key1][value2.header] || ''} autoFocus/> </td>
    )
}

export default CavityEditRow
