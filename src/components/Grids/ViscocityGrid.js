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

  return (
    <div>
      <div className="mb-4 d-flex justify-content-between">
        <div>
          <button className="btn btn-pill btn-secondary btn-air-secondary mr-4" type="button" onClick={toggle2}> Add Row </button>
          <ViscocityAddRow toggle2={toggle2} modal2={modal2} addRow={addRow} increaseRow={increaseRow} />
        </div>
        <div>
          <button className="btn btn-pill btn-fifth btn-air-fifth mr-4" type="button">Print</button>
          <button className="btn btn-pill btn-primary btn-air-primary" type="button" onClick={handleShow}>Comment</button>
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
          <Table striped bordered hover responsive variant="light" >
            <thead>
              <tr>
                <th className="viscosity_heading2" >
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
                <th>
                  <span> Action </span>
                </th>
              </tr>
            </thead>
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

                        <td className='icon-position'> <i className="fas fa-trash" onClick={() => deleteRow2(NewRow.id)}></i> </td>
                      </>
                    )
                    :
                    (<>
                      <td> <input type='text' className="form-control" style={{backgroundColor:'#fff'}} value={NewRow.Injection_Speed} readOnly /> </td>

                      <td> <input type='text' className="form-control" style={{backgroundColor:'#fff'}} value={NewRow.Fill_Time} readOnly /> </td>

                      <td> <input type='text' className="form-control" style={{backgroundColor:'#fff'}} value={NewRow.Peak_Inj_Press} readOnly /> </td>

                      <td> <input type='text' className="form-control" name="Viscosity" value={NewRow2[rowId].Viscosity === "" ? ('-') : (Math.round(NewRow2[rowId].Fill_Time * NewRow2[rowId].Peak_Inj_Press * IntensificationRatio))} readOnly /> </td>

                      <td> <input type='text' className="form-control" name="Shear_Rate" value={NewRow2[rowId].Shear_Rate === "" ? '-' : Number(NewRow.Shear_Rate).toFixed(3)} readOnly /> </td>

                      <td> <input type='text' className="form-control" name="Absolute_Viscosity" value={rowId === 0 ? ('-') : (NewRow2[rowId].Viscosity === "" ? '-' : (Math.round(NewRow2[rowId - 1].Viscosity - NewRow2[rowId].Viscosity)))} readOnly /> </td>

                      <td> <input type='text' className="form-control" name="Drop_Viscosity" value={rowId === 0 ? ('-') : (NewRow2[rowId].Viscosity === "" ? '-' : Number((Math.round(NewRow2[rowId - 1].Viscosity - NewRow2[rowId].Viscosity) * 100) / (NewRow2[rowId - 1].Viscosity)).toFixed(1))} readOnly /> </td>

                      <td className='icon-position'> <i className="fas fa-trash" onClick={() => deleteRow2(NewRow.id)}></i> </td>
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
