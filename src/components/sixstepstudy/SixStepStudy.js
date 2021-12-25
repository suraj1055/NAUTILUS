import * as React from "react";
import '../App.css';
import { TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-react-navigations";
import ViscocityCurve from "./ViscocityCurve";
import CavityBalance from "./CavityBalance";
import PressureDropStudy from "./PressureDropStudy";
import CosmeticPressure from "./CosmeticPressure";
import CoolingTimeStudy from "./CoolingTimeStudy";
import ColdRunner from "./ColdRunner";

export default class SixStepStudy extends React.Component {
    
    render() {

        let headertext = [
            { text: "Viscosity Curve" },
            { text: "Cavity Balance" },
            { text: "Pressure Drop Study" },
            { text: "Cosmetic Process Window" },
            { text: "Gate Seal Study" },
            { text: "Cooling Time Study" },
        ];

        function content0() {
            return (<div>
                <ViscocityCurve />
            </div>);
        }

        function content1() {
            return (<div>
                <CavityBalance />
            </div>);
        }

        function content2() {
            return (<div>
                <PressureDropStudy />
            </div>);
        }

        function content3() {
            return (<div>
                <CosmeticPressure />
            </div>);
        }

        function content4() {
            return (<div>
                  <ColdRunner />
            </div>);
        }

        function content5() {
            return (<div>
              <CoolingTimeStudy />
            </div>);
        }

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="study-container">
                                <TabComponent heightAdjustMode="Auto" id="defaultTab">
                                    <TabItemsDirective>
                                        <TabItemDirective header={headertext[0]} content={content0} />
                                        <TabItemDirective header={headertext[1]} content={content1} />
                                        <TabItemDirective header={headertext[2]} content={content2} />
                                        <TabItemDirective header={headertext[3]} content={content3} />
                                        <TabItemDirective header={headertext[4]} content={content4} />
                                        <TabItemDirective header={headertext[5]} content={content5} />
                                    </TabItemsDirective>
                                </TabComponent>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}