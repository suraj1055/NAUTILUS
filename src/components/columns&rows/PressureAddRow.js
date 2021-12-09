import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PressureAddRow = ({ toggle2, modal2, addRow, increaseRow }) => {
    return (
        <div>
            <div className="btn-showcase">
            <Modal isOpen={modal2} toggle={toggle2} centered={true}>
                <ModalHeader toggle={toggle2}>
                    Add Row
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="add-column" className="lbl_style">Enter Number Of Rows: </label>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <input className="form-control" id="exampleInputPassword27" type="text" placeholder="Enter Number Of Rows" name="rows" onChange={addRow} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={increaseRow}> Add </Button>
                    <Button color="fourth" onClick={toggle2}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
        </div>
    )
}

export default PressureAddRow
