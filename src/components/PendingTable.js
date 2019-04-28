import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { showSpecimen } from '../store/actions/Specimen';



export class PendingTable extends Component {

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
                accessor: 'fullName',
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

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showSpecimen(rowInfo.index, this.props.list[rowInfo.index]),
                style: {
                    fontWeight: rowInfo.index === this.props.selected ? '700' : '600',
                    color: rowInfo.index === this.props.selected ? '#1ab394' : '#4e4e4e',
                    background: rowInfo.index === this.props.selected ? '#e2fff9' : '',
                }
            }
        } else {
            return {}
        }
    }

    rowStyle = (state, rowInfo, column) => {
        if (rowInfo) {
            const s = {
                style: {
                    background: rowInfo.original.stage === `case canceled` || rowInfo.original.stage === `case deleted` || rowInfo.original.stage === `Pop Slide` || rowInfo.original.stage === `Cell Block` ? '#fffae1' : '#fff'
                }
            }
            return s;
        } else {
            return {};
        }
    }

    renderList = (list, text) => {
        list.forEach(row => row.fullName = `${row.name} ${row.lastName}`);
        return (
            <div className="content-table">
                <ReactTable
                    data={list}
                    getTdProps={this.handleRowClick}
                    getTrProps={this.rowStyle}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={true}
                    defaultPageSize={15}
                    noDataText={text}
                />
            </div>
        )
    }

    render() {
        if (this.props.isLoading) return this.renderList([], `Loading list...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `No any patients...`);
    }
}

const mapStateToProps = (state) => ({
    selected: state.specimenSelected,
    isLoading: state.pendingLoading,
    isErrored: state.pendingErrored,
    list: state.pendingList,
})

const mapDispatchToProps = dispatch => ({
    showSpecimen: (index, accession) => dispatch(showSpecimen(index, accession)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PendingTable)
