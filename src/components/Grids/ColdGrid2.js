import React from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';

const ColdGrid2 = ({ NewRow2, grid2}) => {
    return (
        <>
            <div>
                <div className="cold_table1">
                    <Table striped bordered hover responsive variant="light">
                        <thead>
                            <tr>
                                <th style={{ width: '180px' }}> <h6> WeightIncrease [{ grid2 }] </h6> </th>
                                <th> <h6> % WeightIncrease [{ grid2 }] </h6> </th>
                            </tr>
                        </thead>
                    </Table>
                </div>
                <div className="cold_table">
                    <Table striped bordered hover responsive variant="light">
                        <tbody className="grid_style">
                            {NewRow2.map(( ) => (
                                <tr>
                                    <td style={{ width: '180px' }}> <input type="text" className="form-control" readOnly /> </td>
                                    
                                    <td style={{ width: '180px' }}> <input type="text" className="form-control" readOnly /> </td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default ColdGrid2;
