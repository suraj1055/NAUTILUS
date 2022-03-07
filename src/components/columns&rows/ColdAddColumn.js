import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ColdAddColumn = ({ toggle, modal, addHeader, addColumn }) => {
    return (
        <div className="btn-showcase">
                <button className="btn btn-pill btn-fifth btn-air-fifth mr-4" type="button"onClick={toggle}> Add Column </button>
                <Modal isOpen={modal} toggle={toggle} centered={true}>
                    <ModalHeader toggle={toggle}>
                        Add column
                    </ModalHeader>
                    <ModalBody>
                        <form autoComplete='off'>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label htmlFor="add-column" className="lbl_style">1: </label>
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <input className="form-control" id="exampleInputPassword27" type="text" placeholder="Enter Header Name" name="header" onChange={addHeader} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={addColumn}> Add </Button>
                        <Button color="fourth" onClick={toggle}> Cancel </Button>
                    </ModalFooter>
                </Modal>
        </div>
    )
}

export default ColdAddColumn;
