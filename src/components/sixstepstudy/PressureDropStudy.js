import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import Pressure from "../modals/Pressure";
import { Button } from 'reactstrap';

const PressureDropStudy = () => {

    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top'};
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    const [modal, setModal] = useState();

    const toggle = () => {
        setModal(!modal)
    }

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
                                <Button color="primary"  className="mt-1" onClick={toggle}>{"Select Max Press from machine DB"}</Button>
                            </div>
                           
                        </div>
                    </div>
                    {modal && <Pressure toggle={toggle} modal={modal} />}
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="grid_container_btn">
                    <Button color="fifth" className="btn btn-sm" type="button"> {"Delete Row"} </Button>
                </div>
                <div>
                    <GridComponent pageSettings={{ pageSize: 5 }} editSettings={editSettings} allowPaging={true} toolbar={toolbarOptions}>
                        <ColumnsDirective>
                            <ColumnDirective field="FlowArea" headerText="Flow Area" textAlign="Left" width="100" />
                            <ColumnDirective field="PeakPressure" headerText="Peak Pressure" textAlign="Left" width="100" />
                            <ColumnDirective field="Maximum" headerText="% Maximum" textAlign="Left" width="100" />
                            <ColumnDirective field="DeltaP" headerText="Delta P" textAlign="Left" width="100" />
                            <ColumnDirective field="Delta" headerText="% Delta P"textAlign="Left" width="100" />
                        </ColumnsDirective>
                        <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                    </GridComponent>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="chart_container_btn">
                    <Button color="primary"> {"Calculate & Show Graph"} </Button>
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
