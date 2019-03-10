import React, { Component } from 'react';
import { connect } from 'react-redux';
import PatientHistory from './PatientHistory';
import ClinicalHistory from './ClinicalHistory';




export class Grossing extends Component {

    transform = () => {
        if (this.props.isCollapsed) this.props.collapsePatient(false);
        else this.props.collapsePatient(true);
    }

    render() {
        return (
            <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                <div onClick={this.transform} className="section-title">Grossing</div>
                <div className="flex-vertical-start">
                    <PatientHistory />
                </div>
                <ClinicalHistory />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isCollapsed: state.grossingIsCollapsed,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Grossing)
