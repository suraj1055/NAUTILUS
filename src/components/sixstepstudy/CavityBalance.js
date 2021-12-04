import React, { useState } from 'react';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import { Button } from 'reactstrap';
import Cavity from '../columns&rows/CavityAddColumn';
import CavityGrid from '../Grids/CavityGrid';
import { nanoid } from 'nanoid'
import CavityGrid2 from '../Grids/CavityGrid2';

const CavityBalance = () => {

    const [modal2, setModal2] = useState();

    const toggle2 = () => {

        setModal2(!modal2);

    }

    const [header, setHeader] = useState();
    const [column, setColumn] = useState([]);
    const [isColumnId, setIsColumnId] = useState(null);
    const [toggleEdit, setToggleEdit] = useState(true);

    const addHeader = (e) => {
        e.preventDefault();
        setHeader(e.target.value)
    }

    const addColumn = () => {
       if (!header) {

       }
       else{
        const newColumn = { id: nanoid(), header: header}
        setColumn([...column, newColumn]);
        console.log(newColumn)
        setHeader("");
       }
    };

    const editColumnHeader = () => {
        if (header && !toggleEdit) {
            setColumn(
                column.map((element) => {
                    if (element.id === isColumnId) {
                        return { ...element, header: header }
                    }
                    return element;
                })
            )
            setHeader("");
            setIsColumnId(null)
       }
       else{

       }
    }

    const deleteColumn = (id) => {
        const updatedColumns = column.filter((index) => {
            return index.id !== id;
        })
        setColumn(updatedColumns)
    }

    const editColumn = (id) => {
        setIsColumnId(id)
        setToggleEdit(false)
    }

    const editCancel = () => {
        setIsColumnId(null)
        setToggleEdit(true)
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
                    <CavityGrid column={column} deleteColumn={deleteColumn} editColumn={editColumn} isColumnId={isColumnId} editCancel={editCancel} addHeader={addHeader} setHeader={setHeader} toggleEdit={toggleEdit} editColumnHeader={editColumnHeader} />
                </div>
                <div className="">
                    <CavityGrid2 column={column} />
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
