import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import '../App.css';
import { column_data } from './Mold_Data';
import { nanoid } from 'nanoid';

const Mold = ({ toggle3, modal3, handleAddFormChange, handleAddFormSubmit, isRowId, handleEditFormSubmit, handleEditFormChange, NewRow2, setId }) => {

    const [partColumn, setpartColumn] = useState(column_data);
  
    const [PartNumber, setPartNumber] = useState(null);

    const setPart = () => {
        let col = []
        for (let i = 0; i < parseInt(PartNumber); i++) {
            col.push({
                id: nanoid(),
                Part_No: "Part"
            })
        }
        setpartColumn([...partColumn, ...col]);
    };

    const handlePartNumber = (e) => {
        setPartNumber(e.target.value)
        handleAddFormChange(e)
    }

    const handleCreateMold = (e) => {
        if (PartNumber) {
            handleAddFormSubmit(e)
        } else {
            alert("Please Enter No. Of Parts")
        }
    }

    return (
        <>
            <Button className='Primary' onClick={() => console.log(NewRow2) }> Show Data </Button>
            <Button className="create_mold_btn" color="primary" onClick={toggle3}>Create Mold</Button>
            <form>
                <Modal isOpen={modal3} toggle={toggle3} className="modal-body" centered={true}>
                    <ModalHeader toggle={toggle3}> Add Mold </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect23" className="lbl_style">Enter New Mold ID:</label>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" name="Mold_Id" type="text" placeholder="Mold ID" onChange={handleAddFormChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect23" className="lbl_style">Platen Orientation :</label>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group">
                                    <select className="form-control digits" name="Platen_Orientation" onChange={handleAddFormChange}>
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
                                <input className="form-control" name="Number_Of_Bases" type="text" placeholder="Number of Bases" onChange={handleAddFormChange} />
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
                                    <select className="form-control" name="Is_This_A_New_Mold" onChange={handleAddFormChange} >
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
                                <input className="form-control" name="Number_Of_Parts" type="text" placeholder="Number of Parts" onChange={handlePartNumber} />
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

                                            {partColumn.map((value, key) => (
                                                <>
                                                    <th key={value.id}>
                                                        <div className="table-heading-content">
                                                            <div className="table-heading">
                                                                {key === 0 ? <h6> {value.Part} </h6> : <h6> {`Part ${key}`} </h6>}
                                                            </div>
                                                        </div>
                                                    </th>
                                                </>
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
                                                    <>
                                                        {value2.edit === false ?
                                                            (<td> <input type='text' className="form-control" value={value.Cavity_Data} readOnly /> </td>)
                                                            :
                                                            <>
                                                                {isRowId === value.id ?
                                                                    (
                                                                        <td onMouseOut={handleEditFormSubmit}>

                                                                            <input type='text' className="form-control" name={`Part${key2}`} onChange={handleEditFormChange} defaultValue={NewRow2[key1][`Part${key2}`] || ''} autoFocus />

                                                                        </td>
                                                                    )
                                                                    :
                                                                    (
                                                                        <td onClick={(event) => setId(event, value)}>

                                                                            <input type='text' name={`Part${key2}`} className="form-control" defaultValue={NewRow2[key1][`Part${key2}`] || ''} readOnly />

                                                                        </td>
                                                                    )
                                                                }
                                                            </>
                                                        }
                                                    </>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type='submit' onClick={handleCreateMold}>Create</Button>
                        <Button color="fourth" onClick={toggle3}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </form>
        </>
    )
}

export default Mold
