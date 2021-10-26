import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CoolingEdit = ({ modal, toggle }) => {

    return (

        <div className="btn-showcase">
            {/* < !-- Using Form Modal --> */}
            <Button color="primary" onClick={toggle}>{"Edit"}</Button>
            <Modal isOpen={modal} toggle={toggle} centered={true}>
                <ModalHeader toggle={toggle}>{"Edit Header's Value"}</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label htmlFor="cool_lbl_1" className="lbl_style"> {"1"}:</label>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <input className="form-control " id="cool_lbl_1" type="text" placeholder="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <div className="col-md-8">
                                <input className="form-control " id="exampleInputPassword27" type="text" placeholder="" />
                            </div> */}
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">{"Update"}</Button>
                    <Button color="fourth" onClick={toggle}>{"Cancel"}</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CoolingEdit;