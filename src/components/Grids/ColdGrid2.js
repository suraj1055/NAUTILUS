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
                                <th className='cold-heading'> <h6> WeightIncrease [{ grid2 }] </h6> </th>
                                <th className='cold-heading'> <h6> %WeightIncrease [{ grid2 }] </h6> </th>
                            </tr>
                        </thead>
                    </Table>
                </div>
                <div className="cold_table2">
                    <Table striped bordered hover responsive variant="light">
                        <tbody className="grid_style">
                            { NewRow2.map(( index, rowId ) => (
                                <tr key={rowId}>
                                    <td className='cold-heading'> <input type="text" className="form-control" readOnly /> </td>
                                    
                                    <td className='cold-heading'> <input type="text" className="form-control" readOnly /> </td>
                                   
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
