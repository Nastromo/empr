import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckBox from './CheckBox';
import { changeYearsMenopausal } from '../store/actions/Menopausal'


export class ClinicalHistory extends Component {

    handleChange = (e) => {
        this.props.changeYearsMenopausal(e.target.value);
    }

    render() {
        return (
            <div className="padding15">
                <p className="field-title">Clinical History</p>
                <div className="flex-horiz">
                    <div>
                        <CheckBox status={this.props.patient.abnormalBleeding} title={`Abnormal Bleeding`} id="abnormalBleeding" />
                        <CheckBox status={this.props.patient.previousDysplasia} title={`Previous Dysplasia`} id="previousDysplasia" />
                        <CheckBox status={this.props.patient.radiationTherapy} title={`Radiation Therapy`} id="radiationTherapy" />
                    </div>
                    <div>
                        <CheckBox status={this.props.patient.highRisk} title={`High Risk`} id="highRisk" />
                        <CheckBox status={this.props.patient.hysterectomy} title={`Hysterectomy`} id="hysterectomy" />
                        <CheckBox status={this.props.patient.iudInplace} title={`IUD in place`} id="iudInplace" />
                    </div>
                    <div>
                        <CheckBox status={this.props.patient.discharge} title={`Discharge`} id="discharge" />
                        <CheckBox status={this.props.patient.vaginitis} title={`Vaginitis`} id="vaginitis" />
                        <CheckBox status={this.props.patient.hrt} title={`HRT`} id="hrt" />
                    </div>
                    <CheckBox status={this.props.patient.routineScreen} title={`Routine Screen`} id="routineScreen" />
                </div>
                <p className="field-title">Years Menopausal</p>
                <input className="simple-input" value={this.props.patient.yearsMenopausal || ``} onChange={this.handleChange} type="number"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    patient: state.patient
})

const mapDispatchToProps = dispatch => ({
    changeYearsMenopausal: (years) => (dispatch(changeYearsMenopausal(years)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClinicalHistory)
