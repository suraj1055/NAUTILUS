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
                <div className="col-md-3">
                    <div className="form-group">
                        <CavityEdit toggle={toggle} modal={modal} />
                    </div>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="grid_container_btn">
                                    <Button color="primary"> {"Add Column"} </Button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="grid_container_btn cav_bal_add_delete_btn">
                                    <Button color="primary"> {"Delete Column"} </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                        <ColumnsDirective>
                            <ColumnDirective field="CavityNo" headerText="Cavity No" textAlign="Center" width="100" />
                            <ColumnDirective field="FillTime" headerText="25% fill" textAlign="Center" width="100" />
                            <ColumnDirective field="PeakInjPress" headerText="95% fill" textAlign="Center" width="100" />
                        </ColumnsDirective>
                        <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
                    </GridComponent>
                </div>
                <div className="">
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
                <div className="col-md-12">
                    <div className="text-right  mt-2">
                        <Button color="primary" className="btn-save-chart"> {"Save"} </Button>
                        <Button color="primary"> {"Save As"} </Button>
                    </div>
                </div>
            </div>
            <hr></hr>

        </>
    )
}

export default CavityBalance;
