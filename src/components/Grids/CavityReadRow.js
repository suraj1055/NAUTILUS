import React from 'react'

const CavityReadRow = ({ key1, setId, value, column, NewRow2, handleEditFormSubmit }) => {
    return (
        <tr key={value.id} onClick={(event) => setId(event, value)} onMouseOut={handleEditFormSubmit}>

            {column.map((index, key2) => (

                (<td> <input type='text' name={index.header} defaultValue={NewRow2[key1][index.header] || ''} className="form-control" readOnly/> </td>)

            ))}

        </tr>
    )
}

export default CavityReadRow
