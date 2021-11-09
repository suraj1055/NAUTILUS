import '../App.css';
import '../../assets/custom-stylesheet/dialog_input.css'
import React, { Component } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { mold, session } from '../data/Session_Mold_data';

class SessionMold extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top', mode: 'Dialog' };
    this.childGrid = {
      columns: [
        { headerText: 'Open', textAlign: 'Center', width: 120, commands: [{ buttonOption: { iconCss: 'e-icons e-add' } }] },
        { field: 'Name', headerText: 'Name', textAlign: 'Center', width: 120 },
        { field: 'MoldID', headerText: 'Mold ID', textAlign: 'Center', width: 150 },
        { field: 'Date', headerText: 'Date', textAlign: 'Center', width: 150 }
      ],
      commandClick: this.onChildCommandClick.bind(this),
      dataSource: session,
      queryString: 'MoldID',
    };
}

onChildCommandClick(args) {
  this.props.history.push(`${process.env.PUBLIC_URL}/sixstepstudy/sixstepstudy`);
}

render() {
  return (
    <div className="container">
      <GridComponent dataSource={mold} pageSettings={{ pageSize: 5 }} editSettings={this.editSettings} allowPaging={true} childGrid={this.childGrid} toolbar={this.toolbarOptions} >
        <ColumnsDirective>
          <ColumnDirective field="MoldID" headerText="Mold ID" textAlign="Left" width="100" isPrimaryKey={true}/>
          <ColumnDirective field="PlatenOrientation" headerText="Platen Orientation" textAlign="Left" width="100" />
          <ColumnDirective field="NumberofBases" headerText="Number of Bases" textAlign="Left" width="100" />
          <ColumnDirective field="Isthisanewmold" headerText="Family Mold (Y/N)" textAlign="Left" width="100" />
          <ColumnDirective field="NumberofParts" headerText="Number of Parts" textAlign="Left" width="100" />
        </ColumnsDirective>
        <Inject services={[DetailRow, Page, Edit, CommandColumn, Toolbar]} />
      </GridComponent>
    </div>
  );
}
}

export default SessionMold;



