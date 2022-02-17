import React, { useState } from 'react'
import "../../assets/custom-stylesheet/app2_style.css";
import "../../assets/custom-stylesheet/samplepage_style.css";
import '../App.css';
import Session from './Session';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';
import { nanoid } from 'nanoid';

const SessionGrid = ({ user }) => {

  const [modal2, setModal2] = useState();

  const toggle2 = () => {
    setModal2(!modal2)
  }

  // These are the state's which store the Mold's and Session's created by the user.
  const [SessionData, setSessionData] = useState([]);

  // An Local Object to store the Session Data which is stored in the Above Session Array.
  const [addSessionData, setAddSessionData] = useState({
    Mold_Id: "",
    Session_Name: "",
    Date: ""
  });

  const [editSessionData, setEditSessionData] = useState({
    Mold_Id: "",
    Session_Name: "",
    Date: ""
  })

  const [isRowId, setIsRowId] = useState(null)

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editSessionData };
    newFormData[fieldName] = fieldValue;

    setEditSessionData(newFormData);

  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedValue = {
      id: isRowId,
      Mold_Id: editSessionData.Mold_Id,
      Session_Name: editSessionData.Session_Name,
      Date: editSessionData.Date,
    }

    const newValues = [...SessionData];

    const index = SessionData.findIndex((value) => value.id === isRowId)

    newValues[index] = editedValue;

    setSessionData(newValues);

    setIsRowId(null);

  }

  // This Event store's the Local Session Object in the main Session Data array.
  const handleAddFormSubmit2 = (event) => {
    event.preventDefault();

    if (!addSessionData.Session_Name) {
      alert("Please enter Session Data")
    }
    else {
      const newSession = {
        id: nanoid(),
        Mold_Id: addSessionData.Mold_Id ? addSessionData.Mold_Id : '1',
        Session_Name: addSessionData.Session_Name,
        Date: addSessionData.Date
      };

      const newSessions = [...SessionData, newSession];
      setSessionData(newSessions);
    }
  };

  // The event to store the Session Data into the local Object
  const handleAddFormChange2 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addSessionData };
    newFormData[fieldName] = fieldValue;

    setAddSessionData(newFormData);
  };

  const setId = (event, session) => {

    event.preventDefault();

    setIsRowId(session.id);

    const formValues = {
      Mold_Id: session.Mold_Id,
      Session_Name: session.Session_Name,
      Date: session.Date
    }

    setEditSessionData(formValues);
  }

  // useEffect(() => {
  //   if (user) {
  //     console.log(user.id)
  //   }
  //   else {
  //     console.log("N/A")
  //   }
  // }, [user])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="m-4">
            <Session modal2={modal2} toggle2={toggle2} handleAddFormChange2={handleAddFormChange2} handleAddFormSubmit2={handleAddFormSubmit2} />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <form autoComplete="off">
          <Table striped bordered hover responsive variant="light">
            <thead>
              <tr>
                <th className="Pressure_Heading">
                  <h6> Mold ID </h6>
                </th>
                <th className="Pressure_Heading">
                  <h6> Session Name </h6>
                </th>
                <th className="Pressure_Heading">
                  <h6> Date </h6>
                </th>
                <th style={{ width: '200px' }}>
                  <h6> Go to Six Step Study</h6>
                </th>
              </tr>
            </thead>
          </Table>
          <div className="viscosity_table" onMouseOut={handleEditFormSubmit}>
            <Table striped bordered hover responsive variant="light">
              <tbody className="grid_style">
                {SessionData.map((session, sessionId) => (
                  <tr key={SessionData[sessionId].id} onClick={(event) => setId(event, session)}>
                    <>
                      {isRowId === SessionData[sessionId].id ?
                        (
                          <>
                            <td> <input type='text' className="form-control" name="Mold_Id" value={session.Mold_Id} readOnly /> </td>

                            <td> <input type='text' className="form-control" name="Session_Name" onChange={handleEditFormChange} value={editSessionData.Platen_Orientation} /> </td>

                            <td> <input type='text' className="form-control" name="Date" value={editSessionData.Number_Of_Bases} readOnly /> </td>

                            <td style={{ width: '200px' }}> <i className="fas fa-link viscocity_icons" ></i> </td>
                          </>
                        )
                        :
                        (
                          <>
                            <td> <input type='text' className="form-control" name="Mold_Id" value={session.Mold_Id} readOnly /> </td>

                            <td> <input type='text' className="form-control" name="Session_Name" value={session.Session_Name} readOnly /> </td>

                            <td> <input type='text' className="form-control" name="Date" value={session.Date} readOnly /> </td>

                            <td style={{ width: '200px' }}> <i className="fas fa-link viscocity_icons" ></i> </td>
                          </>
                        )
                      }
                    </>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </form>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(SessionGrid);