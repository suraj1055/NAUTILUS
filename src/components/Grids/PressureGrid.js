import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';
import { Button } from 'reactstrap';
import PressureAddRow from '../columns&rows/PressureAddRow';
import { HtmlEditor, Inject, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PressureGrid = ({ toggle2, modal2, addRow, increaseRow, NewRow2, deleteRow2, handleEditFormSubmit, handleEditFormChange, setId, isRowId, editFormData, Max_Press_Available }) => {

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
          <button className="btn btn-pill btn-secondary btn-air-secondary mr-4" type="button" onClick={toggle2}> Add Row </button>
          <PressureAddRow toggle2={toggle2} modal2={modal2} addRow={addRow} increaseRow={increaseRow} />
        </div>
        <div>
          <button className="btn btn-pill btn-fifth btn-air-fifth mr-4" type="button"> Print </button>
          <button className="btn btn-pill btn-primary btn-air-primary mr-4" type="button" onClick={handleShow}> Comment </button>
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
        <div className="viscosity_table" onMouseOut={handleEditFormSubmit}>
          <Table striped bordered hover responsive variant="light">
            <thead>
              <tr>
                <th className="Pressure_Heading">
                  <span> Flow Area </span>
                </th>
                <th className="Pressure_Heading">
                  <span> Peak Pressure </span>
                </th>
                <th className="Pressure_Heading">
                  <span> % Maximum </span>
                </th>
                <th className="Pressure_Heading">
                  <span> Delta P </span>
                </th>
                <th className="Pressure_Heading">
                  <span> % Delta P </span>
                </th>
                <th >
                  <span> Action </span>
                </th>
              </tr>
            </thead>
            <tbody className="grid_style">
              {NewRow2.map((NewRow, rowId) => (
                <tr key={rowId} onClick={(event) => setId(event, NewRow)}>
                  {isRowId === NewRow.id ?
                    (

                      <>
                        <td> <input type='text' className="form-control" name="Flow_Area" value={editFormData.Flow_Area} onChange={handleEditFormChange} autoFocus /> </td>

                        <td> <input type='text' className="form-control" name="Peak_Pressure" value={editFormData.Peak_Pressure} onChange={handleEditFormChange} /> </td>

                        <td> <input type='text' className="form-control" name="Percent_Maximum" value={Number(NewRow2[rowId].Percent_Maximum).toFixed(3) === 0 ? ('-') : (Number(NewRow2[rowId].Percent_Maximum).toFixed(3))} readOnly /> </td>

                        <td> <input type='text' className="form-control" name="Delta_P" value={rowId === 0 ? (NewRow2[rowId].Peak_Pressure) : (NewRow2[rowId].Peak_Pressure === "" ? '-' : (Math.round(NewRow2[rowId].Peak_Pressure - NewRow2[rowId - 1].Peak_Pressure)))} readOnly /> </td>

                        <td> <input type='text' className="form-control" name="Percent_Delta_P" value={rowId === 0 ? (NewRow2[rowId].Percent_Maximum === "" ? '-' : Number(NewRow2[rowId].Percent_Maximum).toFixed(3)) : (NewRow2[rowId].Peak_Pressure === "" ? '-' : (Number((NewRow2[rowId].Peak_Pressure - NewRow2[rowId - 1].Peak_Pressure) * 100 / (Max_Press_Available)).toFixed(3)))} readOnly /> </td>

                        <td className='icon-position'> <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(NewRow.id)}></i> </td>
                      </>
                    )
                    :
                    (
                      <>
                        <td> <input type='text' className="form-control" value={NewRow.Flow_Area} /> </td>

                        <td> <input type='text' className="form-control" value={NewRow.Peak_Pressure} /> </td>

                        <td> <input type='text' className="form-control" value={NewRow2[rowId].Percent_Maximum === "" ? ('-') : (Number(NewRow2[rowId].Percent_Maximum).toFixed(3))} readOnly /> </td>

                        <td> <input type='text' className="form-control" value={rowId === 0 ? (NewRow2[rowId].Peak_Pressure) : (NewRow2[rowId].Peak_Pressure === "" ? '-' : (Math.round(NewRow2[rowId].Peak_Pressure - NewRow2[rowId - 1].Peak_Pressure)))} readOnly /> </td>

                        <td> <input type='text' className="form-control" name="Percent_Delta_P" value={rowId === 0 ? (NewRow2[rowId].Percent_Maximum === "" ? '-' : Number(NewRow2[rowId].Percent_Maximum).toFixed(3)) : (NewRow2[rowId].Peak_Pressure === "" ? '-' : (Number((NewRow2[rowId].Peak_Pressure - NewRow2[rowId - 1].Peak_Pressure) * 100 / (Max_Press_Available)).toFixed(3)))} readOnly /> </td>

                        <td className='icon-position'> <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(NewRow.id)}></i> </td>

                      </>
                    )
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

export default PressureGrid
