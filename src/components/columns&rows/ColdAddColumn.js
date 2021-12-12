import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ColdAddColumn = ({ toggle, modal, addHeader, addColumn}) => {
    return (
        <div className="btn-showcase">
            <Button onClick={toggle} color="fifth" className="btn btn-sm" type="button"> Add Column </Button>
            <Modal isOpen={modal} toggle={toggle} centered={true}>
                <ModalHeader toggle={toggle}>
                    Add column
                </ModalHeader>
                <ModalBody>
                    <form>
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
