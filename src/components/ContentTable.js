import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';



export class ContentTable extends Component {
    initColumns = () => {
        return [
            {
                Header: 'Access',
                accessor: 'access',
                style: {
                    textAlign: 'left',
                }
            },
            {
                Header: 'Patient',
                accessor: 'name',
            },
            {
                Header: 'Tray',
                accessor: 'tray',
            },
            {
                Header: 'Speci',
                accessor: 'speci',
            }
        ];
    }

    render() {
        return (
            <div className="content-table">
                <ReactTable
                    data={[
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187645632`,
                            name: `Sasha Casha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                        {
                            access: `187463643`,
                            name: `Masha Pasha`,
                            tray: `this is tray`,
                            speci: `this is speci`,
                        },
                    ]}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={true}
                    defaultPageSize={15}
                    noDataText={`No data...`}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ContentTable)
