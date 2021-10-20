import React, { useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts'
import CavityEdit from '../modals/CavityEdit'
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
                        <CavityEdit toggle={toggle} modal={modal} />
                    </div>

                    <div className="m-4">
                        <hr></hr>
                        <div className="row mr-2">
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
                <div className="col-md-6 mb-4">
                    <div className="mr-2">
                        <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                            <ColumnsDirective>
                                <ColumnDirective field="CavityNo" headerText="Cavity No" textAlign="Center" width="100" />
                                <ColumnDirective field="FillTime" headerText="25% fill" textAlign="Center" width="100" />
                                <ColumnDirective field="PeakInjPress" headerText="95% fill" textAlign="Center" width="100" />
                            </ColumnsDirective>
                            <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                        </GridComponent>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div>
                        <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                            <ColumnsDirective>
                                <ColumnDirective field="CavityNo" headerText="Cavity No" textAlign="Center" width="100" />
                                <ColumnDirective field="FillTime" headerText="25% fill" textAlign="Center" width="100" />
                                <ColumnDirective field="PeakInjPress" headerText="95% fill" textAlign="Center" width="100" />
                            </ColumnsDirective>
                            <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                        </GridComponent>
                    </div>
                </div>
            </div>

            <hr></hr>
            <div className="row">
                <div className="col-md-4 m-2">
                    <Button color="primary"> {"Calculate & Show Graph"} </Button>
                </div>
            </div>
            <hr></hr>

            <div className="col-md-12">
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

export default CavityBalance;
