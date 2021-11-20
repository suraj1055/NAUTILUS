import React from 'react'
import '../App.css';
import Table from 'react-bootstrap/Table'

const CavityGrid = ({ column }) => {

    return (
        <>
            <div className="Cavity-Grid-Container">
                <div className="Cavity-Grid-1-Container">
                    <Table striped bordered hover responsive variant="light">
                        <thead>
                            <tr>
                                <th> <h6> Cavity No. </h6> </th>
                                <th> <h6> Column 1 </h6> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <input type='text' className="form-control" value="ABC-4" readonly/> </td>
                                <td> <input type='text' className="form-control"/> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="ABC-5" readonly/> </td>
                                <td> <input type='text' className="form-control"/> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="XYZ-4" readonly/> </td>
                                <td> <input type='text' className="form-control"/> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="XYZ-5" readonly/> </td>
                                <td> <input type='text' className="form-control"/> </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="Cavity-Grid-2-Container">
                    {column.map((index) => (
                        <Table striped bordered hover responsive variant="light">
                            <thead>
                                <tr>
                                    <th> <h6> {index} </h6> </th>
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
                    ))}
                </div>

            </div>
        </>
    )
}

export default CavityGrid
