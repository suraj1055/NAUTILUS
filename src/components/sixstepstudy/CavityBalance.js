import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import { Button } from 'reactstrap';
import Cavity from '../columns/CavityAddColumn';
import CavityGrid from '../Grids/CavityGrid';
// import data from '../data/cavity_balance_data';
import { nanoid } from 'nanoid'

const CavityBalance = () => {

    const [modal2, setModal2] = useState();

    const toggle2 = () => {

        setModal2(!modal2);

    }

    const [column, setColumn] = useState();
    const [header, setHeader] = useState([]);

    const addColumn = (e) => {
        e.preventDefault();
        setColumn(e.target.value)
    }

    const addHeader = () => {
       if (!column) {

       }
       else{
        const allColumn = { id: nanoid(), header: header}
        setHeader([...column, allColumn]);
        setColumn("");
       }
    };

    const deleteColumn = (index) => {
        const updatedColumns = header.filter((element) => {
            return index !== element.id;
        })

        setHeader(updatedColumns)
    }


    return (
        <>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="grid_container_btn">
                                    <Cavity toggle2={toggle2} modal2={modal2} addHeader={addHeader} addColumn={addColumn} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <CavityGrid header={header} />
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
