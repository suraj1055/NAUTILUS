import React from 'react'

const ColdReadEdit = ({ key1, setId, value, column, deleteRow2, editFormData, NewRow2 }) => {
    return (
        <tr key={key1} onClick={(event) => setId(event, value)}>

            {column.map((index, key2) => (

                (<td> <input type='text' name={index.header} className="form-control" readOnly/> </td>)
            ))}

            <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(value.id)}></i> </td>

        </tr>
    )
}

export default ColdReadEdit
