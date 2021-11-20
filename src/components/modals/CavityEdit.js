import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CavityEdit = ({ modal, toggle, column, addHeader, editHeader }) => {
    return (
        <div className="btn-showcase">
            {/* < !-- Using Form Modal --> */}
            <Button color="primary" onClick={toggle}> Edit </Button>
            <Modal isOpen={modal} toggle={toggle} centered={true}>
                <ModalHeader toggle={toggle}>{"Edit Header's Value"}</ModalHeader>
                <ModalBody>
                    <form>
                        {column.map(() => (
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                {/* <label htmlFor="exampleFormControlSelect23" className="lbl_style">{"1"}:</label> */}
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <input className="form-control " id="exampleInputPassword27" type="text" placeholder="" onChange={addHeader}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={editHeader}>{"Update"}</Button>
                    <Button color="fourth" onClick={toggle}>{"Cancel"}</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CavityEdit
