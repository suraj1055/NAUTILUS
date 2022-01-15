import React from 'react';

const CavityEditRow = ({ key1, handleEditFormChange, handleEditFormSubmit, NewRow2, key2, calculate, handleCalculationEdit, handleCalculationSubmit }) => {

    const submit = (e) => {
        handleEditFormSubmit(e);
        // handleCalculationSubmit();
    }

    const change = (e) => {
        handleEditFormChange(e)
    }

    return (
        <td onMouseOut={e => submit(e) }> <input type='text' className="form-control" name={`value${key2}`} onChange={(e) => change(e)} defaultValue={NewRow2[key1][`value${key2}`] || ''} /> </td>
    )
}

export default CavityEditRow;
