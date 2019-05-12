import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import MyDatePicker from './MyDatePicker';



export class PatientHistory extends Component {
    constructor(props) {
        super(props);
        this.patientHistory = [`Not given`, `LMP`, `Pregnant`, `Post Partum`, `Oral Contraceptives`, `Postmenopausal`, `TAH`, `Partial TAH`, `Supracervical Hysterectomy`];
    }


    render() {
        if (this.props.patientHistoryOption === `LMP`) {
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
                            <MyDatePicker id="lmp" date={this.props.patient.lmpDate} />
                        </div>
    
                    </div>
                    
                </div>
            )
        } else {
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
                            <div className="fake-picker"></div>
                        </div>
    
                    </div>
                    
                </div>
            )
        }
        
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
