import React, { useEffect} from 'react';
import Table from 'react-bootstrap/Table'
import $ from 'jquery';
import './jquery.rsLiteGrid'

const ViscocityGrid = () => {

    useEffect(() => {

        $(document).ready(function () {
            $('table').rsLiteGrid({
      
              cols: [
                {
                  name: 'Injection Speed',
                  header: 'Injection Speed',
                  markup: '<input type="text">',
                },
                {
                  name: 'Fill Time',
                  header: 'Fill Time (sec)',
                  markup: '<input type="text">',
                },
                {
                  name: 'Peak Inj Press',
                  header: 'Peak Inj Press',
                  markup: '<input type="text">'
                },
                {
                  name: 'Viscocity',
                  header: 'Viscocity',
                  markup: '<input type="text" class="form-control" readonly>'
                },
                {
                  name: 'Shear Rate',
                  header: 'ShearRate',
                  markup: '<input type="text" class="form-control" readonly>'
                },
                {
                  name: 'AbsoluteDropViscocity',
                  header: 'AbsoluteDropViscocity',
                  markup: '<input type="text" class="form-control" readonly>'
                },
                {
                  name: 'DropViscocity',
                  header: '%DropViscocity',
                  markup: '<input type="text" class="form-control" readonly>'
                },
                {
                  name: 'Action',
                  header: 'Action',
                  markup: '<button class="btn btn-sm btn-fifth"> Delete </button>',
                  tabStop: false
                },
              ],
      
              // event fired after each row is appended to the table.
              // The right place to set the click event for the delete row button
              onAddRow: function (event, $lastNewRow) {
                $('button', $lastNewRow).click(function () {
                  $('table').rsLiteGrid('delRow', $lastNewRow);
                });
              }
      
            
            }).rsLiteGrid('setData', [
              
            ]);
      
          });
    }, )


    return (
        <div className="container">
            <Table striped bordered hover responsive variant="light"> </Table>
        </div>
    )
}

export default ViscocityGrid;
