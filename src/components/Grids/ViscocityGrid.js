import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';
import { Button } from 'reactstrap';
import ViscocityAddRow from '../columns&rows/ViscocityAddRow';
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

  const calculate = async () => {

  }

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
                <h6> Injection Speed </h6>
              </th>
              <th className="viscosity_heading2">
                <h6> Fill Time </h6>
              </th>
              <th className="viscosity_heading2">
                <h6> Peak Inj Press </h6>
              </th>
              <th className="viscosity_heading2">
                <h6> Viscosity </h6>
              </th>
              <th className="viscosity_heading">
                <h6> Shear Rate </h6>
              </th>
              <th className="viscosity_heading">
                <h6> AbsoluteDropViscosity </h6>
              </th>
              <th className="viscosity_heading">
                <h6> %DropViscosity </h6>
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
                <tr key={NewRow2[rowId].id} onClick={(event) => setId(event, NewRow)}>
                  {isRowId === NewRow.id ?
                    (
                      <>
                        <td> <input type='text' className="form-control" name="Injection_Speed" value={editFormData.Injection_Speed} onChange={handleEditFormChange} /> </td>

                        <td> <input type='text' className="form-control" name="Fill_Time" value={editFormData.Fill_Time} onChange={handleEditFormChange} /> </td>

                        <td> <input type='text' className="form-control" name="Peak_Inj_Press" value={editFormData.Peak_Inj_Press} onChange={handleEditFormChange} /> </td>

                        <td> <input type='text' className="form-control" name="Viscosity" value={NewRow2[rowId].Viscosity === "" ? ('-') : (Math.round(NewRow2[rowId].Fill_Time * NewRow2[rowId].Peak_Inj_Press * IntensificationRatio))} readOnly /> </td>

                        <td> <input type='text' className="form-control" name="Shear_Rate" value={NewRow2[rowId].Shear_Rate === "" ? '-' : Number(NewRow.Shear_Rate).toFixed(3)} readOnly /> </td>

                        <td> <input type='text' className="form-control" name="Absolute_Viscosity" value={rowId === 0 ? ('-') : (NewRow2[rowId].Viscosity === "" ? '-' : (Math.round(NewRow2[rowId - 1].Viscosity - NewRow2[rowId].Viscosity)))} readOnly /> </td>

                        <td> <input type='text' className="form-control" name="Drop_Viscosity" value={rowId === 0 ? ('-') : (NewRow2[rowId].Viscosity === "" ? '-' : Number((Math.round(NewRow2[rowId - 1].Viscosity - NewRow2[rowId].Viscosity) * 100) / (NewRow2[rowId - 1].Viscosity)).toFixed(1))} readOnly /> </td>

                        <td> <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(NewRow.id)}></i> </td>
                      </>
                    )
                    :
                    (<>
                      <td> <input type='text' className="form-control" value={NewRow.Injection_Speed} readOnly /> </td>

                      <td> <input type='text' className="form-control" value={NewRow.Fill_Time} readOnly /> </td>

                      <td> <input type='text' className="form-control" value={NewRow.Peak_Inj_Press} readOnly /> </td>

                      <td> <input type='text' className="form-control" name="Viscosity" value={NewRow2[rowId].Viscosity === "" ? ('-') : (Math.round(NewRow2[rowId].Fill_Time * NewRow2[rowId].Peak_Inj_Press * IntensificationRatio))} readOnly /> </td>

                      <td> <input type='text' className="form-control" name="Shear_Rate" value={NewRow2[rowId].Shear_Rate === "" ? '-' : Number(NewRow.Shear_Rate).toFixed(3)} readOnly /> </td>

                      <td> <input type='text' className="form-control" name="Absolute_Viscosity" value={rowId === 0 ? ('-') : (NewRow2[rowId].Viscosity === "" ? '-' : (Math.round(NewRow2[rowId - 1].Viscosity - NewRow2[rowId].Viscosity)))} readOnly /> </td>

                      <td> <input type='text' className="form-control" name="Drop_Viscosity" value={rowId === 0 ? ('-') : (NewRow2[rowId].Viscosity === "" ? '-' : Number((Math.round(NewRow2[rowId - 1].Viscosity - NewRow2[rowId].Viscosity) * 100) / (NewRow2[rowId - 1].Viscosity)).toFixed(1))} readOnly /> </td>

                      <td> <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(NewRow.id)}></i> </td>
                    </>)
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
