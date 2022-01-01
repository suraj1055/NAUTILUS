import React from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';
import { Button } from 'reactstrap';

const ColdGrid1 = ({ column, deleteColumn, NewRow2, deleteRow2, handleEditFormChange, handleEditFormSubmit, setId }) => {
    return (
        <>
            <div className="Cold-Grid-Container">
                <form autoComplete="off">
                    <div className="cold_table">
                        <Table striped bordered hover responsive variant="light">
                            <thead>
                                <tr>
                                    {column.map((value, key) => (
                                        <>
                                            {value.delete === false ? (<th>
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
                                    <th> <h6> Action </h6> </th>
                                </tr>
                            </thead>
                            <tbody className="grid_style">
                                {NewRow2.map((value, key1) => (
                                    <tr key={key1} onClick={(event) => setId(event, value)}>

                                        {column.map((index, key2) => (

                                            (<td> <input type='text' name={index.header} className="form-control" onChange={handleEditFormChange} /> </td>)
                                        ))}

                                        <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(value.id)}></i> </td>

                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </form>
            </div>
            <Button onClick={handleEditFormSubmit} className='mt-4'> save </Button>
        </>
    )
}

export default ColdGrid1;
