import React, { useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts'
import ColdEdit from '../modals/ColdEdit';
import { Button } from 'reactstrap';

const CavityBalance = () => {

    const [modal, setModal] = useState();

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>

            <div>
                <div className="form-group">
                    <ColdEdit toggle={toggle} modal={modal} />
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row ">
                        <div className="col-md-2 grid_container_btn cold_run_del_add_del_btn">
                                <Button color="secondary" className="btn btn-primary btn-sm" type="button"> {"Add Column"} </Button>
                            </div>
                            <div className="col-md-2 grid_container_btn">
                                <Button color="fifth" className="btn btn-sm" type="button"> {"Delete Row"} </Button>
                            </div>                           
                            <div className="col-md-2 grid_container_btn cold_run_del_add_del_btn">
                                <Button color="fifth" className="btn btn-sm" type="button"> {"Delete Column"} </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-md-6 mb-4">
                        <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                            <ColumnsDirective>
                                <ColumnDirective field="Time" headerText="Time" textAlign="Center" width="100" />
                                <ColumnDirective field="Weight" headerText="Weight1" textAlign="Center" width="100" />
                            </ColumnsDirective>
                            <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                        </GridComponent>
                    </div>
                    <div className="col-md-6">
                        <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                            <ColumnsDirective>
                                <ColumnDirective field="WeightIncrease" headerText="Weight Increase[Weigth1]" textAlign="Center" width="100" />
                                <ColumnDirective field="Weight" headerText="% Weight Increase[Weigth1]" textAlign="Center" width="100" />
                            </ColumnsDirective>
                            <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                        </GridComponent>
                    </div>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-4  chart_container_btn">
                        <select className="form-control digits" id="exampleFormControlSelect30">
                            <option>{"Weight1"}</option>
                        </select>
                    </div>
                    <div className="col-md-4  chart_container_btn">
                        <Button color="primary"> {"Calculate & Show Graph"} </Button>
                    </div>
                </div>
                <div className="col-md-12">
                    <ChartComponent>
                    </ChartComponent>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-right">
                    <Button color="third" className="btn-save-chart"> {"Save"} </Button>
                    <Button color="third"> {"Save As"} </Button>
                </div>
                
            </div>
            <hr></hr>
        </>
    )
}

export default CavityBalance;