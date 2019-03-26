import React, { Component } from 'react';
import { connect } from 'react-redux';
import Analyzes from './Analyzes';
import ScriningTable from './ScreeningTable';
import LineSpinner from './LineSpinner';



export class ScreeningList extends Component {

    render() {
        return (
            <div className="pending-lists">
                <div className="top-section-title">SCREENING LIST</div>
                <Analyzes />
                {this.props.isLoading ? <div className="table-spinner"><LineSpinner /></div> : null}
                <ScriningTable />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.pendingLoading,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ScreeningList)
