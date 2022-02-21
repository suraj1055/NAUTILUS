import React from 'react'
import '../App.css';
const ColdReadRow = ({ key1, setId, value, column, deleteRow2, NewRow2, handleEditFormSubmit }) => {
    return (
        <tr key={value.id} onClick={(event) => setId(event, value)}>

            {column.map((index, key2) => (

                (<td> <input type='text' name={index.header} style={{backgroundColor:'#fff'}}  defaultValue={NewRow2[key1][index.header] || ''} className="form-control" readOnly/> </td>)

            ))}

            <td className='icon-position'> <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(value.id)}></i> </td>

        </tr>
    )
}

export default ColdReadRow
