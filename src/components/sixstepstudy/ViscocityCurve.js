import React, { useState } from 'react';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import Viscocity from '../modals/Viscocity';
import '../App.css';
import { Button } from 'reactstrap';
import ViscocityGrid from '../Grids/ViscocityGrid'

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
    const [NewRow, setNewRow] = useState([]);
    const [allRowsAdded, updateAllRows] = useState(0);

    const addRow = (e) => {
        e.preventDefault();
        setRow(e.target.value)
    }

    const increaseRow = () => {
        for (let i = 0; i < parseInt(row); i++) {
            row1[i] = allRowsAdded + i;
        }
        updateAllRows((allRowsAdded) => allRowsAdded + parseInt(row));
        setNewRow([...NewRow, ...row1]);
    };

    const deleteRow = (id) => {
        const updatedRows = [...NewRow].filter((rowId) => {
          return rowId !== id;
        });
        setNewRow(updatedRows);
      };

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

            <div className="grid-chart-container">
                <div>
                    <ViscocityGrid toggle2={toggle2} modal2={modal2} addRow={addRow} increaseRow={increaseRow} deleteRow={deleteRow} NewRow={NewRow} />
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
