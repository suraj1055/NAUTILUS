import React from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';
import CoolingEditRow from '../Grids/CoolingEditRow';
import CoolingReadRow from '../Grids/CoolingReadRow';

const CoolingGrid = ({ column, deleteColumn, NewRow2, deleteRow2, handleEditFormChange, handleEditFormSubmit, setId, isRowId }) => {
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
                                                        <div> <i className="fas fa-trash" onClick={() => deleteColumn(value.id)} ></i> </div>
                                                    </div>
                                                </div>
                                            </th>)}
                                        </>
                                    ))}
                                    <th> <h6> Action </h6> </th>
                                </tr>
                            </thead>
                            <tbody className="grid_style">
                                {NewRow2.map((value, key1) => (
                                    <>
                                        {isRowId === value.id ?
                                            (<CoolingEditRow key1={key1} setId={setId} value={value} column={column} NewRow2={NewRow2} handleEditFormChange={handleEditFormChange} deleteRow2={deleteRow2} handleEditFormSubmit={handleEditFormSubmit} />)
                                            :
                                            (<CoolingReadRow key1={key1} setId={setId} value={value} column={column} NewRow2={NewRow2} handleEditFormChange={handleEditFormChange} deleteRow2={deleteRow2} handleEditFormSubmit={handleEditFormSubmit}/>)
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

export default CoolingGrid
