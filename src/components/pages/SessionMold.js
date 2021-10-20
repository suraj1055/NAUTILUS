import '../App.css';
import React, { Component } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit } from '@syncfusion/ej2-react-grids';
import { mold, session } from './data';

class SessionMold extends Component {

  commands = [ { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' }} ];

  constructor(props) {
    super(props);
    this.props = props;
    this.childGrid = {
      columns: [
        { headerText: 'Open', textAlign: 'Center', width: 120, commands: [{ buttonOption: { iconCss: 'e-icons e-add' } }] },
        { field: 'Name', headerText: 'Name', textAlign: 'Center', width: 120 },
        { field: 'MoldID', headerText: 'Mold ID', textAlign: 'Center', width: 150 },
        { field: 'Date', headerText: 'Date', textAlign: 'Center', width: 150 }
      ],
      commandClick: this.onChildCommandClick.bind(this),
      dataSource: session,
      queryString: 'MoldID'
    };
}

onChildCommandClick(args) {
  this.props.history.push(`${process.env.PUBLIC_URL}/sixstepstudy/sixstepstudy`);
}

render() {
  return (
    <div className="container">
      <GridComponent dataSource={mold} allowEditing={true} childGrid={this.childGrid} allowPaging={true} pageSettings={{ pageSize: 8 }}>
        <ColumnsDirective>
          <ColumnDirective headerText="Open" textAlign="Center" width="100" commands={this.commands} commandClick={this.onChildCommandClick} />
          <ColumnDirective field="MoldID" headerText="Mold ID" textAlign="Center" width="100" />
          <ColumnDirective field="PlatenOrientation" headerText="Platen Orientation" textAlign="Center" width="100" />
          <ColumnDirective field="NumberofBases" headerText="Number of Bases" textAlign="Center" width="100" />
          <ColumnDirective field="Isthisanewmold" headerText="Family Mold (Y/N)" textAlign="Center" width="100" />
          <ColumnDirective field="NumberofParts" headerText="Number of Parts" textAlign="Center" width="100" />
        </ColumnsDirective>
        <Inject services={[DetailRow, Page, Edit, CommandColumn]} />
      </GridComponent>
    </div>
  );
}
}

export default SessionMold;



