import React from 'react'
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css'

const CavityGrid = ({ column, deleteColumn }) => {

    return (
        <>
            <div className="Cavity-Grid-Container">
                <div className="Cavity-Grid-1-Container">
                    <Table striped bordered hover responsive variant="light">
                        <thead>
                            <tr>
                                {column.map((value, key) => (
                                    <>
                                        { value.delete === false ? (<th>
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
            </div>
        </>
    )
}

export default CavityGrid