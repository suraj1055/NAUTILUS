import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Cancel } from "../../constant";
import DatePicker from "react-datepicker";
import "../../assets/custom-stylesheet/app2_style.css";
import "../../assets/custom-stylesheet/samplepage_style.css";
import SessionMold from '../pages/SessionMold';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Samplepage = () => {

  const history = useHistory();
  const [modal2, setModal2] = useState();

  const toggle2 = () => {
    setModal2(!modal2)
  }

  const [modal3, setModal3] = useState();

  const toggle3 = () => {
    setModal3(!modal3)
  }

  const [startDate, setstartDate] = useState(new Date())

  const handleChange = date => {
    setstartDate(date);
  };


  return (
        <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Button className="create_mold_btn" color="primary" onClick={toggle3}>Create Mold</Button>
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
                      <input className="form-control " id="exampleInputPassword27" type="text" placeholder="Mold ID" />
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
                        <select className="form-control digits" id="exampleFormControlSelect30">
                          <option>select</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
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
                      <input className="form-control " id="exampleInputPassword27" type="text" placeholder="Number of Bases" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect23" className="lbl_style"> Is this a New Mold : </label>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect30" >
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
                      <input className="form-control " id="exampleInputPassword27" type="text" placeholder="Number of Parts" />
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary">Create</Button>
                  <Button color="secondary" onClick={toggle3}>{Cancel}</Button>
                </ModalFooter>
              </Modal>
            </div>
            <div className="col-md-6 col-sm-12">
              <Button color="primary" onClick={toggle2}>Create session</Button>
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
                        <select className="form-control digits" id="exampleFormControlSelect30">
                          <option>select</option>
                          <option>{"2"}</option>
                          <option>{"3"}</option>
                          <option>{"4"}</option>
                          <option>{"5"}</option>
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
                      <input className="form-control " id="exampleInputPassword27" type="text" />
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
                        <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary">Create</Button>
                  <Button color="secondary" onClick={toggle2}>{Cancel}</Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <SessionMold history={history} />
        </div>
    </>

  );
};

export default Samplepage;