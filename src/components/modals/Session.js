import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Session = ({ toggle2, modal2, handleAddFormChange2, handleAddFormSubmit2 }) => {
  return (
    <>
      <Button color="primary" onClick={toggle2}>Create session</Button>
      <form> 
        <Modal isOpen={modal2} toggle={toggle2} className="modal-body" centered={true}>
          <ModalHeader toggle={toggle2}>Add Session</ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect23" className="lbl_style">Select Mold ID :</label>
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <select className="form-control digits" name="Mold_Id" onChange={handleAddFormChange2}>
                    <option> 1 </option>
                    <option> 2 </option>
                    <option> 3 </option>
                    <option> 4 </option>
                    <option> 5 </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect23" className="lbl_style">Session Name :</label>
                </div>
              </div>
              <div className="col-md-8">
                <input className="form-control" name="Session_Name" type="text" onChange={handleAddFormChange2}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect23" className="lbl_style">Date :</label>
                </div>
              </div>
              <div className="col-md-8">
                <div className="input-group">
                  <input className="form-control" name="Date" type="date" onChange={handleAddFormChange2}/>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleAddFormSubmit2}> Create </Button>
            <Button color="fourth" onClick={toggle2}> Cancel </Button>
          </ModalFooter>
        </Modal>
      </form>
    </>
  )
}

export default Session
