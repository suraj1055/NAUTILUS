import React, { useState } from 'react';
import "../../assets/custom-stylesheet/app2_style.css";
import "../../assets/custom-stylesheet/samplepage_style.css";
// import { useHistory } from 'react-router-dom';
import '../App.css';
import Mold from '../modals/Mold';
import Table from 'react-bootstrap/Table'
import '../App.css';
import '../../assets/custom-stylesheet/grid_stylecss.css';

const MoldGrid = ({ MoldData, setMoldData, setShowGrid, modal3, toggle3, handleAddFormChange, handleAddFormSubmit, setMold_Id }) => {

    const [editMoldData, setEditMoldData] = useState({
        Mold_Id: "",
        Platen_Orientation: "",
        Number_Of_Bases: "",
        Is_This_A_New_Mold: "",
        Number_Of_Parts: ""
    })

    const [isRowId, setIsRowId] = useState(null)

    const handleSession = (moldid) => {
        setMold_Id(moldid)
        setShowGrid(true)
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editMoldData };
        newFormData[fieldName] = fieldValue;

        setEditMoldData(newFormData);

    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedValue = {
            id: isRowId,
            Mold_Id: editMoldData.Mold_Id,
            Platen_Orientation: editMoldData.Platen_Orientation,
            Number_Of_Bases: editMoldData.Number_Of_Bases,
            Is_This_A_New_Mold: editMoldData.Is_This_A_New_Mold,
            Number_Of_Parts: editMoldData.Number_Of_Parts
        }

        const newValues = [...MoldData];

        const index = MoldData.findIndex((value) => value.id === isRowId)

        newValues[index] = editedValue;

        setMoldData(newValues);

        setIsRowId(null);

    }

    const deleteRow2 = (id) => {
        const updatedRows = [...MoldData].filter((value) => {
            return value.id !== id;
        });
        setMoldData(updatedRows);
    };

    const setId = (event, mold) => {

        event.preventDefault();

        setIsRowId(mold.id);

        const formValues = {
            Mold_Id: mold.Mold_Id,
            Platen_Orientation: mold.Platen_Orientation,
            Number_Of_Bases: mold.Number_Of_Bases,
            Is_This_A_New_Mold: mold.Is_This_A_New_Mold,
            Number_Of_Parts: mold.Number_Of_Parts
        }

        setEditMoldData(formValues);
    }

    // useEffect(() => {
    //     if (user) {
    //         console.log(user.id)
    //     }
    //     else {
    //         console.log("N/A")
    //     }
    // }, [user])

    return (
        <>
            <div className="container-fluid">
                <div className="row m-4">
                    <div>
                        <Mold modal3={modal3} toggle3={toggle3} handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit} />
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
                                    <h6> Platen Orientation  </h6>
                                </th>
                                <th className="Pressure_Heading">
                                    <h6> Number of Bases </h6>
                                </th>
                                <th className="Pressure_Heading">
                                    <h6> Is a Family Mold </h6>
                                </th>
                                <th className="Pressure_Heading">
                                    <h6> Number of Parts </h6>
                                </th>
                                <th>
                                    <h6> Go to Sessions </h6>
                                </th>
                                <th>
                                    <h6> Action </h6>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                    <div className="viscosity_table" onMouseOut={handleEditFormSubmit}>
                        <Table striped bordered hover responsive variant="light">
                            <tbody className="grid_style">
                                {MoldData.map((mold, moldId) => (
                                    <tr key={MoldData[moldId].id} onClick={(event) => setId(event, mold)}>
                                        <>
                                            {isRowId === mold.id ?
                                                (
                                                    <>
                                                        <td> <input type='text' className="form-control" name="Mold_Id" onChange={handleEditFormChange} value={editMoldData.Mold_Id} /> </td>

                                                        <td> <input type='text' className="form-control" name="Platen_Orientation" onChange={handleEditFormChange} value={editMoldData.Platen_Orientation} /> </td>

                                                        <td> <input type='text' className="form-control" name="Number_Of_Bases" onChange={handleEditFormChange} value={editMoldData.Number_Of_Bases} /> </td>

                                                        <td> <input type='text' className="form-control" name="Is_This_A_New_Mold" onChange={handleEditFormChange} value={editMoldData.Is_This_A_New_Mold} /> </td>

                                                        <td> <input type='text' className="form-control" name="Number_Of_Parts" onChange={handleEditFormChange} value={editMoldData.Number_Of_Parts} /> </td>

                                                        <td style={{ width: '90px' }}> <i className="fas fa-link viscocity_icons" onClick={() => handleSession(mold.Mold_Id)}></i> </td>

                                                        <td>
                                                            <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(mold.id)}></i>
                                                        </td>
                                                    </>
                                                )
                                                :
                                                (
                                                    <>
                                                        <td> <input type='text' className="form-control" name="Mold_Id" value={mold.Mold_Id} readOnly /> </td>

                                                        <td> <input type='text' className="form-control" name="Platen_Orientation" value={mold.Platen_Orientation} readOnly /> </td>

                                                        <td> <input type='text' className="form-control" name="Number_Of_Bases" value={mold.Number_Of_Bases} readOnly /> </td>

                                                        <td> <input type='text' className="form-control" name="Is_This_A_New_Mold" value={mold.Is_This_A_New_Mold} readOnly /> </td>

                                                        <td> <input type='text' className="form-control" name="Number_Of_Parts" value={mold.Number_Of_Parts} readOnly /> </td>

                                                        <td style={{ width: '90px' }}> <i className="fas fa-link viscocity_icons" onClick={() => handleSession(mold.Mold_Id)}></i> </td>

                                                        <td>
                                                            <i className="fas fa-trash viscocity_icons" onClick={() => deleteRow2(mold.id)}></i>
                                                        </td>
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

export default MoldGrid