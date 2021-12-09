import React from 'react'
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css'

const CosmeticGrid = () => {

    return (
        <>
            <div className="Cavity-Grid-Container">
                    <Table striped bordered hover responsive variant="light">
                        <thead>

                            <th> <h6> Melt </h6> </th>

                            <th>
                                <div className="table-heading-content">
                                    <div className="table-heading">
                                        <h6> Low </h6>
                                    </div>
                                    <div className="table-heading-icons">
                                        <div> <i className="fa fa-edit" ></i> </div>
                                        <div> <i className="fa fa-trash" ></i> </div>
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="table-heading-content">
                                    <div className="table-heading">
                                        <h6> High </h6>
                                    </div>
                                    <div className="table-heading-icons">
                                        <div> <i className="fa fa-edit" ></i> </div>
                                        <div> <i className="fa fa-trash" ></i> </div>
                                    </div>
                                </div>
                            </th>

                        </thead>
                        <tbody className="grid_style">
                            <tr>
                                <td> <input type='text' className="form-control" /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                            </tr>
                        </tbody>
                    </Table>
            </div>
        </>
    )
}

export default CosmeticGrid
