import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CosmeticEdit = ({ modal, toggle, setHeader1, setHeader2, Melting, Hydraulic }) => {
    return (

        <div className="btn-showcase">
            {/* < !-- Using Form Modal --> */}
            <Button color="primary" onClick={toggle}>{"Edit"}</Button>
            <Modal isOpen={modal} toggle={toggle} centered={true}>
                <ModalHeader toggle={toggle}>{"Change Header Text"}</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect23" className="lbl_style"> {"X-Axis"}:</label>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <input className="form-control" defaultValue={Melting} type="text" onChange={setHeader1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect23" className="lbl_style"> {"Y-Axis"}:</label>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <input className="form-control" defaultValue={Hydraulic} type="text" onChange={setHeader2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">{"Set"}</Button>
                    <Button color="fourth" onClick={toggle}>{"Cancel"}</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CosmeticEdit;
