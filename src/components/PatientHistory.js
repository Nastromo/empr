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
                <div className="flex50">

                    <div className="max-width300">
                        <p className="field-title">Patient History</p>
                        <DropDown 
                            option={this.props.patientHistoryOption}
                            status={this.props.patientHistory}
                            menu={this.patientHistory} 
                            id="patientHistory" />
                    </div>

                    <div className="max-width300">
                        <p className="field-title">LMP Date</p>
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
    patientHistory: state.dropDown.patientHistory,
    patientHistoryOption: state.patient.patientHistory,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PatientHistory)
