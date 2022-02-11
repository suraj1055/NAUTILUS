import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Mold = ({ toggle3, modal3, handleAddFormChange, handleAddFormSubmit }) => {
    return (
        <>
            <Button className="create_mold_btn" color="primary" onClick={toggle3}>Create Mold</Button>
            <form>
                <Modal isOpen={modal3} toggle={toggle3} className="modal-body" centered={true}>
                    <ModalHeader toggle={toggle3}> Add Mold </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect23" className="lbl_style">Enter New Mold ID:</label>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" name="Mold_Id" type="text" placeholder="Mold ID" onChange={handleAddFormChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
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
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect23" className="lbl_style"> Number of Bases : </label>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" name="Number_Of_Bases" type="text" placeholder="Number of Bases" onChange={handleAddFormChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect23" className="lbl_style"> Is this a Family Mold : </label>
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
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect23" className="lbl_style"> Number of Parts :</label>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" name="Number_Of_Parts" type="text" placeholder="Number of Parts" onChange={handleAddFormChange}/>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type='submit' onClick={handleAddFormSubmit}>Create</Button>
                        <Button color="fourth" onClick={toggle3}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </form>
        </>
    )
}

export default Mold
