import React, { Component } from 'react';
import { connect } from 'react-redux';
import PatientInformation from './PatientInformation';
import Grossing from './Grossing';
import CytologyInformation from './CytologyInformation';
import SubmitCyt from './SubmitCyt';
import Preliminary from './Preliminary';
import Photos from './Photos';




export class ScreeningEntry extends Component {

    render() {
        return (
            <div className="specimen-processing">
                <div className="top-section-title">SCREENING ENTRY</div>
                <PatientInformation />
                <Grossing />
                <CytologyInformation />
                <Preliminary />
                <Photos />
                <SubmitCyt />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ScreeningEntry)
