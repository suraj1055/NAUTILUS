import React from 'react'
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css'

const CavityGrid = ({ column, deleteColumn, editColumn, isColumnId, editCancel, addHeader, editColumnHeader }) => {

    return (
        <>
            <div className="Cavity-Grid-Container">
                {/* <div className="Cavity-Grid-1-Container"> */}
                <Table striped bordered hover responsive variant="light">
                    <thead>
                        <tr>
                            {column.map((value, key) => (
                                <>
                                    {value.edit === true ?
                                        ( isColumnId === value.id ? (<th>
                                            <div className="table-heading-content-editable">
                                                <div className="table-heading-editable">
                                                    <input type="text" defaultValue={value.header} onChange={addHeader} />
                                                </div>
                                                <div className="table-heading-icons">
                                                    <div> <i className="fa fa-check" onClick={editColumnHeader}></i> </div>
                                                    <div> <i className="fa fa-window-close" onClick={editCancel} ></i> </div>
                                                </div>
                                            </div>
                                        </th>) : (<th>
                                            <div className="table-heading-content">
                                                <div className="table-heading">
                                                    <h6> {value.header} </h6>
                                                </div>
                                                <div className="table-heading-icons">
                                                    <div> <i className="fa fa-edit" onClick={() => editColumn(value.id)} ></i> </div>
                                                    <div> <i className="fa fa-trash" onClick={() => deleteColumn(value.id)} ></i> </div>
                                                </div>
                                            </div>
                                        </th>) )
                                        :
                                        (<th> <h6> {value.header} </h6> </th>)}
                                </>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="grid_style">
                        <tr>

                            {column.map((value) => (
                                <>
                                    {value.edit === true ?
                                        (<td> <input type='text' className="form-control" /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="ABC-4" readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        <tr>

                            {column.map((value) => (
                                <>
                                    {value.edit === true ?
                                        (<td> <input type='text' className="form-control" /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="ABC-4" readOnly /> </td>)}
                                </>
                            ))}

                        </tr>
                        <tr>
                            {column.map((value) => (
                                <>
                                    {value.edit === true ?
                                        (<td> <input type='text' className="form-control" /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="ABC-4" readOnly /> </td>)}
                                </>
                            ))}

                        </tr>
                        <tr>
                            {column.map((value) => (
                                <>
                                    {value.edit === true ?
                                        (<td> <input type='text' className="form-control" /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="ABC-4" readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                    </tbody>
                </Table>

            </div>
        </>
    )
}

export default CavityGrid
