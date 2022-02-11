import React, { useState, useEffect } from 'react';
import "../../assets/custom-stylesheet/app2_style.css";
import "../../assets/custom-stylesheet/samplepage_style.css";
import SessionMold from '../pages/MoldGrid';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { nanoid } from 'nanoid'
import Mold from '../modals/Mold';
import Session from '../modals/Session';
import { mold, session } from '../data/Session_Mold_data';
import { connect } from 'react-redux';

const Samplepage = ({ user }) => {

  const history = useHistory();
  const [modal2, setModal2] = useState();
  const [modal3, setModal3] = useState();

  const [MoldData, setMoldData] = useState(mold);
  const [SessionData, setSessionData] = useState(session);

  const [addMoldData, setAddMoldData] = useState({
    Mold_Id: "",
    Platen_Orientation: "",
    Number_Of_Bases: "",
    Is_This_A_New_Mold: "",
    Number_Of_Parts: ""
  });

  const [addSessionData, setAddSessionData] = useState({
    Mold_Id: "",
    Session_Name: "",
    Date: ""
  });

  const toggle2 = () => {
    setModal2(!modal2)
  }

  const toggle3 = () => {
    setModal3(!modal3)
  }

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addMoldData };
    newFormData[fieldName] = fieldValue;

    setAddMoldData(newFormData);
  };

  const handleAddFormChange2 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addSessionData };
    newFormData[fieldName] = fieldValue;

    setAddSessionData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    if (!addMoldData.Mold_Id) {
      alert("Please enter Mold Data")
    }
    else {
      const newMold = {
        id: nanoid(),
        Mold_Id: addMoldData.Mold_Id,
        Platen_Orientation: addMoldData.Platen_Orientation,
        Number_Of_Bases: addMoldData.Number_Of_Bases,
        Is_This_A_New_Mold: addMoldData.Is_This_A_New_Mold,
        Number_Of_Parts: addMoldData.Number_Of_Parts
      };

      const newMolds = [...MoldData, newMold];
      setMoldData(newMolds);
    }
  };

  const handleAddFormSubmit2 = (event) => {
    event.preventDefault();

    if (!addSessionData.Session_Name) {
      alert("Please enter Session Data")
    }
    else {
      const newSession = {
        id: nanoid(),
        Mold_Id: addSessionData.Mold_Id,
        Session_Name: addSessionData.Session_Name,
        Date: addSessionData.Date
      };

      const newSessions = [...SessionData, newSession];
      setSessionData(newSessions);
    }

    console.log(session)
  };

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Mold modal3={modal3} toggle3={toggle3} handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit} />
          </div>
          <div className="col-md-6 col-sm-12">
            <Session modal2={modal2} toggle2={toggle2} handleAddFormChange2={handleAddFormChange2} handleAddFormSubmit2={handleAddFormSubmit2} />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <SessionMold history={history} MoldData={MoldData} SessionData={SessionData} />
      </div>
    </>

  );
};

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Samplepage);