import React, { Component } from 'react';
import { connect } from 'react-redux';
import PatientHistory from './PatientHistory';
import ClinicalHistory from './ClinicalHistory';
import PapHistory from './PapHistory';
import { collapseGrossing } from '../store/actions/Collapse';



export class Grossing extends Component {

    transform = () => {
        if (this.props.isCollapsed) this.props.collapseGrossing(false);
        else this.props.collapseGrossing(true);
    }

    render() {
        return (
            <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                <div onClick={this.transform} className="section-title">Grossing</div>
                <div className="flex-vertical-start">
                    <PatientHistory />
                </div>
                <ClinicalHistory />
                <PapHistory />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isCollapsed: state.grossingIsCollapsed,
})

const mapDispatchToProps = (dispatch) => ({
    collapseGrossing: (bool) => dispatch(collapseGrossing(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Grossing)
