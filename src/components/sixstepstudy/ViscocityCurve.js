import React, { useState } from 'react';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import Viscocity from '../modals/Viscocity';
import '../App.css';
import { Button } from 'reactstrap';
import Table from 'react-bootstrap/Table'
import data from '../data/Viscocity_curve_data'
import { nanoid } from 'nanoid'

const ViscocityCurve = () => {

    const [modal, setModal] = useState();

    const [values, setValues] = useState(data);

    const [addInputValues, setInputValues] = useState({
        Injection_Speed: '',
        Fill_Time: '',
        Peak_Inj_Press: ''
    })

    const handleValueChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name")
        const fieldValue = event.target.value;

        const newInputValues = { ...addInputValues };
        newInputValues[fieldName] = fieldValue;

        setInputValues(newInputValues);
    }

    const handleValueSubmit = (event) => {
        event.preventDefault();

        const newValue = {
            id: nanoid(),
            Injection_Speed: addInputValues.Injection_Speed,
            Fill_Time: addInputValues.Fill_Time,
            Peak_Inj_Press: addInputValues.Peak_Inj_Press
        }

        const newValues = [...values, newValue]

        setValues(newValues);
    }

    const toggle = () => {
        setModal(!modal)
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
                                    <input className="form-control" id="Intensification_Ratio" type="text" />
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
                                </div >
                                {modal && <Viscocity toggle={toggle} modal={modal} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <form onSubmit={handleValueSubmit} >
                <input type="text" name="Injection_Speed" onChange={handleValueChange} />

                <input type="text" name="Fill_Time" onChange={handleValueChange} />

                <input type="text" name="Peak_Inj_Press" onChange={handleValueChange} />

                
                
            </form>


            <div className="grid-chart-container">

                <div>
                    <Table striped bordered hover responsive variant="light">
                        <thead>
                            <tr>
                                <th> Injection Speed </th>
                                <th> Fill Time (sec) </th>
                                <th> Peak Inj Press </th>
                                <th> Viscocity </th>
                                <th> ShearRate </th>
                                <th>AbsoluteDropViscocity </th>
                                <th> %DropViscocity </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {values.map((value) => 
                                <tr>
                                    <td> {value.Injection_Speed} </td>
                                    <td> {value.Injection_Speed} </td>
                                    <td> {value.Injection_Speed} </td>
                                    <td> {value.Injection_Speed} </td>
                                    <td> {value.Injection_Speed} </td>
                                    <td> {value.Injection_Speed} </td>
                                    <td> {value.Injection_Speed} </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>

            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect30" className="lbl_design"> X-Axis: </label>
                            <select className="form-control digits" id="exampleFormControlSelect30">
                                <option>{"Injection Speed"}</option>
                                <option>{"Shear Rate"}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <Button color="primary"> {"Calculate & Show Graph"} </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ChartComponent>
                        </ChartComponent>
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
