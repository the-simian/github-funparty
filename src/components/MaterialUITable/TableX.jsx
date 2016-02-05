
import React, { Component, PropTypes } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn, TableFooter } from 'material-ui';

class TableX extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }



    render() {



        const rowsFake = [
          {name: 'example'},
          {status: 'data'},
          {status: 'value', name: 'faccccccrts'},
          {name: 'example2'}
        ];

        const cols = [{
          prop: 'id',
          tooltip: 'The ID'
        }, {
          prop: 'name',
          tooltip: 'The Name'
        }];

        const {
            fixedHeader,
            fixedFooter,
            stripedRows,
            showRowHover,
            selectable,
            multiSelectable,
            enableSelectAll,
            deselectOnClickaway,
            height
        } = this.props;

        const rows = this.props.rows || [];

        return (
            <Table
                height={height}
                fixedHeader={fixedHeader}
                fixedFooter={fixedFooter}
                selectable={selectable}
                multiSelectable={multiSelectable}>
                <TableHeader enableSelectAll={enableSelectAll}>
                    <TableRow>
                        <TableHeaderColumn colSpan="3" tooltip='Super Header' style={{textAlign: 'center'}}>
                            Super Header
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip='The ID'>ID</TableHeaderColumn>
                        <TableHeaderColumn tooltip='The Name'>Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip='The Status'>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    deselectOnClickaway={deselectOnClickaway}
                    showRowHover={showRowHover}
                    stripedRows={stripedRows}>
                    {rows.map((row, index) => (
                        <TableRow key={index} selected={row.selected}>
                          <TableRowColumn>{index}</TableRowColumn>
                          <TableRowColumn>{row.name}</TableRowColumn>
                          <TableRowColumn>{row.status}</TableRowColumn>
                        </TableRow>
                      )
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableRowColumn>ID</TableRowColumn>
                        <TableRowColumn>Name</TableRowColumn>
                        <TableRowColumn>Status</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                            Super Footer
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        );
    }
}

TableX.defaultProps = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    height: '300px'
};

export default TableX;
