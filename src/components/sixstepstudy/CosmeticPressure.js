import React, { useState, useEffect } from 'react'
import {
    ChartComponent, LineSeries, Inject, SeriesCollectionDirective, ScatterSeries, Category, DataLabel, SeriesDirective
} from '@syncfusion/ej2-react-charts';
import { Button } from 'reactstrap';
import CosmeticGrid from '../Grids/CosmeticGrid';
import CosmeticEdit from '../modals/CosmeticEdit';
import data from '../data/Cosmetic_data.json';

export let chartInstance;

const CosmeticPressure = () => {

    const [modal, setModal] = useState();
    const [Melting, setMelting] = useState("Melt Temp");
    const [Hydraulic, setHydraulic] = useState("Hydraulic");
    const [NewRow2, setNewRow2] = useState(data);

    var centerPoints = [];
    const [chartData, setChartData] = useState([]);
    const [editFormData, setEditFormData] = useState({
        Melt_Temp: "",
        Low: "",
        High: ""
    });

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

    // Create an object which will be used to plot the polygon
    const polygonData = [
        { x: parseFloat(NewRow2[0]["Melt_Temp"]), y: parseFloat(NewRow2[0]["Low"]) },
        { x: parseFloat(NewRow2[1]["Melt_Temp"]), y: parseFloat(NewRow2[1]["Low"]) },
        { x: parseFloat(NewRow2[1]["Melt_Temp"]), y: parseFloat(NewRow2[1]["High"]) },
        { x: parseFloat(NewRow2[0]["Melt_Temp"]), y: parseFloat(NewRow2[0]["High"]) },
        { x: parseFloat(NewRow2[0]["Melt_Temp"]), y: parseFloat(NewRow2[0]["Low"]) }
    ]

    var Coordinates = [
        { x: parseFloat(NewRow2[0]["Melt_Temp"]), y: parseFloat(NewRow2[0]["Low"]) },
        { x: parseFloat(NewRow2[1]["Melt_Temp"]), y: parseFloat(NewRow2[1]["Low"]) },
        { x: parseFloat(NewRow2[1]["Melt_Temp"]), y: parseFloat(NewRow2[1]["High"]) },
        { x: parseFloat(NewRow2[0]["Melt_Temp"]), y: parseFloat(NewRow2[0]["High"]) },
        { x: parseFloat(NewRow2[0]["Melt_Temp"]), y: parseFloat(NewRow2[0]["Low"]) }
    ]

    const setGraph = () => {

        setChartData(polygonData)
    }

    // Event to calculate the centroid
    function center(Coordinates) {

        function Point(x, y) {
            this.x = x;
            this.y = y;
        }

        function Region(points) {
            this.points = points || [];
            this.length = points.length;
        }

        Region.prototype.area = function () {
            var area = 0,
                i,
                j,
                point1,
                point2;

            for (i = 0, j = this.length - 1; i < this.length; j = i, i++) {
                point1 = this.points[i];
                point2 = this.points[j];
                area += point1.x * point2.y;
                area -= point1.y * point2.x;
            }
            area /= 2;

            return area;
        };

        Region.prototype.centroid = function () {
            var x = 0,
                y = 0,
                i,
                j,
                f,
                point1,
                point2;

            for (i = 0, j = this.length - 1; i < this.length; j = i, i++) {
                point1 = this.points[i];
                point2 = this.points[j];
                f = point1.x * point2.y - point2.x * point1.y;
                x += (point1.x + point2.x) * f;
                y += (point1.y + point2.y) * f;
            }

            f = this.area() * 6;

            return new Point(Number(x / f).toFixed(0), Number(y / f).toFixed(1));
        };

        var polygon = Coordinates,
            region = new Region(polygon);

        centerPoints.push(region.centroid())
    }

    center(Coordinates);

    useEffect(() => {

        const handleChange = (e) => {
          chartInstance.refresh();
        }
    
        handleChange()
    
      }, [])

    return (

        <div>
            <div className="grid-chart-container">
                <div className="form-group">
                    <CosmeticEdit toggle={toggle} modal={modal} setHeader1={setHeader1} setHeader2={setHeader2} Melting={Melting} Hydraulic={Hydraulic} />
                </div>
                <div>
                    <CosmeticGrid Melting={Melting} Hydraulic={Hydraulic} NewRow2={NewRow2} setId={setId} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} isRowId={isRowId} editFormData={editFormData} />
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-4 chart_container_btn">
                        <Button color="primary" onClick={setGraph}> Show Graph </Button>
                    </div>
                </div>
                <div>
                    <ChartComponent id='charts' ref={chart => chartInstance = chart} title="Cosmetic Process Study" width="1100" primaryXAxis={{ title: `${Melting}` }} primaryYAxis={{ title: `${Hydraulic}` }}>

                        <Inject services={[LineSeries, Category, DataLabel, ScatterSeries]} />

                        <SeriesCollectionDirective>

                            <SeriesDirective type="Line" dataSource={chartData} xName="x" yName="y" marker={{ visible: true, margin: 100 }} ></SeriesDirective>

                            <SeriesDirective
                                dataSource={centerPoints}
                                xName="x"
                                yName="y"
                                width={2}
                                marker={{
                                    dataLabel: { visible: true },
                                    shape: 'Diamond',
                                    visible: true,
                                    width: 10,
                                    height: 10,
                                }}
                                type="Scatter"
                            ></SeriesDirective>

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
