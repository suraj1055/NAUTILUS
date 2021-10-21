import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import styled from 'styled-components';
// import { Button, Form } from 'react-bootstrap';
// import { CreateButton, ButtonWrapper } from '../pages/WorkSpace';

// const Background = styled.div`
//     width: 99vw;
//     height: 100vh;
//     background-color:rgba(0,0,0,0.2);
//     position: fixed;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 100;
//     margin-top: 15rem;
// `

// const SessionForm = styled.div`
//     font-size: 1rem;
//     width: 350px;
//     height: 350px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     background: #fff;
//     padding: 2rem;
//     border-radius: 5px;
//     z-index: 100;
// `

// const FormHeading = styled.h4`
//     margin: 2rem 1rem;
// `

const CosmeticEdit = ({modal, toggle}) => {
    return (
        // <Background>
        //     <SessionForm>
        //         <FormHeading> Change Header Text </FormHeading>
        //         <Form>
        //             <Form.Group className="d-flex">
        //                 <Form.Label className="mt-1 w-25"> 1: </Form.Label>
        //                 <Form.Control className="mb-4 w-100" type="text" />
        //             </Form.Group>
        //             <Form.Group className="d-flex">
        //                 <Form.Label className="mt-1 w-25"> 2: </Form.Label>
        //                 <Form.Control className="mb-4 w-100" type="text" />
        //             </Form.Group>
        //         </Form>
        //         <ButtonWrapper>
        //             <CreateButton>
        //                 <Button variant="dark" type="submit"> Set </Button>
        //             </CreateButton>
        //             <CreateButton>
        //                 <Button variant="dark" onClick={openEdit}> Cancel </Button>
        //             </CreateButton>
        //         </ButtonWrapper>
        //     </SessionForm>
        // </Background>

        <div className="btn-showcase">
        {/* < !-- Using Form Modal --> */}
        <Button color="primary" onClick={toggle}>{"Edit"}</Button>
        <Modal isOpen={modal} toggle={toggle} centered={true}>
            <ModalHeader toggle={toggle}>{"Change Header Text"}</ModalHeader>
            <ModalBody>
                <form>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect23" className="lbl_style"> {"X-Axis"}:</label>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <input className="form-control " id="exampleInputPassword27" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect23" className="lbl_style"> {"Y-Axis"}:</label>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <input className="form-control " id="exampleInputPassword27" type="text" placeholder="" />
                        </div>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary">{"set"}</Button>
                <Button color="secondary" onClick={toggle}>{"Cancel"}</Button>
            </ModalFooter>
        </Modal>
    </div>
    )
}

export default CosmeticEdit;
