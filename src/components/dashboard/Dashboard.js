import React, { useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import '../App.css';
import MoldGrid from './MoldGrid';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import SessionGrid from './SessionGrid';
import SixStepStudy from '../sixstepstudy/SixStepStudy';

const Dashboard = ({ user }) => {

    const [modal3, setModal3] = useState();

    const toggle3 = () => {
        setModal3(!modal3)
    }
    
    const [Mold_Id, setMold_Id] = useState(null)
    const [Session_Id, setSession_Id] = useState(null)
    const [showGrid, setShowGrid] = useState();
    const [showSixStep, setshowSixStep] = useState();

    const [MoldData, setMoldData] = useState([]);

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

    return (
        <>
           {showGrid ?  (showSixStep ? <Breadcrumb parent="Dashboard / Six Step Study" title="Default" /> : <Breadcrumb parent="Dashboard / Sessions" title="Default" />) :  <Breadcrumb parent="Dashboard / Molds" title="Default" />}
            <div className="container-fluid">
                {showGrid ?
                    (showSixStep ? <SixStepStudy /> : <SessionGrid setshowSixStep={setshowSixStep} setSession_Id={setSession_Id} Session_Id={Session_Id} />)
                    :
                    (<MoldGrid handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit} MoldData={MoldData} setMoldData={setMoldData} setShowGrid={setShowGrid} modal3={modal3} toggle3={toggle3} setMold_Id={setMold_Id} Mold_Id={Mold_Id} />)
                }
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Dashboard);
