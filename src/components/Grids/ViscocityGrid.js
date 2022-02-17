import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';
import { Button } from 'reactstrap';
import ViscocityAddRow from '../columns&rows/ViscocityAddRow';
import Edit from './ViscocityEdit'
import Read from './ViscocityRead'
import { HtmlEditor, Inject, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ViscocityGrid = ({ toggle2, modal2, addRow, increaseRow, NewRow2, deleteRow2, handleEditFormSubmit, handleEditFormChange, setId, isRowId, editFormData, IntensificationRatio }) => {

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
      <div className="mb-4 d-flex justify-content-between">
        <div>
          <Button onClick={toggle2} color="secondary" className="btn btn-sm" type="button"> Add Row </Button>
          <ViscocityAddRow toggle2={toggle2} modal2={modal2} addRow={addRow} increaseRow={increaseRow} />
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
      <form autoComplete="off">
        <Table striped bordered hover responsive variant="light">
          <thead>
            <tr>
              <th className="viscosity_heading2">
                <span> Injection Speed </span>
              </th>
              <th className="viscosity_heading2">
                <span> Fill Time </span>
              </th>
              <th className="viscosity_heading2">
                <span> Peak Inj Press </span>
              </th>
              <th className="viscosity_heading2">
                <span> Viscosity </span>
              </th>
              <th className="viscosity_heading">
                <span> Shear Rate </span>
              </th>
              <th className="viscosity_heading">
                <span> AbsoluteDropViscosity </span>
              </th>
              <th className="viscosity_heading">
                <span> %DropViscosity </span>
              </th>
              <th >
                <span> Action </span>
              </th>
            </tr>
          </thead>
        </Table>
        <div className="viscosity_table" onMouseOut={handleEditFormSubmit}>
          <Table striped bordered hover responsive variant="light">
          {/* <thead>
            <tr>
              <th className="viscosity_heading2">
                <span> Injection Speed </span>
              </th>
              <th className="viscosity_heading2">
                <span> Fill Time </span>
              </th>
              <th className="viscosity_heading2">
                <span> Peak Inj Press </span>
              </th>
              <th className="viscosity_heading2">
                <span> Viscosity </span>
              </th>
              <th className="viscosity_heading">
                <span> Shear Rate </span>
              </th>
              <th className="viscosity_heading">
                <span> AbsoluteDropViscosity </span>
              </th>
              <th className="viscosity_heading">
                <span> %DropViscosity </span>
              </th>
              <th >
                <span> Action </span>
              </th>
            </tr>
          </thead> */}
            <tbody className="grid_style">
              {NewRow2.map((NewRow, rowId) => (
                <tr key={NewRow2[rowId].id} onClick={(event) => setId(event, NewRow)}>
                  {isRowId === NewRow.id ?
                    (
                      <Edit NewRow={NewRow} setId={setId} NewRow2={NewRow2} handleEditFormChange={handleEditFormChange} deleteRow2={deleteRow2} rowId={rowId} editFormData={editFormData} IntensificationRatio={IntensificationRatio} />
                    )
                    :
                    (<Read NewRow={NewRow} NewRow2={NewRow2} setId={setId} deleteRow2={deleteRow2} rowId={rowId} editFormData={editFormData} IntensificationRatio={IntensificationRatio} />)
                  }
                </tr>

              ))}
            </tbody>
          </Table>
        </div>
      </form>
    </div>
  )
}

export default ViscocityGrid;
