import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { submitPatient } from '../store/actions/SubmitStainQc';


export class StainsBtns extends Component {
    submit = (e) => {
        this.props.submitPatient(this.props.patient);
    }

    render() {
        return (
            <div className="right-bind">
                {/* <div className="main-btn-height fail">
                    <SubmitButton status={this.props.saveStatus} text="Fail" onClick={this.save} />
                </div>
                <div className="main-btn-height save">
                    <SubmitButton status={this.props.saveStatus} text="Save" onClick={this.save} />
                </div> */}
                <div className="main-btn-height submit">
                    <SubmitButton status={this.props.submitStatus} text="Submit" onClick={this.submit} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    patient: state.patient
})

const mapDispatchToProps = dispatch => ({
    submitPatient: (patient) => dispatch(submitPatient(patient))
})

export default connect(mapStateToProps, mapDispatchToProps)(StainsBtns)
