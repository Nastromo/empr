import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { savePatient, submitPatient } from '../store/actions/SubmitGyn';



export class SubmitCyt extends Component {
    save = (e) => {
        this.props.savePatient(this.props.patient);
    }

    submit = (e) => {
        this.props.submitPatient(this.props.patient);
    }

    render() {
        return (
            <div className="right-bind">
                <div className="main-btn-height save">
                    <SubmitButton status={this.props.saveStatus} text="Save" onClick={this.save} />
                </div>
                <div className="main-btn-height submit">
                    <SubmitButton status={this.props.submitStatus} text="Submit" onClick={this.submit} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    saveStatus: state.saveSpinner,
    submitStatus: state.submitSpinner,
    patient: state.patient
})

const mapDispatchToProps = dispatch => ({
    savePatient: (patient) => dispatch(savePatient(patient)),
    submitPatient: (patient) => dispatch(submitPatient(patient))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitCyt)
