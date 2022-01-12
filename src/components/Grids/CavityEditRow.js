import React from 'react';

const CavityEditRow = ({ key1, handleEditFormChange, handleEditFormSubmit, NewRow2, key2, calculate  }) => {

    const submit = () => {
        handleEditFormSubmit();
        calculate();
    }

    return (

        <td onMouseOut={submit}> <input type='text' className="form-control" name={`value${key2}`} onChange={handleEditFormChange} defaultValue={NewRow2[key1][`value${key2}`] || ''} autoFocus/> </td>
    )
}

export default CavityEditRow;
