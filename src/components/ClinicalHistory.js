import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckBox from './CheckBox';



export class ClinicalHistory extends Component {

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
                        <CheckBox status={this.props.patient.IUD} title={`IUD in place`} id="IUD" />
                    </div>
                    <div>
                        <CheckBox status={this.props.patient.discharge} title={`Discharge`} id="discharge" />
                        <CheckBox status={this.props.patient.vaginitis} title={`Vaginitis`} id="vaginitis" />
                        <CheckBox status={this.props.patient.HRT} title={`HRT`} id="HRT" />
                    </div>
                </div>
                <p className="field-title">Years Menopausal</p>
                <input className="simple-input" ref={el => this.pausa = el} type="number"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    patient: state.patient
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ClinicalHistory)
