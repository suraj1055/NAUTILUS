import React from 'react'

const ColdEditRow = ({ key1, value, column, handleEditFormChange, deleteRow2, NewRow2 }) => {
    return (
        <tr key={key1} >

            {column.map((index, key2) => (

                (<td> <input type='text' name={index.header} className="form-control" onChange={handleEditFormChange} /> </td>)

            ))}

            <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(value.id)}></i> </td>

        </tr>
    )
}

export default ColdEditRow
