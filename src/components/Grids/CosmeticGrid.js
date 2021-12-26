import React from 'react'
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css'
import Edit from './CosmeticEdit';
import Read from './CosmeticRead';

const CosmeticGrid = ({ Melting, Hydraulic, NewRow2, setId, handleEditFormChange, handleEditFormSubmit, isRowId, editFormData }) => {

    return (
        <div>
            <Table striped bordered hover responsive variant="light">
                <thead>
                    <tr>
                        <th> <h6> {Melting} </h6> </th>

                        <th> <h6> Low {Hydraulic} </h6> </th>

                        <th> <h6> High {Hydraulic} </h6> </th>
                    </tr>
                </thead>
                <tbody className="grid_style" onMouseOut={handleEditFormSubmit}>
                    {NewRow2.map((NewRow, rowId) => (
                        <>
                            {isRowId === NewRow.id ?
                                (
                                    <Edit NewRow={NewRow} setId={setId} NewRow2={NewRow2} handleEditFormChange={handleEditFormChange} rowId={rowId} editFormData={editFormData}/>
                                )
                                :
                                (
                                    <Read NewRow={NewRow} NewRow2={NewRow2} setId={setId} rowId={rowId} editFormData={editFormData} />
                                )}
                        </>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default CosmeticGrid
