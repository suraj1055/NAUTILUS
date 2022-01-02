import React from 'react'

const CavityEditRow = ({ key1, value, column, handleEditFormChange, handleEditFormSubmit, NewRow2 }) => {
    return (
        <tr key={key1} onMouseOut={handleEditFormSubmit}>

            {column.map((index, key2) => (

                <>
                    {index.edit === true ?
                        (<td> <input type='text' name={index.header} className="form-control" defaultValue={NewRow2[key1][index.header] || ''} onChange={(e) => handleEditFormChange(e, key1)} /> </td>)
                        :
                        (<td> <input type='text' className="form-control" value={value.Cavity_No} readOnly /> </td>)}
                </>

            ))}

        </tr>
    )
}

export default CavityEditRow
