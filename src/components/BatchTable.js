import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { showBatch } from '../store/actions/Batch';



export class BatchTable extends Component {

    initColumns = () => {
        return [
            {
                Header: 'Number',
                accessor: 'controlNumber',
                style: {
                    textAlign: 'left',
                }
            },
            {
                Header: 'Hybridization',
                accessor: 'hybridizationDate',
            },
            {
                Header: 'Total Slides',
                accessor: 'totalSlides',
            },
            {
                Header: 'Prep Quality',
                accessor: 'prepQuality',
            },
            {
                Header: 'Entry Date',
                accessor: 'entryDate',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showBatch(rowInfo.index, this.props.list[rowInfo.index]),
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

    renderList = (list, text) => {
        return (
            <div className="content-table-batch">
                <ReactTable
                    data={this.props.list}
                    getTdProps={this.handleRowClick}
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
    selected: state.batchSelected,
    isLoading: state.batchLoading,
    isErrored: state.batchErrored,
    // list: state.batchList,
    list: []
})

const mapDispatchToProps = dispatch => ({
    showBatch: (index, accession) => dispatch(showBatch(index, accession)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BatchTable)
