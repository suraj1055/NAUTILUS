import React, { useState } from 'react'
import { ChartComponent } from '@syncfusion/ej2-react-charts'
import { Button } from 'reactstrap';
import CosmeticGrid from '../Grids/CosmeticGrid';
import CosmeticEdit from '../modals/CosmeticEdit';
// import data from '../data/Cosmetic_data.json'

const CosmeticPressure = () => {

    const [modal, setModal] = useState();
    const [Melting, setMelting] = useState("Melt Temp")
    const [Hydraulic, setHydraulic] = useState("Hydraulic")

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


    return (

        <div>
            <div className="grid-chart-container">
                <div className="form-group">
                    <CosmeticEdit toggle={toggle} modal={modal} setHeader1={setHeader1} setHeader2={setHeader2} Melting={Melting} Hydraulic={Hydraulic} />
                </div>
                <div>
                    <CosmeticGrid Melting={Melting} Hydraulic={Hydraulic} />
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
