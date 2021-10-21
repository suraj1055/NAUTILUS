import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts'
import { Button } from 'reactstrap';

const PackAndHold = () => {
    return (

        <>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect30" className="lbl_design"> Pack Pressure Units: </label>
                        <select className="form-control digits" id="exampleFormControlSelect30">
                            <option>{"psi"}</option>
                            <option>{"ppsi"}</option>
                            <option>{"Mpa"}</option>
                            <option>{"Bar"}</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword27" className="lbl_design">Final Desired Part Weight:</label>
                        <input className="form-control" id="exampleInputPassword27" type="text" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword27" className="lbl_design">Part Weight Units: </label>
                        <select className="form-control digits" id="exampleFormControlSelect30">
                            <option>{"gms"}</option>
                            <option>{"oz"}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword27" className="lbl_design">Copy Data From Cold Runner: </label>
                        <select className="form-control digits" id="exampleFormControlSelect30">
                            <option>{"Weight1"}</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group step-button">
                        <Button color="primary"> {"Import Data"} </Button>
                    </div>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="grid_container_btn">
                    <Button color="primary"> {"Delete Row"} </Button>
                </div>
                <div>
                    <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                        <ColumnsDirective>
                            <ColumnDirective field="Time" headerText="Time (sec)" textAlign="Center" width="100" />
                            <ColumnDirective field="PartWeight" headerText="Part Weight" textAlign="Center" width="100" />
                            <ColumnDirective field="ActualWeightIncrease" headerText="Actual Weight Increase" textAlign="Center" width="100" />
                            <ColumnDirective field="WeightIncrease" headerText="% Weight Increase" textAlign="Center" width="100" />
                            <ColumnDirective field="PackPressure" headerText="Pack Pressure" textAlign="left" width="100" />
                        </ColumnsDirective>
                        <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
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
                <div className="col-md-12 text-right">
                    <Button color="primary" className="btn-save-chart"> {"Save"} </Button>
                    <Button color="primary"> {"Save As"} </Button>
                </div>                
            </div>           
        </>
    )
}

export default PackAndHold
