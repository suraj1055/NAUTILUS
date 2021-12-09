import React from 'react'
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css'

const CosmeticGrid = ({ Melting, Hydraulic }) => {

    return (
        <>
            <Table striped bordered hover responsive variant="light">
                <thead>
                    <tr>
                        <th> <h6> { Melting } </h6> </th>
                    
                        <th> <h6> Low { Hydraulic } </h6> </th>
                
                        <th> <h6> High { Hydraulic } </h6> </th>
                    </tr>
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
        </>
    )
}

export default CosmeticGrid
