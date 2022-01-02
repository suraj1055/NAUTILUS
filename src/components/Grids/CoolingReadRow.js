import React from 'react'

const CoolingReadRow = ({ key1, setId, value, column, deleteRow2, NewRow2, handleEditFormSubmit }) => {
    return (
        <tr key={value.id} onClick={(event) => setId(event, value)} onMouseOut={handleEditFormSubmit}>

        {column.map((index, key2) => (

            (<td> <input type='text' name={index.header} defaultValue={NewRow2[key1][index.header] || ''} className="form-control" readOnly/> </td>)

        ))}

        <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(value.id)}></i> </td>

    </tr>
    )
}

export default CoolingReadRow
