import React from 'react'

const Read = ({ setId, deleteRow2, NewRow, rowId, NewRow2, Max_Press_Available }) => {
    return (
        <tr key={rowId} onClick={(event) => setId(event, NewRow)}>

            <td> <input type='text' className="form-control" value={NewRow.Flow_Area} /> </td>

            <td> <input type='text' className="form-control" value={NewRow.Peak_Pressure}/> </td>

            <td> <input type='text' className="form-control" value={NewRow2[rowId].Percent_Maximum === "" ? ('-') : (Number(NewRow2[rowId].Percent_Maximum).toFixed(3))} readOnly /> </td>

            <td> <input type='text' className="form-control" value={ rowId === 0 ? (NewRow2[rowId].Peak_Pressure) : ( NewRow2[rowId].Peak_Pressure === "" ? '-' : ( Math.round(NewRow2[rowId].Peak_Pressure - NewRow2[rowId-1].Peak_Pressure) ) ) } readOnly /> </td>

            <td> <input type='text' className="form-control" name="Percent_Delta_P" value={ rowId === 0 ? (NewRow2[rowId].Percent_Maximum === "" ? '-' : Number(NewRow2[rowId].Percent_Maximum).toFixed(3)) : ( NewRow2[rowId].Peak_Pressure === "" ? '-' : ( Number((NewRow2[rowId].Peak_Pressure - NewRow2[rowId - 1].Peak_Pressure) * 100 / (Max_Press_Available)).toFixed(3) ) ) } readOnly /> </td>

            <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(NewRow.id)}></i> </td>
        </tr>
    )
}

export default Read
