import React, { useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import '../App.css';
import MoldGrid from './MoldGrid';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import SessionGrid from './SessionGrid';
import SixStepStudy from '../sixstepstudy/SixStepStudy';
import { row_data } from './Mold_Data';

const Dashboard = ({ user }) => {

    const [modal3, setModal3] = useState();

    const toggle3 = () => {
        setModal3(!modal3)
    }

    const [Mold_Id, setMold_Id] = useState(null)
    const [Session_Id, setSession_Id] = useState(null)
    const [showGrid, setShowGrid] = useState();
    const [showSixStep, setshowSixStep] = useState();

    const [NewRow2, setNewRow2] = useState(row_data);
    const [editFormData, setEditFormData] = useState();
    const [isRowId, setIsRowId] = useState(null);

    const [MoldData, setMoldData] = useState([]);

    const [SessionData, setSessionData] = useState([]);

    const [addSessionData, setAddSessionData] = useState({
        Mold_Id: "",
        Session_Name: "",
        Date: ""
    });

    const [addMoldData, setAddMoldData] = useState({
        Mold_Id: "",
        Platen_Orientation: "",
        Number_Of_Bases: "",
        Is_This_A_New_Mold: "",
        Number_Of_Parts: ""
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addMoldData };
        newFormData[fieldName] = fieldValue;

        setAddMoldData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        if (!addMoldData.Mold_Id) {
            alert("Please Enter Mold Data")
        }
        else {
            const newMold = {
                id: nanoid(),
                Mold_Id: addMoldData.Mold_Id,
                Platen_Orientation: addMoldData.Platen_Orientation ? addMoldData.Platen_Orientation : 'Vertical',
                Number_Of_Bases: addMoldData.Number_Of_Bases,
                Is_This_A_New_Mold: addMoldData.Is_This_A_New_Mold ? addMoldData.Is_This_A_New_Mold : 'Yes',
                Number_Of_Parts: addMoldData.Number_Of_Parts
            };

            const newMolds = [...MoldData, newMold];
            setMoldData(newMolds);
        }
    };

    const handleAddFormChange2 = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addSessionData };
        newFormData[fieldName] = fieldValue;

        setAddSessionData(newFormData);
    };

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

    const handleEditFormChange = (event) => {

        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue

        setEditFormData(newFormData)
    }

    const handleEditFormSubmit = (event) => {

        event.preventDefault();

        const editedValue = { id: isRowId };

        const newObject = Object.assign(editedValue, editFormData);

        const newValues = [...NewRow2];

        const index = NewRow2.findIndex((value) => value.id === isRowId);

        newValues[index] = newObject;

        setNewRow2(newValues);

        setIsRowId(null);

    }

    const setId = (event, value) => {

        event.preventDefault();

        setIsRowId(value.id);

        const formValues = Object.assign({}, value)

        setEditFormData(formValues);

    }

    return (
        <>
            {showGrid ? (showSixStep ? <div className='row'>
                <div className='mt-3'>
                    <i className="fas fa-backward viscocity_icons" onClick={() => setshowSixStep(false)}>Go Back</i>
                </div>
                <div>
                    <Breadcrumb parent="Dashboard / Six Step Study" title="Default" />
                </div>
            </div> : <Breadcrumb parent="Dashboard / Sessions" title="Default" />) : <Breadcrumb parent="Dashboard / Molds" title="Default" />}
            <div className="container-fluid">
                {showGrid ?
                    (showSixStep ? <SixStepStudy /> : <SessionGrid setshowSixStep={setshowSixStep} setSession_Id={setSession_Id} Session_Id={Session_Id} Mold_Id={Mold_Id} setShowGrid={setShowGrid} SessionData={SessionData} setSessionData={setSessionData} handleAddFormChange2={handleAddFormChange2} handleAddFormSubmit2={handleAddFormSubmit2} />)
                    :
                    (<MoldGrid handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit} MoldData={MoldData} setMoldData={setMoldData} setShowGrid={setShowGrid} modal3={modal3} toggle3={toggle3} setMold_Id={setMold_Id} />)
                }
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Dashboard);
