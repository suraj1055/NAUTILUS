import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CosmeticEdit = ({modal, toggle}) => {
    return (
        <div className="btn-showcase">
            {/* < !-- Using Form Modal --> */}
            <Button color="primary" className="mt-1" onClick={toggle}>{"Generate Pressure Values"}</Button>
            <Modal isOpen={modal} toggle={toggle} centered={true}>
                <ModalHeader toggle={toggle}>{"Add Pressure Values"}</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect23" className="lbl_style"> {"Minimum value"}:</label>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control " id="exampleInputPassword27" type="text" placeholder="Minimum value" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect23" className="lbl_style"> {"Maximum value"}:</label>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control " id="exampleInputPassword27" type="text" placeholder="Maximum value" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect23" className="lbl_style"> {"Increment value"}:</label>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control " id="exampleInputPassword27" type="text" placeholder="Increment value" />
                            </div>
                        </div>
                        
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">{"Rescale"}</Button>
                    <Button color="secondary" onClick={toggle}>{"Cancel"}</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CosmeticEdit;
