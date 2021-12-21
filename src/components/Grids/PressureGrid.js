import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';
import { Button } from 'reactstrap';
import PressureAddRow from '../columns&rows/PressureAddRow';
import Edit from './PressureEdit'
import Read from './PressureRead'
import { HtmlEditor, Inject, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PressureGrid = ({ toggle2, modal2, addRow, increaseRow, NewRow2, deleteRow2, handleEditFormSubmit, handleEditFormChange, setId, isRowId, editFormData }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let toolbarSettings = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|', 'Undo', 'Redo']
  };

  return (
    <div>
      <div  className="mb-4 d-flex justify-content-between">
        <div>
          <Button onClick={toggle2} color="secondary" className="btn btn-sm" type="button"> Add Row </Button>
          <PressureAddRow toggle2={toggle2} modal2={modal2} addRow={addRow} increaseRow={increaseRow} />
        </div>
        <div>
          <Button color="fifth" className="btn btn-sm mr-4" type="button"> Print </Button>
          <Button onClick={handleShow} color="primary" className="btn btn-sm step-button2" type="button"> Comment </Button>
          <Modal isOpen={show} centered={true} >
            <ModalHeader toggle={handleClose}>
              Add Comment
            </ModalHeader>
            <ModalBody>
              <RichTextEditorComponent toolbarSettings={toolbarSettings} height={250}>

                <Inject services={[Toolbar, HtmlEditor]} />
              </RichTextEditorComponent>
            </ModalBody>
            <ModalFooter>
              <Button color="primary"> Save </Button>
              <Button color="dark" onClick={handleClose}> Cancel </Button>
            </ModalFooter>
          </Modal>
        </div>
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
                      <Edit NewRow={NewRow} setId={setId} NewRow2={NewRow2} handleEditFormChange={handleEditFormChange} deleteRow2={deleteRow2} rowId={rowId} editFormData={editFormData} />
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
