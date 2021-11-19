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
                                <th> Cavity No. </th>
                                <th> Column 1 </th>
                                {column.map((index) => (
                                    <th> {index} </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-row">
                                <td> <input type='text' className="form-control" value="ABC-4" readonly /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="ABC-5" readonly /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="XYZ-4" readonly /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                            </tr>
                            <tr>
                                <td> <input type='text' className="form-control" value="XYZ-5" readonly /> </td>
                                <td> <input type='text' className="form-control" /> </td>
                            </tr>
                            </div>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default CavityGrid
