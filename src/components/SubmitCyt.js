import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { savePatient, submitPatient, cancelPatient, deletePatient, submitScreening } from '../store/actions/SubmitGyn';
import { showNotification } from '../store/actions/Notification';


export class SubmitCyt extends Component {
    save = (e) => {
        this.props.savePatient(this.props.patient);
    }

    submit = (e) => {
        if (window.location.href.includes(`screening`)) {
            if (this.props.numberCells) {
                if (this.props.numberCells < this.props.numberChroms + this.props.numberZero) {
                    this.props.showNotification(`Please check total cell count!`, `notification-show`);
                } else {
                    this.props.submitScreening(this.props.patient);
                }
            } else {
                this.props.showNotification(`Total number of cells can't be empty`, `notification-show`);
            }

        } else {
            this.props.submitPatient(this.props.patient);
        }
    }

    cancel = (e) => {
        this.props.cancelPatient(this.props.patient);
    }

    delete = (e) => {
        this.props.deletePatient(this.props.patient);
    }

    sendToQc = (e) => {
        console.log(`Send to qc`)
        // this.props.sendToQc(this.props.patient);
    }

    render() {
        return (
            <div className="right-bind">
                <div className="main-btn-height cancel">
                    <SubmitButton text="Send to QC" onClick={this.sendToQc} />
                </div>
                <div className="main-btn-height cancel">
                    <SubmitButton status={this.props.cancelStatus} text="Cancel" onClick={this.cancel} />
                </div>
                <div className="main-btn-height fail">
                    <SubmitButton status={this.props.deleteStatus} text="Delete" onClick={this.delete} />
                </div>
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
    numberCells: state.patient.numberCells,
    numberChroms: state.patient.numberChroms,
    numberZero: state.patient.numberZero,
    saveStatus: state.saveSpinner,
    submitStatus: state.submitSpinner,
    cancelStatus: state.cancelSpinner,
    deleteStatus: state.deleteSpinner,
    patient: state.patient
})

const mapDispatchToProps = dispatch => ({
    savePatient: (patient) => dispatch(savePatient(patient)),
    submitPatient: (patient) => dispatch(submitPatient(patient)),
    cancelPatient: (patient) => dispatch(cancelPatient(patient)),
    deletePatient: (patient) => dispatch(deletePatient(patient)),
    submitScreening: (patient) => dispatch(submitScreening(patient)),
    showNotification: (text, cla) => dispatch(showNotification(text, cla))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitCyt)
