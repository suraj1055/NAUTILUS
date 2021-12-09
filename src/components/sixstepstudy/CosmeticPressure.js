import React, { useState } from 'react'
import { ChartComponent } from '@syncfusion/ej2-react-charts'
import { Button } from 'reactstrap';
import { nanoid } from 'nanoid';
import CosmeticGrid from '../Grids/CosmeticGrid';

const CosmeticPressure = () => {

    const [header, setHeader] = useState();
    const [column, setColumn] = useState([]);
    const [isColumnId, setIsColumnId] = useState(null);
    const [toggleEdit, setToggleEdit] = useState(true);

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

    return (

        <div>
            <div className="grid-chart-container">
                <div>
                    <CosmeticGrid />
                </div>
            </div>
            <div className="grid-chart-container">
                <div className="row">
                    <div className="col-md-4 chart_container_btn">
                        <Button color="primary"> Show Graph </Button>
                    </div>
                </div>
                <div>
                    <ChartComponent>
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
