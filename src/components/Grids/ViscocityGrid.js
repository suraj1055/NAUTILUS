import React from 'react';
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';
import { Button } from 'reactstrap';
import ViscocityAddRow from '../columns&rows/ViscocityAddRow';
import Edit from './ViscocityEdit'
import Read from './ViscocityRead'

const ViscocityGrid = ({ toggle2, modal2, addRow, increaseRow, NewRow2, deleteRow2, handleEditFormSubmit, handleEditFormChange, setId, isRowId, editFormData, IntensificationRatio }) => {

  return (
    <div>
      <div className="mb-4">
        <Button onClick={toggle2} color="secondary" className="btn btn-sm" type="button"> Add Row </Button>
        <ViscocityAddRow toggle2={toggle2} modal2={modal2} addRow={addRow} increaseRow={increaseRow} />
      </div>
      <form>
        <Table striped bordered hover responsive variant="light">
        <thead>
              <tr>
                <th className="viscosity_heading2">
                  <h6> Injection Speed </h6>
                </th>
                <th className="viscosity_heading2">
                  <h6> Fill Time </h6>
                </th>
                <th className="viscosity_heading2">
                  <h6> Peak Inj Press </h6>
                </th>
                <th className="viscosity_heading2">
                  <h6> Viscocity </h6>
                </th>
                <th className="viscosity_heading">
                  <h6> Shear Rate </h6>
                </th>
                <th className="viscosity_heading">
                  <h6> AbsoluteDropViscosity </h6>
                </th>
                <th className="viscosity_heading">
                  <h6> %DropViscocity </h6>
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
                      <Edit NewRow={NewRow} setId={setId} NewRow2={NewRow2} handleEditFormChange={handleEditFormChange} deleteRow2={deleteRow2} rowId={rowId} editFormData={editFormData} IntensificationRatio={IntensificationRatio} />
                    )
                    :
                    (<Read NewRow={NewRow} NewRow2={NewRow2} setId={setId} deleteRow2={deleteRow2} rowId={rowId} editFormData={editFormData} IntensificationRatio={IntensificationRatio}/>)
                  }
                </>

              ))}
            </tbody>
          </Table>
        </div>
        {/* <Button type="submit" className="mt-4"> Calculate & Save </Button> */}
      </form>
    </div>
  )
}

export default ViscocityGrid;
