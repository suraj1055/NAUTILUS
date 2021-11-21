import React from 'react'
import '../App.css';
import Table from 'react-bootstrap/Table'
import ReadOnly from '../columns/ReadOnlyRow';

const CavityGrid = ({ column, deleteColumn }) => {

    return (
        <>
            <div className="Cavity-Grid-Container">
                <div className="Cavity-Grid-1-Container">
                    <Table striped bordered hover responsive variant="light">
                        <thead>
                            <tr>
                                <th> <h6> Cavity No. </h6> </th>
                                <div>
                                    <th>
                                        <div className="table-heading-content">
                                            <div className="table-heading">
                                                <h6> Col 1 </h6>
                                            </div>
                                            <div className="table-heading-icons">
                                                <div> <i class="fa fa-edit"></i> </div>
                                            </div>
                                        </div>
                                    </th>
                                </div>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <input type='text' className="form-control" value="ABC-4" /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="ABC-5" /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="XYZ-4" /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="XYZ-5" /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                {column.map((index, id) => {
                    return (
                        <div className="Cavity-Grid-2-Container" key={id}>
                            <Table striped bordered hover responsive variant="light">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="table-heading-content">
                                                <div className="table-heading">
                                                    <h6> {index} </h6>
                                                </div>
                                                <div className="table-heading-icons">
                                                    <div> <i class="fa fa-edit"></i> </div>
                                                    <div> <i class="fa fa-trash" onClick={() => deleteColumn(id)} ></i> </div>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
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
