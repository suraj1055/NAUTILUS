import React from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';

const CoolingGrid = ({ addHeader, column, deleteColumn, editColumn, isColumnId, editCancel, editColumnHeader, NewRow2, deleteRow2 }) => {
    return (
        <>
            <div className="Cold-Grid-Container">
                <div className="cold_table1">
                    <Table striped bordered hover responsive variant="light">
                        <thead>
                            <tr>
                                <th style={{ width: '180px' }}> <h6> Cooling Time Study </h6> </th>
                                {column.map((index) => (
                                    <>
                                        {isColumnId === index.id ? (<th style={{ width: '180px' }}>
                                            <div className="table-heading-content">
                                                <div className="table-heading">
                                                    <input type="text" defaultValue={index.header} onChange={addHeader} />
                                                </div>
                                                <div className="table-heading-icons">
                                                    <div> <i className="fa fa-check" onClick={editColumnHeader}></i> </div>
                                                    <div> <i className="fa fa-window-close" onClick={editCancel} ></i> </div>
                                                </div>
                                            </div>
                                        </th>) : (<th style={{ width: '180px' }}>
                                            <div className="table-heading-content">
                                                <div className="table-heading">
                                                    <h6> {index.header} </h6>
                                                </div>
                                                <div className="table-heading-icons">
                                                    <div> <i className="fa fa-edit" onClick={() => editColumn(index.id)} ></i> </div>
                                                    <div> <i className="fa fa-trash" onClick={() => deleteColumn(index.id)} ></i> </div>
                                                </div>
                                            </div>
                                        </th>)}
                                    </>
                                ))}
                                <div>
                                    <th> <h6> Action </h6> </th>
                                </div>
                            </tr>
                        </thead>
                    </Table>
                </div>
                <div className="cold_table">
                    <Table striped bordered hover responsive variant="light">
                        <tbody className="grid_style">
                            {NewRow2.map((NewRow, rowId) => (
                                <tr>
                                    <td style={{ width: '180px' }}> <input type="text" className="form-control" /> </td>
                                    {column.map((index) => (
                                        <td style={{ width: '180px' }}> <input type="text" className="form-control" /> </td>
                                    ))}
                                    <div> 
                                        <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(NewRow.id)}></i> </td>
                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default CoolingGrid
