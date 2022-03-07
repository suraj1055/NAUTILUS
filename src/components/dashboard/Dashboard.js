import React, { useState } from 'react';
// import Breadcrumb from '../common/breadcrumb';
import '../App.css';
import MoldGrid from './MoldGrid';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { column_data, row_data } from './Mold_Data';

const Dashboard = ({ user }) => {

    // Toggle for showing create mold modal
    const [modal3, setModal3] = useState(false);

    // Toggle for showing edit modal
    const [editMold, setEditMold] = useState(false);

    // Event to do the toggling create Mold Modal
    const toggle3 = () => {
        setModal3(!modal3)
    }

    // Event to do the toggling part of the edit mold
    const setEdit = () => {
        setEditMold(!editMold)
    }

    // These are the states which deal with Part data details for storing and editing
    const [NewRow2, setNewRow2] = useState(row_data);
    const [editFormData, setEditFormData] = useState();
    const [isPartId, setIsPartId] = useState(null);
    const [partColumn, setpartColumn] = useState(column_data);
    const [PartNumber, setPartNumber] = useState(null);

    // These are the state's which store the Mold's and Session's created by the user.
    const [MoldData, setMoldData] = useState([]);

    // An Local Object to store the Mold Data which is stored in the Above Mold Array.
    const [addMoldData, setAddMoldData] = useState({
        Mold_Id: "",
        Platen_Orientation: "",
        Number_Of_Bases: "",
        Is_This_A_New_Mold: "",
        Number_Of_Parts: ""
    });

    const setPart = () => {
        let col = []
        for (let i = 0; i < parseInt(PartNumber); i++) {
            col.push({
                "id": nanoid(),
                "Part_No": `Part${i + 1}`,
                "delete": true
            })
        }
        setpartColumn([...partColumn, ...col]);
    };

    // The event to store the Mold Data into the local Object.
    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addMoldData };
        newFormData[fieldName] = fieldValue;

        setAddMoldData(newFormData);
    };

    // This Event store's the Local Mold Object in the main Mold Data array.
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
                Number_Of_Parts: addMoldData.Number_Of_Parts,
                Part_Details: NewRow2 ? NewRow2 : ''
            };

            const newMolds = [...MoldData, newMold];
            setMoldData(newMolds);
        }
    };

    // Now these are the event's which deal with the part detail's
    // There is an Local Object 'editFormData' to store the Part Data which is stored in the NewRow2 Array.
    const handleEditPartChange = (event) => {

        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue

        setEditFormData(newFormData)
    }

    // This the event which store the editFormData in the NewRow2 Array
    const handleEditPartSubmit = (event) => {

        event.preventDefault();

        const editedValue = { id: isPartId };

        const newObject = Object.assign(editedValue, editFormData);

        const newValues = [...NewRow2];

        const index = NewRow2.findIndex((value) => value.id === isPartId);

        newValues[index] = newObject;

        setNewRow2(newValues);

        setIsPartId(null);

    }

    const setPartId = (event, value) => {

        event.preventDefault();

        setIsPartId(value.id);

        const formValues = Object.assign({}, value)

        setEditFormData(formValues);

    }

    return (
        <>
            {/* <Breadcrumb parent="Dashboard / Molds" title="Default" /> */}

            <MoldGrid handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit} MoldData={MoldData} setMoldData={setMoldData} modal3={modal3} toggle3={toggle3} handleEditPartSubmit={handleEditPartSubmit} handleEditPartChange={handleEditPartChange} NewRow2={NewRow2} setPartId={setPartId} isPartId={isPartId} setPartNumber={setPartNumber} PartNumber={PartNumber} setPart={setPart} partColumn={partColumn} setpartColumn={setpartColumn} setNewRow2={setNewRow2} setEdit={setEdit} editMold={editMold} />

        </>
    );
};

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Dashboard);
