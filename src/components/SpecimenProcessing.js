import React, { Component } from 'react';
import { connect } from 'react-redux';
import PatientInformation from './PatientInformation';
import Grossing from './Grossing';
import CytologyInformation from './CytologyInformation';



export class SpecimenProcessing extends Component {


    render() {
        return (
            <div className="specimen-processing">
                <div className="top-section-title">SPECIMEN PROCESSING</div>
                <PatientInformation />
                <Grossing />
                <CytologyInformation />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SpecimenProcessing)
