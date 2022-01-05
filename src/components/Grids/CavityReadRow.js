import React from 'react'

const CavityReadRow = ({ key1, setId, value, value2, NewRow2 }) => {
    return (

             <td onClick={(event) => setId(event, value)}> <input type='text' name={value2.header} className="form-control" defaultValue={NewRow2[key1][value2.header] || ''} readOnly /> </td>
    )
}

export default CavityReadRow
