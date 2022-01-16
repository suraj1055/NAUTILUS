import React from 'react'
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';

// Grid Row's switches Between editable row and readonly row so the code for that is in these files.
import CavityEditRow from '../Grids/CavityEditRow';
import CavityReadRow from '../Grids/CavityReadRow';

const CavityGrid = ({ column, deleteColumn, NewRow2, handleEditFormChange, handleEditFormSubmit, setId, isRowId, setId2 }) => {

    return (
        <>
            <div className="Cavity-Grid-Container">
                <form autoComplete="off">
                    <div className="cold_table">
                        {/* This table is coming from Bootstrap */}
                        <Table striped bordered hover responsive variant="light">
                            <thead>
                                <tr>

                                    {/* In the grid 2 column are going to be static and the rest will be deletable so here based on the property in the column array if the object contains delete property then it will be deletable and if not then static */}

                                    {column.map((value, key) => (
                                        <>
                                            {value.delete === false ?
                                                (<th>
                                                    <div className="table-heading-content">
                                                        <div className="table-heading">
                                                            <h6> {value.header} </h6>
                                                        </div>
                                                    </div>
                                                </th>)
                                                :
                                                (<th>
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
                                {/* Here the row's are generated with the help of NewRow2 array and the <td>'s  should be equal to the number of columns e.g 3 td's for 3 columns */}

                                {/* After that 1st column will be containing static row's, names will be based on the mold, so that's what we are checking over here */}

                                {/* If the edit property of the column array's object is false then it will be the static row i.e 1st row but if not then editable row which switches as clicked on it to editable and then readOnly */}
                                
                                {NewRow2.map((value, key1) => (
                                    <tr>
                                        {column.map((value2, key2) => (
                                            <>
                                                {value2.edit === false ?
                                                    (<td> <input type='text' className="form-control" value={value.Cavity_No} readOnly /> </td>)
                                                    :
                                                    <>
                                                        {isRowId === value.id ?
                                                            (<CavityEditRow key1={key1} key2={key2} setId={setId} value={value} value2={value2} column={column} NewRow2={NewRow2} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} setId2={setId2} />)
                                                            :
                                                            (<CavityReadRow key1={key1} key2={key2} setId={setId} value={value} value2={value2} column={column} NewRow2={NewRow2} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} />)
                                                        }
                                                    </>
                                                }
                                            </>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CavityGrid