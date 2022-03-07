import React, { useState } from 'react';
import { ChartComponent, LineSeries, Inject, SeriesCollectionDirective, SeriesDirective, Category, DataLabel } from '@syncfusion/ej2-react-charts';
// import Pressure from "../modals/Pressure";
import PressureGrid from '../Grids/PressureGrid';
import { nanoid } from 'nanoid'
import data from "../data/Pressure_Drop_Data.json"

const PressureDropStudy = () => {

    // const [modal, setModal] = useState();

    // const toggle = () => {
    //     setModal(!modal)
    // }

    const [modal2, setModal2] = useState();

    const toggle2 = () => {
        setModal2(!modal2)
    }

    const row1 = [];
    const [row, setRow] = useState();
    const [NewRow2, setNewRow2] = useState(data);
    const [Max_Press_Available, setMax_Press_Available] = useState()
    // const [minViscosity, setMinViscosity] = useState()
    // const [maxViscosity, setMaxViscosity] = useState()
    // const [Interval, setInterval] = useState()


    const [editFormData, setEditFormData] = useState({
        Flow_Area: "",
        Peak_Pressure: "",
        Percent_Maximum: "",
        Max_Press_Available: Max_Press_Available
    })

    const [isRowId, setIsRowId] = useState(null)

    const handleEditFormChange = (event) => {
        event.preventDefault();

        if (!Max_Press_Available) {
            alert("Please Enter Max Pressure")
        }

        else {
            const fieldName = event.target.getAttribute("name");
            const fieldValue = event.target.value;

            const newFormData = { ...editFormData };
            newFormData[fieldName] = fieldValue;

            setEditFormData(newFormData);
        }

    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedValue = {
            id: isRowId,
            Flow_Area: editFormData.Flow_Area,
            Peak_Pressure: editFormData.Peak_Pressure,
            Percent_Maximum: (editFormData.Peak_Pressure * 100) / Max_Press_Available,
            Max_Press_Available: Max_Press_Available
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
                Flow_Area: "",
                Peak_Pressure: "",
                Percent_Maximum: "",
                Delta_P: "",
                Percent_Delta_P: ""
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
            Flow_Area: NewRow.Flow_Area,
            Peak_Pressure: NewRow.Peak_Pressure,
            Percent_Maximum: NewRow.Percent_Maximum,
        }

        setEditFormData(formValues);
    }

    const setGraph = (event) => {

        // setMinViscosity(NewRow2[NewRow2.length - 1].Viscosity - NewRow2[NewRow2.length - 1].Viscosity / 5)

        // setMaxViscosity(NewRow2[NewRow2.length - NewRow2.length].Viscosity + NewRow2[NewRow2.length - NewRow2.length].Viscosity / 5)

        // setInterval((NewRow2[0].Viscosity - NewRow2[NewRow2.length - 1].Viscosity) / 3)
    }

    return (
        <>
            <div className='Pressure p-2'>
                <div className="card p-4">
                    <div className="row">
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label className="lbl_design"> Units: </label>
                                        <select className="form-control">
                                            <option>{"psi"}</option>
                                            <option>{"mPa"}</option>
                                            <option>{"bar"}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="Nozzle_Length" className="lbl_design">Nozzle Length:</label>
                                        <input className="form-control" id="Nozzle_Length" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="Orifice_Diameter" className="lbl_design"> Orifice Diameter: </label>
                                        <input className="form-control" id="Orifice_Diameter" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group" onMouseOut={handleEditFormSubmit}>
                                        <label htmlFor="Max_Pressure_Available" className="lbl_design"> Max Pressure Available: </label>
                                        <input className="form-control" id="Max_Pressure_Available" type="text" onChange={(e) => setMax_Press_Available(e.target.value)} />
                                    </div>
                                </div>
                                {/* <div className="col-md-4">
                                <div className="step-button">
                                    <div className="pre-step-button2">
                                        <Button color="primary" className="btn-max-pre" onClick={toggle}>{"Select Max Press from machine DB"}</Button>
                                    </div>

                                </div>
                            </div>
                            {modal && <Pressure toggle={toggle} modal={modal} />} */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card p-4">
                    <div className="grid-chart-container">
                        <div>
                            <PressureGrid toggle2={toggle2} modal2={modal2} addRow={addRow} increaseRow={increaseRow} NewRow2={NewRow2} deleteRow2={deleteRow2} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} setId={setId} isRowId={isRowId} editFormData={editFormData} Max_Press_Available={Max_Press_Available} />
                        </div>
                    </div>
                </div>

                <div className="card p-4">

                    <div className="grid-chart-container">
                        <div className="chart_container_btn">
                            <button className="btn btn-pill btn-primary btn-air-primary mr-4" type="button" onClick={setGraph}> Show Graph </button>
                        </div>
                        <div>
                            <ChartComponent title="Pressure Drop Study" primaryXAxis={{ valueType: "Category", title: "Flow Area" }} primaryYAxis={{ title: "Max Pressure" }}>

                                <Inject services={[LineSeries, Category, DataLabel]} />

                                <SeriesCollectionDirective>
                                    <SeriesDirective type="Line" dataSource={NewRow2} xName="Flow_Area" yName="Max_Press_Available" marker={{ dataLabel: { visible: true }, visible: true }} ></SeriesDirective>

                                    <SeriesDirective type="Line" dataSource={NewRow2} xName="Flow_Area" yName="Peak_Pressure" marker={{ dataLabel: { visible: true }, visible: true }} ></SeriesDirective>
                                </SeriesCollectionDirective>

                            </ChartComponent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PressureDropStudy;
