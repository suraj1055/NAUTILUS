import React from 'react'
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css'

const CavityGrid = ({ column, deleteColumn, editColumn, isColumnId, editCancel, addHeader, editColumnHeader }) => {

    return (
        <>
            <div className="Cavity-Grid-Container">
                <div className="Cavity-Grid-1-Container">
                    <Table striped bordered hover responsive variant="light">
                        <thead>
                            <tr>
                                <th> <h6> Cavity No. </h6> </th>
                            </tr>
                        </thead>
                        <tbody className="grid_style">
                            <tr>
                                <td> <input type='text' className="form-control" value="ABC-4" readOnly/> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="ABC-5" readOnly/> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="XYZ-4" readOnly/> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="XYZ-5" readOnly/> </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                {column.map((index) => {
                    return (
                        <div className="Cavity-Grid-2-Container" key={index.id}>
                            <Table striped bordered hover responsive variant="light">
                                <thead>
                                    <tr>
                                        {isColumnId === index.id ? (<th>
                                            <div className="table-heading-content-editable">
                                                <div className="table-heading-editable">
                                                    <input type="text" defaultValue={index.header} onChange={addHeader} />
                                                </div>
                                                <div className="table-heading-icons">
                                                    <div> <i className="fa fa-check" onClick={editColumnHeader}></i> </div>
                                                    <div> <i className="fa fa-window-close" onClick={editCancel} ></i> </div>
                                                </div>
                                            </div>
                                        </th>) : (<th>
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
                                    </tr>
                                </thead>
                                <tbody className="grid_style">
                                    <tr>
                                        <td> <input type='text' className="form-control" /> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" /> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" /> </td>
                                    </tr>
                                    <tr>
                                        <td> <input type='text' className="form-control" /> </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default CavityGrid
