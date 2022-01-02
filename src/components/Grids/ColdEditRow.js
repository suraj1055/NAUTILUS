import React from 'react'

const ColdEditRow = ({ key1, value, column, handleEditFormChange, deleteRow2, handleEditFormSubmit, NewRow2 }) => {
    return (
        <tr key={value.id} onMouseOut={handleEditFormSubmit}>

            {column.map((index, key2) => (

                (<td> <input type='text' name={index.header} className="form-control" defaultValue={NewRow2[key1][index.header] || ''} onChange={(e) => handleEditFormChange(e).then( () => { console.log("It worked") }).catch( (err) => { console.log(err) }) } /> </td>)

            ))}

            <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(value.id)}></i> </td>

        </tr>
    )
}

export default ColdEditRow
