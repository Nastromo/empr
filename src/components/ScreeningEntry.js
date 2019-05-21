import React, { Component } from 'react';
import { connect } from 'react-redux';
import PatientInformation from './PatientInformation';
import Grossing from './Grossing';
import CytologyInformation from './CytologyInformation';
import SubmitCyt from './SubmitCyt';
import Preliminary from './Preliminary';
import Photos from './Photos';
import AdditionalSlide from './AdditionalSlide';

import ClinicalInformation from './ClinicalInformation';
import Interpretation from './Interpretation';
import FishComments from './FishComments';




export class ScreeningEntry extends Component {

    render() {
        if (this.props.index === 0 || this.props.index === 1) {
            return (
                <div className="specimen-processing">
                    <div className="top-section-title">SCREENING ENTRY</div>
                    <PatientInformation />
                    <Grossing />
                    <CytologyInformation />
                    <Preliminary />
                    <Photos />
                    <div className="flex-bl-btns">
                        <AdditionalSlide />
                        <SubmitCyt />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="specimen-processing">
                    <div className="top-section-title">SCREENING ENTRY</div>
                    <PatientInformation />
                    <ClinicalInformation />
                    <Interpretation />
                    <FishComments />
                    <Photos />

                    <div className="flex-bl-btns">
                        <AdditionalSlide />
                        <SubmitCyt />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    index: state.activeAnalysis,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ScreeningEntry)
