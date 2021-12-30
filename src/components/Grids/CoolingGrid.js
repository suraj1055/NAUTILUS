import React from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';

const CoolingGrid = ({ column, deleteColumn, NewRow2, deleteRow2, handleEditFormChange }) => {
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
                            <tbody className="grid_style">
                                {NewRow2.map((value, key1) => (
                                    <tr key={key1}>

                                        {column.map((index, key2) => (

                                            (<td> <input type='text' name={index.header} className="form-control" onChange={(e) => handleEditFormChange(e, key1)} /> </td>)
                                        ))}

                                        <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(value.id)}></i> </td>

                                    </tr>
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
