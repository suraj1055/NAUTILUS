import React, { useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts'
import GenerateEdit from '../modals/GenerateEdit'
import HotEdit from '../modals/HotEdit';
import { Button } from 'reactstrap';

const HotRunner = () => {

    const [modal, setModal] = useState();

    const toggle = () => {
        setModal(!modal)
    }

    const [modal2, setModal2] = useState();

    const toggle2 = () => {
        setModal2(!modal2)
    }


    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <HotEdit toggle={toggle} modal={modal} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group hot_run_btns">
                        <HotEdit toggle={toggle} modal={modal} />
                    </div>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-2 grid_container_btn">
                        <Button color="primary"> {"Delete Row"} </Button>
                    </div>

                    <div className="col-md-2 grid_container_btn hot_run_btns">
                        <Button color="primary"> {"Add Column"} </Button>
                    </div>

                    <div className="col-md-2 grid_container_btn hot_run_btns">
                        <Button color="primary"> {"Delete Column"} </Button>
                    </div>
                </div>
                <div>
                    <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                        <ColumnsDirective>
                            <ColumnDirective field="Time" headerText="Time" textAlign="Center" width="100" />
                            <ColumnDirective field="100" headerText="100" textAlign="Center" width="100" />
                            <ColumnDirective field="200" headerText="200" textAlign="Center" width="100" />
                            <ColumnDirective field="300" headerText="300" textAlign="Center" width="100" />
                            <ColumnDirective field="400" headerText="400" textAlign="Center" width="100" />
                            <ColumnDirective field="500" headerText="500" textAlign="Center" width="100" />
                        </ColumnsDirective>
                        <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                    </GridComponent>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-4 chart_container_btn">
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

export default HotRunner
