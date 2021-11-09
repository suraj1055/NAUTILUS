import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import CoolingEdit from '../modals/CoolingEdit';
import { Button } from 'reactstrap';

const CoolingTimeStudy = () => {

    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top'};
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    const [modal, setModal] = useState();

    const toggle = () => {

        setModal(!modal);

    }

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <CoolingEdit toggle={toggle} modal={modal} />
                    </div>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">

                    <div className="col-md-2 grid_container_btn">
                        <Button color="secondary" className="btn btn-primary btn-sm" type="button"> {"Add Column"} </Button>
                    </div>

                    <div className="col-md-2 grid_container_btn cooling_time_all_btn">
                        <Button color="fifth" className="btn  btn-sm" type="button"> {"Delete Row"} </Button>
                    </div>
                   
                    <div className="col-md-2 grid_container_btn cooling_time_all_btn">
                        <Button color="fifth" className="btn btn-sm" type="button"> {"Delete Column"} </Button>
                    </div>
                </div>
                <div>
                    <GridComponent pageSettings={{ pageSize: 5 }} editSettings={editSettings} allowPaging={true} toolbar={toolbarOptions}>
                        <ColumnsDirective>
                            <ColumnDirective field="CoolingTimeStudy" headerText="Cooling Time Study" textAlign="Left" width="100" />
                            <ColumnDirective field="Dim1" headerText="Dim1" textAlign="Left" width="100" />
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
                                <option>{"Dim1"}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <Button color="primary"> {"Calculate & Show Graph"} </Button>
                    </div>
                </div>
                <div classname="col-md-12">
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

export default CoolingTimeStudy
