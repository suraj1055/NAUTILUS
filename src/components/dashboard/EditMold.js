import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import '../App.css';
import { column_data, row_data } from './Mold_Data';

const EditMold = ({ setEdit, editMold, handleEditFormSubmit, handleEditPartSubmit, handleEditPartChange, NewRow2, setPartId, isPartId, setPartNumber, setPart, partColumn, setpartColumn, setNewRow2, handleEditFormChange, editMoldData, setIsRowId }) => {

    const handlePartNumber = (e) => {
        setPartNumber(e.target.value)
        handleEditFormChange(e)
    }

    const handleSubmit = (e) => {
        handleEditFormSubmit(e);
        setEdit();
        setIsRowId(null)
        setpartColumn(column_data);
        setNewRow2(row_data)
    }

    const handleClose = () => {
        setIsRowId(null)
        setpartColumn(column_data);
        setNewRow2(row_data)
        setEdit();
    }

    return (
        <Modal isOpen={editMold} className="modal-body" centered={true}>
            <ModalHeader toggle={setEdit}> Edit Mold Detail's </ModalHeader>
            <ModalBody>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="lbl_style">Enter New Mold ID:</label>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <input className="form-control" name="Mold_Id" type="text" defaultValue={editMoldData.Mold_Id} placeholder="Mold ID" onChange={handleEditFormChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="lbl_style">Platen Orientation :</label>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="form-group">
                            <select className="form-control digits" name="Platen_Orientation" defaultValue={editMoldData.Platen_Orientation} onChange={handleEditFormChange}>
                                <option> Vertical </option>
                                <option> Horizontal </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect23" className="lbl_style"> Number of Bases : </label>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <input className="form-control" name="Number_Of_Bases" type="text" placeholder="Number of Bases" defaultValue={editMoldData.Number_Of_Bases} onChange={handleEditFormChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="lbl_style"> Is this a Family Mold : </label>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="form-group">
                            <select className="form-control" name="Is_This_A_New_Mold" defaultValue={editMoldData.Is_This_A_New_Mold} onChange={handleEditFormChange} >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label className="lbl_style"> No. of Parts: </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" name="Number_Of_Parts" type="text" defaultValue={editMoldData.Number_Of_Parts} placeholder="Number of Parts" onChange={handlePartNumber} />
                    </div>
                    <div className="col-md-2">
                        <Button color="primary" type='submit' onClick={setPart}> Set </Button>
                    </div>
                </div>
                <div>
                    <div className="mold">
                        {/* This table is coming from Bootstrap */}
                        <Table striped bordered hover responsive variant="light">
                            <thead>
                                <tr>

                                    {partColumn.map((value, key1) => (

                                        <th key={value.id}>
                                            <div className="table-heading-content">
                                                <div className="table-heading">
                                                    {key1 === 0 ? <h6> {value.Part} </h6> : <h6> {`Part ${key1}`} </h6>}
                                                </div>
                                            </div>
                                        </th>

                                    ))}
                                </tr>
                            </thead>
                            <tbody className="grid_style">
                                {/* Here the row's are generated with the help of NewRow2 array and the <td>'s  should be equal to the number of columns e.g 3 td's for 3 columns */}

                                {/* After that 1st column will be containing static row's, names will be based on the mold, so that's what we are checking over here */}

                                {/* If the edit property of the column array's object is false then it will be the static row i.e 1st row but if not then editable row which switches as clicked on it to editable and then readOnly */}

                                {NewRow2.map((value, key1) => (
                                    <tr key={value.id}>
                                        {partColumn.map((value2, key2) => (
                                            <React.Fragment key={value2.id}>
                                                {value2.edit === false ?
                                                    (<td> <input type='text' className="form-control" value={value.Cavity_Data} readOnly /> </td>)
                                                    :
                                                    <>
                                                        {isPartId === value.id ?
                                                            (
                                                                <td onMouseOut={handleEditPartSubmit}>

                                                                    <input type='text' className="form-control" name={`Part${key2}`} onChange={handleEditPartChange} defaultValue={NewRow2[key1][`Part${key2}`] || ''} autoFocus />

                                                                </td>
                                                            )
                                                            :
                                                            (
                                                                <td onClick={(event) => setPartId(event, value)}>

                                                                    <input type='text' name={`Part${key2}`} className="form-control" defaultValue={NewRow2[key1][`Part${key2}`] || ''} readOnly />

                                                                </td>
                                                            )
                                                        }
                                                    </>
                                                }
                                            </React.Fragment>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" type='submit' onClick={handleSubmit}> Update </Button>
                <Button color="primary" type='submit' onClick={handleClose}> Close </Button>
            </ModalFooter>
        </Modal>
    )
}

export default EditMold