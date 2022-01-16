import React from 'react'

const CavityReadRow = ({ key1, setId, value, NewRow2, key2}) => {
    return (

             <td onClick={(event) => setId(event, value)}> <input type='text' name={`value${key2}`} className="form-control" defaultValue={NewRow2[key1][`value${key2}`] || ''} readOnly /> </td>
    )
}

export default CavityReadRow;
