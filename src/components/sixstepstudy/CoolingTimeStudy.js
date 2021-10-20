import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import CoolingEdit from '../modals/CoolingEdit';
import { Button } from 'reactstrap';

const CoolingTimeStudy = () => {

    const [modal, setModal] = useState();

    const toggle = () => {

        setModal(!modal);

    }

    return (
        <>
            <div className="row">

                <div className="col-md-12">
                    <div className="form-group">
                        <CoolingEdit toggle={toggle} modal={modal} />
                    </div>

                    <div className="m-4">
                        <hr></hr>
                        <div className="row mr-2">
                            <div className="mr-2">
                                <Button color="primary"> {"Delete Row"} </Button>
                            </div>

                            <div className="mr-2">
                                <Button color="primary"> {"Add Column"} </Button>
                            </div>

                            <div className="mr-2">
                                <Button color="primary"> {"Delete Column"} </Button>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                    <ColumnsDirective>
                        <ColumnDirective field="CoolingTimeStudy" headerText="Cooling Time Study" textAlign="Center" width="100" />
                        <ColumnDirective field="Dim1" headerText="Dim1" textAlign="Center" width="100" />
                    </ColumnsDirective>
                    <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                </GridComponent>
            </div>

            <hr></hr>
            <div className="row">
                <div className="form-group col-md-4">
                    <label htmlFor="exampleFormControlSelect30" className="lbl_design"> X-Axis: </label>
                    <select className="form-control digits" id="exampleFormControlSelect30">
                        <option>{"Dim1"}</option>
                    </select>
                </div>
                <div className="col-md-4 mt-4">
                    <Button color="primary"> {"Calculate & Show Graph"} </Button>
                </div>
            </div>
            <hr></hr>

            <div className="col-md-12">
                <ChartComponent>
                </ChartComponent>
            </div>

            <hr></hr>
            <div className="row">
                <div className="col-md-2">
                    <Button color="primary"> {"Save"} </Button>
                </div>
                <div className="col-md-4">
                    <Button color="primary"> {"Save As"} </Button>
                </div>
            </div>
            <hr></hr>

        </>

    )
}

export default CoolingTimeStudy
