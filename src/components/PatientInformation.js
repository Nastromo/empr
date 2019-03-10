import React, { Component } from 'react';
import { connect } from 'react-redux';
import pdf from '../img/pdf.svg';
import book from '../img/book.svg';
import { collapsePatient } from '../store/actions/Collapse';



export class PatientInformation extends Component {
    handleClick = (e) => {
        switch (e.currentTarget.id) {
            case `pdf`:
                window.open(this.props.patient.pdf, '_blank');
                break;
            case `history`:
                console.log(`Показать попап с историей`);
                break;
            default: break;
        }
    }

    transform = () => {
        if (this.props.isCollapsed) this.props.collapsePatient(false);
        else this.props.collapsePatient(true);
    }

    render() {
        return (
            <div className={ this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                <div onClick={this.transform} className="section-title">Patient Information</div>
                <div className="flex-vertical-start">
                    <div className="section-info">
                        <div>
                            <p>Patient name:</p>
                            <p>{this.props.patient.name}</p>
                        </div>

                        <div>
                            <p>Accession:</p>
                            <p>{this.props.patient.accession}</p>
                        </div>

                        <div>
                            <p>Received:</p>
                            <p>{this.props.patient.received}</p>
                        </div>

                        <div>
                            <p>Dob:</p>
                            <p>{this.props.patient.dob}</p>
                        </div>

                        <div>
                            <p>Sex:</p>
                            <p>{this.props.patient.sex}</p>
                        </div>
                    </div>
                    <div className="section-info">
                        <div>
                            <p>Client:</p>
                            <p>{this.props.patient.client}</p>
                        </div>

                        <div>
                            <p>Physician:</p>
                            <p>{this.props.patient.physician}</p>
                        </div>
                        <div className="history">
                            <div onClick={this.handleClick} id="pdf"><img src={pdf} alt="" />Requisition PDF</div>
                            <div onClick={this.handleClick} id="history"><img src={book} alt="" />Patient History</div>
                        </div>
                    </div>
                </div>
                <div className="diagnosis-table">
                    <div id="title">
                        <p id="code">Code</p>
                        <p id="desc">Diagnosis</p>
                    </div>
                    <div id="text">
                        <p id="textCode">{this.props.patient.code}</p>
                        <p id="diagnosis">{this.props.patient.diagnosis}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // patient: state.patient
    isCollapsed: state.patientIsCollapsed,
    patient: {
        name: `SVERIPSKA,NATALIA`,
        accession: `1809042028`,
        received: `09/04/2018 1:16 PM`,
        dob: `02/15/1992`,
        sex: `Female`,
        client: `22 MOLIVER VLADIMIR`,
        physician: `Moliver, Vladimir DR`,
        code: `z.001`,
        diagnosis: `Encounter for general adult medical examination without abnormal findingsýEncounter for general adult medical examination without abnormal findingsýEncounter for general adult medical examination without abnormal findings`,
        pdf: `http://www.pdf995.com/samples/pdf.pdf`,
        history: [`1809042028`, `1809042028`, `1809042028`, `1809042028`]
    }
})

const mapDispatchToProps = (dispatch)=> ({
    collapsePatient: (bool) => dispatch(collapsePatient(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(PatientInformation)
