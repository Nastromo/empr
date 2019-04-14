import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnalyzesStainQc from './AnalyzesStainQc';
import PendingTable from './PendingTable';
import LineSpinner from './LineSpinner';




export class StainQcList extends Component {
    

    render() {
        return (
            <div className="pending-lists">
                <div className="top-section-title">STAIN QC LOG</div>
                <AnalyzesStainQc />
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

export default connect(mapStateToProps, mapDispatchToProps)(StainQcList)
