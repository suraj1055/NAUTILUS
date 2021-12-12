import React, { useState } from 'react'
import { ChartComponent } from '@syncfusion/ej2-react-charts'
import { Button } from 'reactstrap';
import ColdGrid1 from '../Grids/ColdGrid1';
import { nanoid } from 'nanoid';
import ColdAddColumn from '../columns&rows/ColdAddColumn';
import ColdAddRow from '../columns&rows/ColdAddRow';
import data from "../data/Cold_runner.json"

const CavityBalance = () => {

    const [modal, setModal] = useState();

    const toggle = () => {
        setModal(!modal);
    }

    const [modal2, setModal2] = useState();

    const toggle2 = () => {
        setModal2(!modal2);
    }

    // ************ Functions to deal with column ************

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
        else {
            const newColumn = { id: nanoid(), header: header }
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
        else {

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


    // ************ Functions to deal with row ***************

    const row1 = [];
    const [row, setRow] = useState();
    const [NewRow2, setNewRow2] = useState(data);

    const addRow = (e) => {
        e.preventDefault();
        setRow(e.target.value)
    }

    const increaseRow = () => {
        for (let i = 0; i < parseInt(row); i++) {
            row1.push({
                id: nanoid(),
                Injection_Speed: "",
                Fill_Time: "",
                Peak_Inj_Press: "",
                Viscosity: "",
                Shear_Rate: ""
            })
        }
        setNewRow2([...NewRow2, ...row1]);
    };

    const deleteRow2 = (id) => {
        const updatedRows = [...NewRow2].filter((value) => {
            return value.id !== id;
        });
        setNewRow2(updatedRows);
    };

    return (
        <>
            <div className="grid-chart-container">
                <div className="row mb-4">
                    <div>
                        <ColdAddColumn modal={modal} toggle={toggle} addColumn={addColumn} addHeader={addHeader} />
                    </div>
                    <div>
                        <ColdAddRow modal2={modal2} toggle2={toggle2} addRow={addRow} increaseRow={increaseRow} />
                    </div>
                </div>
                <div>
                    <div className="mb-4">
                        {/* Grid 1 */}

                        <ColdGrid1 modal={modal} toggle={toggle} modal2={modal2} toggle2={toggle2} column={column} deleteColumn={deleteColumn} editColumn={editColumn} isColumnId={isColumnId} editCancel={editCancel} addHeader={addHeader} setHeader={setHeader} toggleEdit={toggleEdit} editColumnHeader={editColumnHeader} addColumn={addColumn} NewRow2={NewRow2}deleteRow2={deleteRow2} />

                    </div>
                    <div className="col-md-6">
                        {/* Grid @ */}
                    </div>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-4  chart_container_btn">
                        <select className="form-control digits" id="exampleFormControlSelect30">
                            <option>{"Weight1"}</option>
                        </select>
                    </div>
                    <div className="col-md-4  chart_container_btn">
                        <Button color="primary"> Calculate & Show Graph </Button>
                    </div>
                </div>
                <div className="col-md-12">
                    <ChartComponent>
                    </ChartComponent>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-right mb-4">
                    <Button color="third" className="btn-save-chart"> Save </Button>
                </div>
            </div>
        </>
    )
}

export default CavityBalance;