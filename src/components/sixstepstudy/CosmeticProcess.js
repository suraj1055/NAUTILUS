import React, { useState } from 'react'
import { ChartComponent, LineSeries, Inject, SeriesCollectionDirective, SeriesDirective, Category, DataLabel } from '@syncfusion/ej2-react-charts';
import { Button } from 'reactstrap';
import CosmeticGrid from '../Grids/CosmeticGrid';
import CosmeticEdit from '../modals/CosmeticEdit';
import data from '../data/Cosmetic_data.json'

const CosmeticPressure = () => {

    const [modal, setModal] = useState();
    const [Melting, setMelting] = useState("Melt Temp");
    const [Hydraulic, setHydraulic] = useState("Hydraulic");
    const [NewRow2, setNewRow2] = useState(data);
    // const [minCosmetic, setMinCosmetic] = useState()
    // const [maxCosmetic, setMaxCosmetic] = useState()
    // const [Interval, setInterval] = useState()

    const [editFormData, setEditFormData] = useState({
        Melt_Temp: "",
        Low: "",
        High: ""
    })

    const [isRowId, setIsRowId] = useState(null)

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);

    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedValue = {
            id: isRowId,
            Melt_Temp: editFormData.Melt_Temp,
            Low: editFormData.Low,
            High: editFormData.High
        }

        const newValues = [...NewRow2];

        const index = NewRow2.findIndex((value) => value.id === isRowId)

        newValues[index] = editedValue;

        setNewRow2(newValues);

        setIsRowId(null);
    }

    const setId = (event, NewRow) => {

        event.preventDefault();

        setIsRowId(NewRow.id);

        const formValues = {
            Melt_Temp: NewRow.Melt_Temp,
            Low: NewRow.Low,
            High: NewRow.High,
        }

        setEditFormData(formValues);
    }

    const toggle = () => {
        setModal(!modal)
    }

    const setHeader1 = (e) => {
        e.preventDefault();
        setMelting(e.target.value)
    }

    const setHeader2 = (e) => {
        e.preventDefault();
        setHydraulic(e.target.value)
    }

    // const setGraph = () => {

    //     setMinCosmetic( (NewRow2[0].Low + NewRow2[1].Low) / 2)

    //     setMaxCosmetic( (NewRow2[0].High + NewRow2[1].High) / 2)

    //     setInterval(NewRow2[0].Low - NewRow2[1].Low)
    // }

    return (

        <div>
            <div className="grid-chart-container">
                <div className="form-group">
                    <CosmeticEdit toggle={toggle} modal={modal} setHeader1={setHeader1} setHeader2={setHeader2} Melting={Melting} Hydraulic={Hydraulic} />
                </div>
                <div>
                    <CosmeticGrid Melting={Melting} Hydraulic={Hydraulic} NewRow2={NewRow2} setId={setId} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} isRowId={isRowId} editFormData={editFormData}/>
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-4 chart_container_btn">
                        <Button color="primary"> Show Graph </Button>
                    </div>
                </div>
                <div>
                    <ChartComponent title="Cosmetic Process Study" width="1100" primaryXAxis={{ valueType: "Category", title: "Melt" }} primaryYAxis={{ title: "Hydraulic" }}>

                        <Inject services={[LineSeries, Category, DataLabel]} />

                        <SeriesCollectionDirective>
                            
                            <SeriesDirective type="Line" dataSource={NewRow2} xName="Melt_Temp" yName="Low" marker={{ dataLabel: { visible: true }, visible: true }} ></SeriesDirective>

                            <SeriesDirective type="Line" dataSource={NewRow2} xName="Melt_Temp" yName="High" marker={{ dataLabel: { visible: true }, visible: true }} ></SeriesDirective>

                        </SeriesCollectionDirective>

                    </ChartComponent>
                </div>
            </div>
            <div className="row save_saveas_btn">
                <div className="col-md-12 text-right">
                    <Button color="third" className="btn-save-chart"> Save </Button>
                </div>
            </div>
        </div>
    )
}

export default CosmeticPressure;
