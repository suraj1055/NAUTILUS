import React, { useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts'
import GenerateEdit from '../modals/GenerateEdit'
import HotEdit from '../modals/HotEdit';
import { Button } from 'reactstrap';

const HotRunner = () => {

    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top'};
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    const [modal, setModal] = useState();
    const [modal2, setModal2] = useState();

    const toggle = () => {
        setModal(!modal)
    }

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
                        <Button color="primary" onClick={toggle2}>{"Edit Pressure Value"}</Button>
                        {modal2 && <GenerateEdit toggle2={toggle2} modal2={modal2} />}
                    </div>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">

                    <div className="col-md-2 grid_container_btn">
                        <Button color="secondary" className="btn btn-primary btn-sm" type="button"> {"Add Column"} </Button>
                    </div>

                    <div className="col-md-2 grid_container_btn hot_run_grid_btns">
                        <Button color="fifth" className="btn btn-sm" type="button"> {"Delete Row"} </Button>
                    </div>

                    <div className="col-md-2 grid_container_btn hot_run_grid_btns">
                        <Button color="fifth" className="btn btn-sm" type="button"> {"Delete Column"} </Button>
                    </div>
                </div>
                <div>
                    <GridComponent pageSettings={{ pageSize: 5 }} editSettings={editSettings} allowPaging={true} toolbar={toolbarOptions}>
                        <ColumnsDirective>
                            <ColumnDirective field="Time" headerText="Time" textAlign="Left" width="100" />
                            <ColumnDirective field="100" headerText="100" textAlign="Left" width="100" />
                            <ColumnDirective field="200" headerText="200" textAlign="Left" width="100" />
                            <ColumnDirective field="300" headerText="300" textAlign="Left" width="100" />
                            <ColumnDirective field="400" headerText="400" textAlign="Left" width="100" />
                            <ColumnDirective field="500" headerText="500" textAlign="Left" width="100" />
                        </ColumnsDirective>
                        <Inject services={[DetailRow, Page, Edit, CommandColumn, Toolbar]} />
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
                <div className="col-md-12 text-right mb-2">
                    <Button color="third" className="btn-save-chart"> {"Save"} </Button>
                </div>
            </div>
        </>
    )
}

export default HotRunner
