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
                <div className="col-md-12">
                    <div className="form-group d-flex">
                        <div>
                            <HotEdit toggle={toggle} modal={modal} />
                        </div>
                        <div>
                            <GenerateEdit toggle2={toggle2} modal2={modal2} />
                        </div>
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

            <hr></hr>
            <div className="row">
                <div className="col-md-4 m-2">
                    <Button color="primary"> {"Calculate & Show Graph"} </Button>
                </div>
            </div>
            <hr></hr>

            <div className="mt-2">
                <ChartComponent>
                </ChartComponent>
            </div>

            <hr></hr>
            <div className="row mb-4">
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

export default HotRunner
