import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineSpinner from './LineSpinner';
import BatchTable from './BatchTable';



export class BatchList extends Component {
    handeClick = e => {

    }

    render() {
        return (
            <div className="pending-lists">
                <div className="top-section-title">BATCH CONTROL LOGS</div>
                <button className="btn-entry" onClick={this.handeClick}>New Entry</button>
                {this.props.isLoading ? <div className="table-spinner"><LineSpinner /></div> : null}
                <BatchTable />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    isLoading: state.batchLoading,
})


const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BatchList)
