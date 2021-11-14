import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts'
import { Button } from 'reactstrap';

const PackAndHold = () => {

    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top'};
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    return (

        <>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="Pack_Pressure_Units" className="lbl_design"> Pack Pressure Units: </label>
                        <select className="form-control digits" id="Pack_Pressure_Units">
                            <option>{"psi"}</option>
                            <option>{"ppsi"}</option>
                            <option>{"Mpa"}</option>
                            <option>{"Bar"}</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="Final_Desired_Part_Weight" className="lbl_design">Final Desired Part Weight:</label>
                        <input className="form-control" id="Final_Desired_Part_Weight" type="text" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="Part_Weight_Units" className="lbl_design">Part Weight Units: </label>
                        <select className="form-control digits" id="Part_Weight_Units">
                            <option>{"gms"}</option>
                            <option>{"oz"}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="Copy_Data_From_Cold_Runner" className="lbl_design">Copy Data From Cold Runner: </label>
                        <select className="form-control digits" id="Copy_Data_From_Cold_Runner">
                            <option>{"Weight1"}</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="step-button">
                        <div className="pack-hold-import-data">
                            <div className="form-group">
                                <Button color="primary"> {"Import Data"} </Button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="grid-chart-container">
                <div className="grid_container_btn">
                    <Button color="fifth" className="btn btn-sm" type="button"> {"Delete Row"} </Button>
                </div>
                <div>
                    <GridComponent pageSettings={{ pageSize: 5 }} editSettings={editSettings} allowPaging={true} toolbar={toolbarOptions}>
                        <ColumnsDirective>
                            <ColumnDirective field="Time" headerText="Time (sec)" textAlign="Left" width="100" />
                            <ColumnDirective field="PartWeight" headerText="Part Weight" textAlign="Left" width="100" />
                            <ColumnDirective field="ActualWeightIncrease" headerText="Actual Weight Increase" textAlign="Left" width="100" />
                            <ColumnDirective field="WeightIncrease" headerText="% Weight Increase" textAlign="Left" width="100" />
                            <ColumnDirective field="PackPressure" headerText="Pack Pressure" textAlign="left" width="100" />
                        </ColumnsDirective>
                        <Inject services={[DetailRow, Page, Edit, CommandColumn, Toolbar]} />
                    </GridComponent>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-4 grid_container_btn">
                        <Button color="primary"> {"Calculate & Show Graph"} </Button>
                    </div>
                </div>
                <div>
                    <ChartComponent>
                    </ChartComponent>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-right mb-4">
                    <Button color="third" className="btn-save-chart"> {"Save"} </Button>
                </div>
            </div>
        </>
    )
}

export default PackAndHold
