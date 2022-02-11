import '../App.css';
import '../../assets/custom-stylesheet/dialog_input.css';
import React, { Component } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, Page, CommandColumn, Edit, Toolbar } from '@syncfusion/ej2-react-grids';

class SessionMold extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.toolbarOptions = ['Edit', 'Delete', 'Update', 'Cancel'];
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top'};
    this.childGrid = {
      columns: [
        { headerText: 'Open', textAlign: 'Center', width: 120, commands: [{ buttonOption: { iconCss: 'e-icons e-add' } }] },
        { field: 'Mold_Id', headerText: 'Mold ID', textAlign: 'Center', width: 150 },
        { field: 'Session_Name', headerText: 'Session Name', textAlign: 'Center', width: 120 },
        { field: 'Date', headerText: 'Date', textAlign: 'Center', width: 150 }
      ],
      commandClick: this.onChildCommandClick.bind(this),
      dataSource : this.props.SessionData,
      queryString: 'Mold_Id',
    };
}

onChildCommandClick(args) {
  this.props.history.push(`/sixstepstudy/sixstepstudy`);
  console.log(args)
}

render() {
  return (
    <div className="container">
      <GridComponent dataSource={this.props.MoldData} pageSettings={{ pageSize: 5 }} editSettings={this.editSettings} allowPaging={true} childGrid={this.childGrid} toolbar={this.toolbarOptions} ref={g => this.grid = g} load={this.onLoad}>
        <ColumnsDirective>
          <ColumnDirective field="Mold_Id" headerText="Mold ID" textAlign="Left" width="100" isPrimaryKey={true}/>
          <ColumnDirective field="Platen_Orientation" headerText="Platen Orientation" textAlign="Left" width="100" />
          <ColumnDirective field="Number_Of_Bases" headerText="Number of Bases" textAlign="Left" width="100" />
          <ColumnDirective field="Is_This_A_New_Mold" headerText="Family Mold (Y/N)" textAlign="Left" width="100" />
          <ColumnDirective field="Number_Of_Parts" headerText="Number of Parts" textAlign="Left" width="100" />
        </ColumnsDirective>
        <Inject services={[DetailRow, Page, Edit, CommandColumn, Toolbar]} />
      </GridComponent>
    </div>
  );
}
}

export default SessionMold;



