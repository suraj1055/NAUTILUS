import React from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';

const CavityGrid2 = ({ column, NewRow2 }) => {

    return (
        <>
            <div className="Cavity-Grid-Container">
                <Table striped bordered hover responsive variant="light">
                    <thead>
                        <tr>
                            {column.map((value, key) => (
                                <>
                                    <th key={key}> <h6> {value.header} </h6> </th>
                                </>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="grid_style">
                        <tr>
                            {column.map((value1, key1) => (
                                <>
                                    {value1.edit === true ?
                                        (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="Total Fill" readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        <tr>
                            {column.map((value1, key1) => (
                                <>
                                    {value1.edit === true ?
                                        (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="Average Fill" readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        <tr>
                            {column.map((value1, key1) => (
                                <>
                                    {value1.edit === true ?
                                        (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="Range" readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        <tr>
                            {column.map((value1, key1) => (
                                <>
                                    {value1.edit === true ?
                                        (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="Max Part Wt." readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        <tr>
                            {column.map((value1, key1) => (
                                <>
                                    {value1.edit === true ?
                                        (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="Min Part Wt." readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        <tr>
                            {column.map((value) => (
                                <>
                                    {value.edit === true ?
                                        (<td> <input type='text' className="form-control" value='-' readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="% Variation From Average" readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        {NewRow2.map((value, key1) => (
                            <tr>
                                {column.map((value2, key) => (
                                    <>
                                        {value2.edit === false ?
                                            (<td> <input type='text' className="form-control" value={value.Cavity_No} readOnly /> </td>)
                                            :
                                            (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        }
                                    </>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default CavityGrid2;