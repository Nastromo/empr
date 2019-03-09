import React, { Component } from 'react';
import { connect } from 'react-redux';
import Analyzes from './Analyzes';
import PendingTable from './PendingTable';
import LineSpinner from './LineSpinner';



export class PendingList extends Component {


    render() {
        return (
            <div className="pending-lists">
                <div className="top-section-title">PENDING LIST</div>
                <Analyzes />
                {this.props.isLoading ? <div className="table-spinner"><LineSpinner /></div> : null}
                <PendingTable />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.pendingLoading,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PendingList)
