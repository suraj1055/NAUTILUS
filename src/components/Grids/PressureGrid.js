import React from 'react'
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';
import { Button } from 'reactstrap';
import PressureAddRow from '../columns&rows/PressureAddRow';
import Edit from './PressureEdit'
import Read from './PressureRead'

const PressureGrid = ({ toggle2, modal2, addRow, increaseRow, NewRow2, deleteRow2, handleEditFormSubmit, handleEditFormChange, setId, isRowId, editFormData }) => {

    return (
        <div>
        <div className="mb-4">
          <Button onClick={toggle2} color="secondary" className="btn btn-sm" type="button"> Add Row </Button>
          <PressureAddRow toggle2={toggle2} modal2={modal2} addRow={addRow} increaseRow={increaseRow} />
        </div>
        <form>
          <Table striped bordered hover responsive variant="light">
          <thead>
                <tr>
                  <th className="Pressure_Heading">
                    <h6> Flow Area </h6>
                  </th>
                  <th className="Pressure_Heading">
                    <h6> Peak Pressure </h6>
                  </th>
                  <th className="Pressure_Heading">
                    <h6> % Maximum </h6>
                  </th>
                  <th className="Pressure_Heading">
                    <h6> Delta P </h6>
                  </th>
                  <th className="Pressure_Heading">
                    <h6> % Delta P </h6>
                  </th>
                  <th >
                    <h6> Action </h6>
                  </th>
                </tr>
              </thead>
          </Table>
          <div className="viscosity_table" onMouseOut={handleEditFormSubmit}>
            <Table striped bordered hover responsive variant="light">
              <tbody className="grid_style">
              {NewRow2.map((NewRow, rowId) => (
                  <>
                    {isRowId === NewRow.id ?
                      (
                        <Edit NewRow={NewRow} setId={setId} NewRow2={NewRow2} handleEditFormChange={handleEditFormChange} deleteRow2={deleteRow2} rowId={rowId} editFormData={editFormData}  />
                      )
                      :
                      (<Read NewRow={NewRow} NewRow2={NewRow2} setId={setId} deleteRow2={deleteRow2} rowId={rowId} editFormData={editFormData} />)
                    }
                  </>
  
                ))}
              </tbody>
            </Table>
          </div>
        </form>
      </div>
    )
}

export default PressureGrid
