import React from 'react';
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';
import { Button } from 'reactstrap';
import ViscocityAddRow from '../columns&rows/ViscocityAddRow';

const ViscocityGrid = ({ toggle2, modal2, addRow, increaseRow, deleteRow, NewRow, NewRow2, deleteRow2 }) => {

  return (
    <div>
      <div className="mb-4">
        <Button onClick={toggle2} color="secondary" className="btn btn-sm" type="button"> Add Row </Button>
        <ViscocityAddRow toggle2={toggle2} modal2={modal2} addRow={addRow} increaseRow={increaseRow} deleteRow={deleteRow} />
      </div>
      <div>
        <form>
          <Table striped bordered hover responsive variant="light">
            <thead>
              <tr>
                <th> <h6> Injection Speed </h6> </th>
                <th> <h6> Fill Time </h6> </th>
                <th> <h6> Peak Inj Press </h6> </th>
                <th> <h6> Viscocity </h6> </th>
                <th> <h6> Shear Rate </h6> </th>
                <th> <h6> AbsoluteDropViscocity </h6> </th>
                <th> <h6> %DropViscocity </h6> </th>
                <th> <h6> Action </h6> </th>
              </tr>
            </thead>
            <tbody className="grid_style">
              {NewRow2.map((rowId) => {
                return (
                  <tr key={rowId}>
                    <td> <input type='text' className="form-control" /> </td>
                    <td> <input type='text' className="form-control" /></td>
                    <td><input type='text' className="form-control" /> </td>
                    <td> <input type='text' className="form-control" readOnly /></td>
                    <td> <input type='text' className="form-control" readOnly /></td>
                    <td> <input type='text' className="form-control" readOnly /></td>
                    <td> <input type='text' className="form-control" readOnly /></td>
                    <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow2(rowId)}></i> </td>
                  </tr>
                )
              })}

              {NewRow.map((rowId) => {
                return (
                  <tr key={rowId}>
                    <td> <input type='text' className="form-control" /> </td>
                    <td> <input type='text' className="form-control" /></td>
                    <td><input type='text' className="form-control" /> </td>
                    <td> <input type='text' className="form-control" readOnly /></td>
                    <td> <input type='text' className="form-control" readOnly /></td>
                    <td> <input type='text' className="form-control" readOnly /></td>
                    <td> <input type='text' className="form-control" readOnly /></td>
                    <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow(rowId)}></i> </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </form>
      </div>
    </div>
  )
}

export default ViscocityGrid;
