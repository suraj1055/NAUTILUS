import React, { useState } from 'react';

// Syncfusion chart control
import { ChartComponent, LineSeries, Inject, SeriesCollectionDirective, SeriesDirective, Category, DataLabel } from '@syncfusion/ej2-react-charts';

// This is a modal imported from modals folder since we have a button i.e Generate Injection Speed this modal gets displayed
import Viscocity from '../modals/Viscocity';
import '../App.css';
import { Button } from 'reactstrap';

// This is the Grid/Table of our viscosity curve import from Grids folder
import ViscocityGrid from '../Grids/ViscocityGrid';

// Newrow2 array is holding this data.
import data from "../data/Viscocity_curve_data.json"

// Generates random id's
import { nanoid } from 'nanoid'

const ViscocityCurve = () => {

    // Set's the visibility of the Generate Injection Speed modal
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }

    // Set's the visibility of the modal which we use to get the number of row's to be generated which is imported in Viscosity Grid.
    const [modal2, setModal2] = useState();
    const toggle2 = () => {
        setModal2(!modal2)
    }

    // This is our main array based on which all the row manupulation is done and which holds the row data as well.
    const [NewRow2, setNewRow2] = useState(data);

    // As the user enter's the number of row's it get's set in this variable.
    const [row, setRow] = useState();

    // This is the event to do the above said thing.
    const addRow = (e) => {
        e.preventDefault();
        setRow(e.target.value)
    }

    // This is a simple array which holds the number of objects based on the row variable
    const row1 = [];


    // This is the event which gets called as the user click's ok in the add row modal.
    // what it does is it run's a loop as many times the row variable is and along with that it pushes an object containing all the key's based on the grid with an id generated using nanoid library and then set's the row1 in the main array i.e NewRow2. 

    // Then using editFormData object, handleEditFormChange and handleEditFormSubmit we store the data in these objects as the user enter's in the grid's input field's  
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

    // This is the event which deletes the row as clicked on the delete icon, id of the row gets passed and using filter method that row is filtered out.
    const deleteRow2 = (id) => {
        const updatedRows = [...NewRow2].filter((value) => {
            return value.id !== id;
        });
        setNewRow2(updatedRows);
    };

    // There is an input field in viscosity curve asking for Intensification Ratio so this is a variable which holds the value of it and is used for calculations wherever needed.
    const [IntensificationRatio, setIntensificationRatio] = useState()

    // Based on the grid we will be showing two chart's one is Injection Speed and other is shear rate so this is a boolean variable which switches between true/false on a Drop Down below and due to that the respective chart code gets rendered.
    const [Injection_Speed, setInjection_Speed] = useState(true);

    // This is the event which does the switching part.
    const ChangeGraph = () => {
        setInjection_Speed(!Injection_Speed)
    }

    // An object in which we Initially store the new values entered in row/column and then we replace this object with the existing object in our main array.
    const [editFormData, setEditFormData] = useState({
        Injection_Speed: "",
        Fill_Time: "",
        Peak_Inj_Press: "",
        Viscosity: "",
        Shear_Rate: ""
    })

    // This event is called when the input field's of the grid get's changed.
    const handleEditFormChange = (event) => {
        event.preventDefault();

        // Initially check's whether the user has entered the Intensification Ratio if not then alerts with the given statement.
        if (!IntensificationRatio) {
            alert("Please enter Intensification Ratio")
        }

        // In the else part it does the job of storing the values entered by the user in the editFormData object.
        // Here the logic is like, as the event get's called on change of the input field it get's the name and value of that input field and then it is stored in the editFormData object.
        else {

            const fieldName = event.target.getAttribute("name");
            const fieldValue = event.target.value;

            const newFormData = { ...editFormData };
            newFormData[fieldName] = fieldValue;

            setEditFormData(newFormData);
        }
    }

    // When clicked on any row of the grid this event set's the id of that row in itself using this variable we check exactly in which row change has been done and help's to switch between editable and readOnly row.
    const [isRowId, setIsRowId] = useState(null)

    // Once the data in inside editFormData then using isRowId we check exactly in which row data has been entered and including that row's id and values inside editFormdata we create a new local object and this object is replaced with the existing row's object.
    // In such way we store the initially entered values and the changed values in our main array. 
    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        // This is the local object mentioned above
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

    // The below three variables are used to set the minimum, maximum and interval of the chart axis.
    const [minViscosity, setMinViscosity] = useState()
    const [maxViscosity, setMaxViscosity] = useState()
    const [Interval, setInterval] = useState()

    // This event get's called on the Show Graph button and based on the data in the NewRow2 array it set's the values.
    const setGraph = (event) => {

        event.preventDefault();

        // One of the axis in the chart contains by default values Viscosity.

        // So using the above state functions we set them, like based on the data the values will vary

        // The minimum value in the range of the axis will be diff of Highest Viscosity value and Lowest Vicosity value divided by 5, and vise versa for maximum value i.e summation, so that we can get somewhere around the Viscosity Values
        setMinViscosity(NewRow2[NewRow2.length - 1].Viscosity - NewRow2[NewRow2.length - 1].Viscosity / 5)

        setMaxViscosity(NewRow2[NewRow2.length - NewRow2.length].Viscosity + NewRow2[NewRow2.length - NewRow2.length].Viscosity / 5)

        // Interval is diff between two points on the axis and is found out by the diff between first two row's viscosity value divided by 3
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
                            <ChartComponent title="Viscosity Curve" primaryXAxis={{ valueType: "Category", title: "Injection Speed" }} primaryYAxis={{ title: "Viscosity", minimum: minViscosity, maximum: maxViscosity, interval: Interval }}>

                                <Inject services={[LineSeries, Category, DataLabel]} />

                                <SeriesCollectionDirective>
                                    <SeriesDirective type="Line" dataSource={NewRow2} xName="Injection_Speed" yName="Viscosity" marker={{ dataLabel: { visible: true }, visible: true }} ></SeriesDirective>
                                </SeriesCollectionDirective>

                            </ChartComponent>
                        )
                            :
                            (
                                <ChartComponent title="Viscosity Curve" primaryXAxis={{ valueType: "Category", title: "Shear Rate" }} primaryYAxis={{ title: "Viscosity", minimum: minViscosity, maximum: maxViscosity, interval: Interval }}>

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
