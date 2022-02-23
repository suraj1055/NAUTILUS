import React, { useState } from 'react';
import "../../assets/custom-stylesheet/app2_style.css";
import "../../assets/custom-stylesheet/samplepage_style.css";
import { useHistory } from 'react-router-dom';
import '../App.css';
import Mold from './CreateMold';
import Table from 'react-bootstrap/Table';
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';

const MoldGrid = ({ MoldData, setMoldData, modal3, toggle3, handleAddFormChange, handleAddFormSubmit, handleEditPartSubmit, handleEditPartChange, NewRow2, setPartId, isPartId, setPartNumber, PartNumber, setPart, partColumn, setpartColumn, setNewRow2, setEdit, editMold }) => {

    const history = useHistory();

    // This an local object which stores the edit mold data.
    const [editMoldData, setEditMoldData] = useState({
        Mold_Id: "",
        Platen_Orientation: "",
        Number_Of_Bases: "",
        Is_This_A_New_Mold: "",
        Number_Of_Parts: ""
    })

    // Set's the Id of the Mold in which the data has been edited.
    const [isRowId, setIsRowId] = useState(null);

    // Redirect's to Session's page with the Id of the mold on which the user has clicked
    const handleSession = (MoldId) => {
        history.push(`/dashboard/session/${MoldId}`)
    }

    // This is the event which first store's the edited data in the local object.
    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editMoldData };
        newFormData[fieldName] = fieldValue;

        setEditMoldData(newFormData);

    }

    // This the event which then updates the previos object with the edited object.
    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedValue = {
            id: isRowId,
            Mold_Id: editMoldData.Mold_Id,
            Platen_Orientation: editMoldData.Platen_Orientation,
            Number_Of_Bases: editMoldData.Number_Of_Bases,
            Is_This_A_New_Mold: editMoldData.Is_This_A_New_Mold,
            Number_Of_Parts: editMoldData.Number_Of_Parts,
            Part_Details: NewRow2 ? NewRow2 : ''
        }

        const newValues = [...MoldData];

        const index = MoldData.findIndex((value) => value.id === isRowId)

        newValues[index] = editedValue;

        setMoldData(newValues);

        console.log(partColumn)

    }

    // Get's called when clicked on the delete icon and Removes that row of the grid
    const deleteRow2 = (id) => {
        const updatedRows = [...MoldData].filter((value) => {
            return value.id !== id;
        });
        setMoldData(updatedRows);
    };

    // Set's the Id of that row using which we do the editing of the data
    const setId = (event, mold) => {

        event.preventDefault();

        setIsRowId(mold.id);

        const formValues = {
            Mold_Id: mold.Mold_Id,
            Platen_Orientation: mold.Platen_Orientation,
            Number_Of_Bases: mold.Number_Of_Bases,
            Is_This_A_New_Mold: mold.Is_This_A_New_Mold,
            Number_Of_Parts: mold.Number_Of_Parts,
            Part_Details: mold.Part_Details ? mold.Part_Details : ''
        }

        setEditMoldData(formValues);
        setpartColumn(editMoldData.Number_Of_Parts);
        setPart();
        setNewRow2(formValues.Part_Details);
    }

    // Get's called when clicked on the edited icon and set's the id of that row along with that set's the visibilty of edit modal to true.
    const handleEdit = (e, mold) => {
        setId(e, mold)
        setEdit()
    }

    return (
        <>
            <div className="container-fluid">
                <div className="current-page-lable mt-2">
                    <p> Molds </p>
                </div>
                <div className='back-conatainer'>
                    <div className="container-fluid">
                        <div className="row">
                            <Mold modal3={modal3} toggle3={toggle3} handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} handleEditPartSubmit={handleEditPartSubmit} handleEditPartChange={handleEditPartChange} NewRow2={NewRow2} setPartId={setPartId} isPartId={isPartId} setPartNumber={setPartNumber} PartNumber={PartNumber} setPart={setPart} partColumn={partColumn} setpartColumn={setpartColumn} setNewRow2={setNewRow2} editMold={editMold} setEdit={setEdit} editMoldData={editMoldData} setIsRowId={setIsRowId} />

                        </div>
                    </div>
                    <div className="mt-2">
                        <form autoComplete="off">
                            <div className="viscosity_table" style={{ height: '510px' }}>
                                <Table striped bordered hover responsive variant="light">
                                    <thead>
                                        <tr>
                                            <th className='Pressure_Heading'>
                                                <span>Mold ID</span>
                                            </th>
                                            <th className='Pressure_Heading'>
                                                <span> Platen Orientation  </span>
                                            </th>
                                            <th className='Pressure_Heading'>
                                                <span> Number of Bases </span>
                                            </th>
                                            <th className='Pressure_Heading'>
                                                <span> Is a Family Mold </span>
                                            </th>
                                            <th className='Pressure_Heading'>
                                                <span> Number of Parts </span>
                                            </th>
                                            <th className='Pressure_Heading'>
                                                <span> Go to Sessions </span>
                                            </th>
                                            <th className='Pressure_Heading'>
                                                <span> Action </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="grid_style">
                                        {MoldData.map((mold, moldId) => (
                                            <tr key={MoldData[moldId].id}>

                                                <td> <input type='text' className="form-control text-box-disabled" name="Mold_Id" value={mold.Mold_Id} readOnly /> </td>

                                                <td> <input type='text' className="form-control" name="Platen_Orientation" value={mold.Platen_Orientation} readOnly /> </td>

                                                <td> <input type='text' className="form-control" name="Number_Of_Bases" value={mold.Number_Of_Bases} readOnly /> </td>

                                                <td> <input type='text' className="form-control" name="Is_This_A_New_Mold" value={mold.Is_This_A_New_Mold} readOnly /> </td>

                                                <td> <input type='text' className="form-control" name="Number_Of_Parts" value={mold.Number_Of_Parts} readOnly /> </td>

                                                <td className='icon-position'> <i className="fas fa-link viscocity_icons" onClick={() => handleSession(mold.Mold_Id)}></i> </td>

                                                <td className='icon-position'>
                                                    <i className="fas fa-edit viscocity_icons" style={{ paddingRight: '5px' }} onClick={(event) => handleEdit(event, mold)}></i>

                                                    <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(mold.id)}></i>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MoldGrid