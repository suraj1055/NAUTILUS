import React from 'react'

const Read = ({ setId, NewRow, rowId }) => {
    return (
            <tr key={rowId} onClick={(event) => setId(event, NewRow)}>
                <td> <input type='text' className="form-control" value={NewRow.Melt_Temp} /> </td>
                <td> <input type='text' className="form-control" value={NewRow.Low} /> </td>
                <td> <input type='text' className="form-control" value={NewRow.High} /> </td>
            </tr>
    )
}

export default Read
