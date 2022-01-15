import React from 'react'

const CavityEditRow = ({ key1, handleEditFormChange, handleEditFormSubmit, NewRow2, key2, Total_Average  }) => {

    const submit = (e) => {
        handleEditFormSubmit().then( Total_Average )
    }
    
    return (

        <td onMouseOut={e => submit(e)}> <input type='text' className="form-control" name={`value${key2}`} onChange={handleEditFormChange} defaultValue={NewRow2[key1][`value${key2}`] || ''} autoFocus/> </td>
    )
}

export default CavityEditRow;
