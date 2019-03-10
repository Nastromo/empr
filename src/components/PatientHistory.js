import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import CheckBox from './CheckBox';
import MyDatePicker from './MyDatePicker';



export class PatientHistory extends Component {
    constructor(props) {
        super(props);
        this.patientHistory = [`Not given`, `LMP`, `Pregnant`, `Post Partum`, `Oral Contraceptives`, `Postmenopausal`, `TAH`, `Partial TAH`, `Supracervical Hysterectomy`];
    }


    render() {
        return (
            <div className="padding15">
                <p className="field-title">Patient History</p>
                <div className="flex50">

                    <div className="max-width250">
                        <DropDown menu={this.patientHistory} id="patientHistory" />
                    </div>

                    <div className="max-width250">
                        <MyDatePicker />
                    </div>

                </div>
                <CheckBox status={this.props.patient.routineScreen} title={`Routine Screen`} id="routineScreen" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    patient: state.patient,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PatientHistory)
