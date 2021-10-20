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
            <div className="row">

                <div className="col-md-12">

                    <div className="form-group">
                        <ColdEdit toggle={toggle} modal={modal} />
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

            <div className="col mb-4">
                <div className="col-md-6 mb-2">
                    <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                        <ColumnsDirective>
                            <ColumnDirective field="Time" headerText="Time" textAlign="Center" width="100" />
                            <ColumnDirective field="Weight" headerText="Weight1" textAlign="Center" width="100" />
                        </ColumnsDirective>
                        <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                    </GridComponent>
                </div>
                <div className="col-md-6 mb-2">
                    <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                        <ColumnsDirective>
                            <ColumnDirective field="WeightIncrease" headerText="Weight Increase[Weigth1]" textAlign="Center" width="100" />
                            <ColumnDirective field="Weight" headerText="% Weight Increase[Weigth1]" textAlign="Center" width="100" />
                        </ColumnsDirective>
                        <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                    </GridComponent>
                </div>
            </div>

            <hr></hr>
            <div className="row">
                <div className="form-group col-md-4">
                    <select className="form-control digits" id="exampleFormControlSelect30">
                        <option>{"Weight1"}</option>
                    </select>
                </div>
                <div className="col-md-4">
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

export default CavityBalance;