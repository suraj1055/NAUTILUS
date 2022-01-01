import React from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';
import ColdEditRow from '../Grids/ColdEditRow'
import ColdReadEdit from '../Grids/ColdReadEdit'

const ColdGrid1 = ({ column, deleteColumn, NewRow2, deleteRow2, handleEditFormChange, handleEditFormSubmit, setId, isRowId, editFormData }) => {
    return (
        <>
            <div className="Cold-Grid-Container">
                <form autoComplete="off">
                    <div className="cold_table">
                        <Table striped bordered hover responsive variant="light">
                            <thead>
                                <tr>
                                    {column.map((value, key) => (
                                        <>
                                            {value.delete === false ? (<th>
                                                <div className="table-heading-content">
                                                    <div className="table-heading">
                                                        <h6> {value.header} </h6>
                                                    </div>
                                                </div>
                                            </th>) : (<th>
                                                <div className="table-heading-content">
                                                    <div className="table-heading">
                                                        <h6> {value.header} </h6>
                                                    </div>
                                                    <div className="table-heading-icons">
                                                        <div> <i className="fa fa-trash" onClick={() => deleteColumn(value.id)} ></i> </div>
                                                    </div>
                                                </div>
                                            </th>)}
                                        </>
                                    ))}
                                    <th> <h6> Action </h6> </th>
                                </tr>
                            </thead>
                            <tbody className="grid_style" onMouseOut={handleEditFormSubmit}>
                                {NewRow2.map((value, key1) => (
                                    <>
                                        {isRowId === value.id ?
                                            (<ColdEditRow key1={key1} setId={setId} value={value} column={column} handleEditFormChange={handleEditFormChange} deleteRow2={deleteRow2} editFormData={editFormData} NewRow2={NewRow2} />)
                                            :
                                            (<ColdReadEdit key1={key1} setId={setId} value={value} column={column} deleteRow2={deleteRow2} editFormData={editFormData} NewRow2={NewRow2} />)
                                        }
                                    </>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ColdGrid1;
