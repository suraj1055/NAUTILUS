import React, { useState } from 'react';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import Pressure from "../modals/Pressure";
import { Button } from 'reactstrap';
import PressureGrid from '../Grids/PressureGrid';
import { nanoid } from 'nanoid'
import data from "../data/Pressure_Drop_Data.json"

const PressureDropStudy = () => {

    const [modal, setModal] = useState();

    const toggle = () => {
        setModal(!modal)
    }

    const [modal2, setModal2] = useState();

    const toggle2 = () => {
        setModal2(!modal2)
    }

    const row1 = [];
    const [row, setRow] = useState();
    const [NewRow2, setNewRow2] = useState(data);
    // const [minViscosity, setMinViscosity] = useState()
    // const [maxViscosity, setMaxViscosity] = useState()
    // const [Interval, setInterval] = useState()

    const [editFormData, setEditFormData] = useState({
        Injection_Speed: "",
        Fill_Time: "",
        Peak_Inj_Press: "",
        Viscosity: "",
        Shear_Rate: ""
    })

    const [isRowId, setIsRowId] = useState(null)

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);

    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedValue = {
            id: isRowId,
            Injection_Speed: editFormData.Injection_Speed,
            Fill_Time: editFormData.Fill_Time,
            Peak_Inj_Press: editFormData.Peak_Inj_Press,
            Viscosity: Math.round(editFormData.Fill_Time * editFormData.Peak_Inj_Press),
            Shear_Rate: Number(1 / editFormData.Fill_Time).toFixed(3),
        }

        const newValues = [...NewRow2];

        const index = NewRow2.findIndex((value) => value.id === isRowId)

        newValues[index] = editedValue;

        setNewRow2(newValues);

        setIsRowId(null);

    }

    const addRow = (e) => {
        e.preventDefault();
        setRow(e.target.value)
    }

    const increaseRow = () => {
        for (let i = 0; i < parseInt(row); i++) {
            row1.push({
                id: nanoid(),
                Injection_Speed: "",
                Fill_Time: "",
                Peak_Inj_Press: "",
                Viscosity: "",
                Shear_Rate: ""
            })
        }
        setNewRow2([...NewRow2, ...row1]);
    };

    const deleteRow2 = (id) => {
        const updatedRows = [...NewRow2].filter((value) => {
            return value.id !== id;
        });
        setNewRow2(updatedRows);
    };

    const setId = (event, NewRow) => {

        event.preventDefault();

        setIsRowId(NewRow.id);

        const formValues = {
            Injection_Speed: NewRow.Injection_Speed,
            Fill_Time: NewRow.Fill_Time,
            Peak_Inj_Press: NewRow.Peak_Inj_Press,
        }

        setEditFormData(formValues);
    }

    // const setGraph = (event) => {

    //     setMinViscosity(NewRow2[NewRow2.length - 1].Viscosity - NewRow2[NewRow2.length - 1].Viscosity / 5)

    //     setMaxViscosity(NewRow2[NewRow2.length - NewRow2.length].Viscosity + NewRow2[NewRow2.length - NewRow2.length].Viscosity / 5)

    //     setInterval((NewRow2[0].Viscosity - NewRow2[NewRow2.length - 1].Viscosity) / 3)

    //     handleEditFormSubmit(event)
    // }

    return (
        <>
            <div className="">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect30" className="lbl_design"> </label>
                            <select className="form-control digits mt-2" id="exampleFormControlSelect30">
                                <option>{"psi"}</option>
                                <option>{"mPa"}</option>
                                <option>{"bar"}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="Nozzle_Length" className="lbl_design">Nozzle Length:</label>
                            <input className="form-control" id="Nozzle_Length" type="text" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="Orifice_Diameter" className="lbl_design"> Orifice Diameter: </label>
                            <input className="form-control" id="Orifice_Diameter" type="text" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="Max_Pressure_Available" className="lbl_design"> Max Pressure Available: </label>
                            <input className="form-control" id="Max_Pressure_Available" type="text" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="step-button">
                            <div className="pre-step-button2">
                                <Button color="primary" className="mt-1" onClick={toggle}>{"Select Max Press from machine DB"}</Button>
                            </div>

                        </div>
                    </div>
                    {modal && <Pressure toggle={toggle} modal={modal} />}
                </div>
            </div>
            <div className="grid-chart-container">
                <div>
                    <PressureGrid toggle2={toggle2} modal2={modal2} addRow={addRow} increaseRow={increaseRow} NewRow2={NewRow2} deleteRow2={deleteRow2} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} setId={setId} isRowId={isRowId} editFormData={editFormData} />
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="chart_container_btn">
                <Button color="primary"> Show Graph </Button>
                </div>
                <div>
                    <ChartComponent>
                    </ChartComponent>
                </div>
            </div>
            <div className="row save_saveas_btn">
                <div className="col-md-12 text-right">
                    <Button color="third" className="btn-save-chart"> {"Save"} </Button>
                </div>

            </div>
        </>
    )
}

export default PressureDropStudy;
