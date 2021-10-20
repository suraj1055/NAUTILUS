import * as React from "react";
import '../App.css';
import { TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-react-navigations";
import ViscocityCurve from "./ViscocityCurve";
import CavityBalance from "./CavityBalance";
import PressureDropStudy from "./PressureDropStudy";
import CosmeticPressure from "./CosmeticPressure";
import CoolingTimeStudy from "./CoolingTimeStudy";
import HotRunner from "./HotRunner";
import PackAndHold from "./PackAndHold";
import ColdRunner from "./ColdRunner";

export default class SixStepStudy extends React.Component {
    render() {

        let headertext = [
        { text: "Viscocity Curve" },
        { text: "Cavity Balance" },
        { text: "Pressure Drop Study" },
        { text: "Cosmetic Pressure Window" },
        { text: "Gate Seal Study" },
        { text: "Cooling Time Study" },
        { text: "Cold Runner" },{ text: "Pack And Hold" },
        { text: "Hot Runner" }
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
                <CoolingTimeStudy />
            </div>);
        }

        function content5() {
            return (<div>
                <ColdRunner />
            </div>);
        }

        function content6() {
            return (<div>
                <PackAndHold />
            </div>);
        }

        function content7() {
            return (<div>
                <HotRunner />
            </div>);
        }


        function nestedTab1() {
            return (<TabComponent heightAdjustMode="Auto" id="nestedTab1">
                <TabItemsDirective>
                    <TabItemDirective header={headertext[6]} content={content5} />
                    <TabItemDirective header={headertext[7]} content={content6} />
                    <TabItemDirective header={headertext[8]} content={content7} />
                </TabItemsDirective>
            </TabComponent>);
        }

        return (
            <div className="study-container">
                <TabComponent heightAdjustMode="Auto" id="defaultTab">
                    <TabItemsDirective>
                        <TabItemDirective header={headertext[0]} content={content0} />
                        <TabItemDirective header={headertext[1]} content={content1} />
                        <TabItemDirective header={headertext[2]} content={content2} />
                        <TabItemDirective header={headertext[3]} content={content3} />
                        <TabItemDirective header={headertext[4]} content={nestedTab1} />
                        <TabItemDirective header={headertext[5]} content={content4} />
                    </TabItemsDirective>
                </TabComponent>
            </div>
            );
    }
}