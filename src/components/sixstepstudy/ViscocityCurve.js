import React, { useState } from 'react';
import { ChartComponent, LineSeries, Inject, SeriesCollectionDirective, SeriesDirective, Category, DataLabel } from '@syncfusion/ej2-react-charts';
import Viscocity from '../modals/Viscocity';
import '../App.css';
import { Button } from 'reactstrap';
import ViscocityGrid from '../Grids/ViscocityGrid';
import data from "../data/Viscocity_curve_data.json"
import { nanoid } from 'nanoid'

const ViscocityCurve = () => {

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
    const [IntensificationRatio, setIntensificationRatio] = useState()
    const [Injection_Speed, setInjection_Speed] = useState(true);
    const [minViscosity, setMinViscosity] = useState()
    const [maxViscosity, setMaxViscosity] = useState()
    const [Interval, setInterval] = useState()

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

        if (!IntensificationRatio) {
            alert("Please enter Intensification Ratio")
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
            Injection_Speed: editFormData.Injection_Speed,
            Fill_Time: editFormData.Fill_Time,
            Peak_Inj_Press: editFormData.Peak_Inj_Press,
            Viscosity: Math.round(editFormData.Fill_Time * editFormData.Peak_Inj_Press * IntensificationRatio),
            Shear_Rate: Number(1 / editFormData.Fill_Time).toFixed(3)
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

    const ChangeGraph = () => {
        setInjection_Speed(!Injection_Speed)
    }

    const setGraph = (event) => {

        setMinViscosity(NewRow2[NewRow2.length - 1].Viscosity - NewRow2[NewRow2.length - 1].Viscosity / 5)

        setMaxViscosity(NewRow2[NewRow2.length - NewRow2.length].Viscosity + NewRow2[NewRow2.length - NewRow2.length].Viscosity / 5)

        setInterval((NewRow2[0].Viscosity - NewRow2[NewRow2.length - 1].Viscosity) / 3)
    }

    return (
        <>
            <div className="viscocity-curve">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="Injection_Speed_Units" className="lbl_design"> Injection Speed Units: </label>
                                    <select className="form-control digits" id="Injection_Speed_Units">
                                        <option>{"1"}</option>
                                        <option>{"2"}</option>
                                        <option>{"3"}</option>
                                        <option>{"4"}</option>
                                        <option>{"5"}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="Intensification_Ratio" className="lbl_design">Intensification Ratio:</label>
                                    <input className="form-control" onChange={(e) => setIntensificationRatio(e.target.value)} id="Intensification_Ratio" type="text" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="Pressure_Units" className="lbl_design"> Pressure Units: </label>
                                    <input className="form-control" id="Pressure_Units" type="text" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="step-button">
                                    <Button color="primary" className="step-button2" onClick={toggle}> {"Generate Injection Speed"} </Button>
                                    {modal && <Viscocity toggle={toggle} modal={modal} />}
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid-chart-container">
                <div>
                    <ViscocityGrid toggle2={toggle2} modal2={modal2} addRow={addRow} increaseRow={increaseRow} NewRow2={NewRow2} deleteRow2={deleteRow2} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} setId={setId} isRowId={isRowId} editFormData={editFormData} IntensificationRatio={IntensificationRatio} />
                </div>
            </div>

            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect30" className="lbl_design"> X-Axis: </label>
                            <select className="form-control digits" id="exampleFormControlSelect30" onChange={ChangeGraph}>
                                <option>{"Injection Speed"}</option>
                                <option>{"Shear Rate"}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <Button color="primary" onClick={setGraph}> Show Graph </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {Injection_Speed ? (
                            <ChartComponent title="Viscosity Curve" width="1100" primaryXAxis={{ valueType: "Category", title: "Injection Speed" }} primaryYAxis={{ title: "Viscosity", minimum: minViscosity, maximum: maxViscosity, interval: Interval }}>

                                <Inject services={[LineSeries, Category, DataLabel]} />

                                <SeriesCollectionDirective>
                                    <SeriesDirective type="Line" dataSource={NewRow2} xName="Injection_Speed" yName="Viscosity" marker={{ dataLabel: { visible: true }, visible: true }} ></SeriesDirective>
                                </SeriesCollectionDirective>

                            </ChartComponent>
                        )

                            :

                            (
                                <ChartComponent title="Viscosity Curve" width="1100" primaryXAxis={{ valueType: "Category", title: "Shear Rate" }} primaryYAxis={{ title: "Viscosity", minimum: minViscosity, maximum: maxViscosity, interval: Interval }}>

                                    <Inject services={[LineSeries, Category, DataLabel]} />

                                    <SeriesCollectionDirective>
                                        <SeriesDirective type="Line" dataSource={NewRow2} xName="Shear_Rate" yName="Viscosity" marker={{ dataLabel: { visible: true }, visible: true }} ></SeriesDirective>
                                    </SeriesCollectionDirective>

                                </ChartComponent>
                            )}
                    </div>
                </div>

            </div>
            <div className="row save_saveas_btn">
                <div className="col-md-12">
                    <div className="text-right">
                        <Button color="third"> {"Save"} </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViscocityCurve;
