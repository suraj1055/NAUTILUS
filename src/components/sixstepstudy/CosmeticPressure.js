import React, { useState } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts'
import CosmeticEdit from '../modals/CosmeticEdit';
import { Button } from 'reactstrap';

const CosmeticPressure = () => {

    const [modal, setModal] = useState();

    const toggle = () => {
        setModal(!modal)
    }

    return (

        <div className="row">
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <CosmeticEdit toggle={toggle} modal={modal} />
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center">
                <div className="mb-2">
                    <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                        <ColumnsDirective>
                            <ColumnDirective field="MeltTemp" headerText="Melt Temp" textAlign="Center" width="100" />
                            <ColumnDirective field="LowPressure" headerText="Low Hydraulic Pressure" textAlign="Center" width="100" />
                            <ColumnDirective field="HighPressure" headerText="High Hydraulic Pressure" textAlign="Center" width="100" />
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

                <div className="mb-8">
                    <ChartComponent>
                    </ChartComponent>
                </div>

                <hr></hr>
                <div className="row">
                    <div className="col-md-2">
                        <Button color="primary"> {"Save"} </Button>
                    </div>
                    <div className="col-md-2">
                        <Button color="primary"> {"Save As"} </Button>
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default CosmeticPressure;
