import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import Viscocity from '../modals/Viscocity';
import '../App.css';
import { Button } from 'reactstrap';

const ViscocityCurve = () => {

    const [modal, setModal] = useState();

    const toggle = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className="viscocity-curve">
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect30" className="lbl_design"> Injection Speed Units: </label>
                        <select className="form-control digits" id="exampleFormControlSelect30">
                            <option>{"1"}</option>
                            <option>{"2"}</option>
                            <option>{"3"}</option>
                            <option>{"4"}</option>
                            <option>{"5"}</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword27" className="lbl_design">Intensification Ratio:</label>
                        <input className="form-control" id="exampleInputPassword27" type="text" />
                    </div>
                </div>

                <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword27" className="lbl_design"> Pressure Units: </label>
                        <input className="form-control" id="exampleInputPassword27" type="text" />
                    </div>
                </div>

                <div className="step-button">
                    <Button color="primary" onClick={toggle}> {"Generate Injection Speed"} </Button>
                </div >
                {modal && <Viscocity toggle={toggle} modal={modal} />}

            </div>

            <div className="grid-chart-container">
                <div className="grid_delete_row">
                    <Button color="primary"> {"Delete Row"} </Button>
                </div>
                <div>
                    <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                        <ColumnsDirective>
                            <ColumnDirective field="InjectionSpeed" headerText="Injection Speed" textAlign="Center" width="100" />
                            <ColumnDirective field="FillTime" headerText="Fill Time (sec)" textAlign="Center" width="100" />
                            <ColumnDirective field="PeakInjPress" headerText="Peak Inj Press" textAlign="Center" width="100" />
                            <ColumnDirective field="Viscocity" headerText="Viscocity" textAlign="Center" width="100" />
                            <ColumnDirective field="ShearRate" headerText="Shear Rate" textAlign="Center" width="100" />
                            <ColumnDirective field="AbsoluteDropViscocity" headerText="Absolute Drop Viscocity" textAlign="Center" width="100" />
                            <ColumnDirective field="DropViscocity" headerText="% Drop Viscocity" textAlign="Center" width="100" />
                        </ColumnsDirective>
                        <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                    </GridComponent>
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
                <div className="col-md-12">
                    <ChartComponent>
                    </ChartComponent>
                </div>
            </div>           
            <div className="row">
                <div className="col-md-12">
                    <div className="text-right mt-2">
                    <Button color="primary"> {"Save"} </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViscocityCurve;
