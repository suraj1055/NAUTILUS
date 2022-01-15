import React from 'react'

const CavityReadRow = ({ key1, setId, value, NewRow2, key2, setId2, value2 }) => {

    const id = (event, rowValue, columnValue) => {
        setId(event, rowValue);
        setId2(event, columnValue)
    }

    return (

             <td onClick={(event) => id(event, value, value2)} > <input type='text' name={`value${key2}`}className="form-control" defaultValue={NewRow2[key1][`value${key2}`] || ''} readOnly /> </td>
    )
}

export default CavityReadRow
