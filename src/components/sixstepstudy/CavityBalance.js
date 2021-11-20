import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import CavityEdit from '../modals/CavityEdit';
import { Button } from 'reactstrap';
import Cavity from '../columns/CavityAddColumn';
import CavityGrid from '../Grids/CavityGrid';
import { nanoid } from "nanoid";
import data from '../data/cavity_balance_data'

const CavityBalance = () => {

    const [modal, setModal] = useState();

    const toggle = () => {

        setModal(!modal);

    }

    const [modal2, setModal2] = useState();

    const toggle2 = () => {

        setModal2(!modal2);

    }

    const [column, setColumn] = useState(data);
    const [addColumn, setAddColumn] = useState({
        header: "",
    });

    const handleAddHeader = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newHeader = { ...addColumn };
        newHeader[fieldName] = fieldValue;

        setAddColumn(newHeader);
    };

    const handleAddColumn = (event) => {
        event.preventDefault();

        const newColumn = {
            id: nanoid(),
            header: addColumn.header,
        };

        const newColumns = [...column, newColumn];
        setColumn(newColumns);
    };

    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <CavityEdit toggle={toggle} modal={modal} column={column}  />
                    </div>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="grid_container_btn">
                                    <Cavity toggle2={toggle2} modal2={modal2} handleAddHeader={handleAddHeader} handleAddColumn={handleAddColumn} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="grid_container_btn cav_bal_add_delete_btn">
                                    <Button color="fifth" className="btn btn-sm" type="button"> Delete Column </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <CavityGrid column={column} />
                </div>
                <div className="">
                    <GridComponent allowEditing={true} allowPaging={true} pageSettings={{ pageSize: 4 }}>
                        <ColumnsDirective>
                            <ColumnDirective field="CavityNo" headerText="Cavity No" textAlign="Left" width="100" />
                            <ColumnDirective field="FillTime" headerText="25% fill" textAlign="Left" width="100" />
                            <ColumnDirective field="PeakInjPress" headerText="95% fill" textAlign="Left" width="100" />
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
            <div className="row save_saveas_btn">
                <div className="col-md-12">
                    <div className="text-right">
                        <Button color="third" className="btn-save-chart"> {"Save"} </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CavityBalance;
