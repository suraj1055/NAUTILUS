import React, { useState } from 'react';
import { ChartComponent } from '@syncfusion/ej2-react-charts';
import { Button } from 'reactstrap';
import Cavity from '../columns&rows/CavityAddColumn';
import CavityGrid from '../Grids/CavityGrid';
import { nanoid } from 'nanoid'
import CavityGrid2 from '../Grids/CavityGrid2';
import '../App.css';
import { HtmlEditor, Inject, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { data } from '../data/cavity_balance_data';
import CavityEdit from '../modals/CavityEdit'

const CavityBalance = () => {

    const [modal, setModal] = useState();

    const toggle = () => {

        setModal(!modal);

    }

    const [modal2, setModal2] = useState();

    const toggle2 = () => {

        setModal2(!modal2);

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|', 'Undo', 'Redo']
    };

    const [header, setHeader] = useState();
    const [column, setColumn] = useState(data);
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
            const newColumn = { id: nanoid(), "header": header, "edit": true, "delete": true }
            setColumn([...column, newColumn]);
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

    return (
        <>
            <div className="grid-chart-container">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <div className="grid_container_btn">
                            <Cavity toggle2={toggle2} modal2={modal2} addHeader={addHeader} addColumn={addColumn} />
                        </div>
                        <div className="grid_container_btn">
                            <CavityEdit modal={modal} toggle={toggle} column={column} addHeader={addHeader} editColumnHeader={editColumnHeader} editCancel={editCancel} editColumn={editColumn} />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Button color="fifth" className="btn btn-sm mr-4" type="button"> Print </Button>
                        <Button onClick={handleShow} color="primary" className="btn btn-sm step-button2" type="button"> Comment </Button>
                        <Modal isOpen={show} centered={true} >
                            <ModalHeader toggle={handleClose}>
                                Add Comment
                            </ModalHeader>
                            <ModalBody>
                                <RichTextEditorComponent toolbarSettings={toolbarSettings} height={250}>

                                    <Inject services={[Toolbar, HtmlEditor]} />
                                </RichTextEditorComponent>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary"> Save </Button>
                                <Button color="dark" onClick={handleClose}> Cancel </Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                </div>
                <div className="mb-4">
                    <CavityGrid column={column} deleteColumn={deleteColumn} editColumn={editColumn} isColumnId={isColumnId} editCancel={editCancel} addHeader={addHeader} setHeader={setHeader} toggleEdit={toggleEdit} editColumnHeader={editColumnHeader} toggle={toggle}/>
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