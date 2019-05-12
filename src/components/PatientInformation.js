import React, { Component } from 'react';
import { connect } from 'react-redux';
import pdf from '../img/pdf.svg';
import book from '../img/book.svg';
import { collapsePatient } from '../store/actions/Collapse';
import { showHistoryPopup } from '../store/actions/HistoryPopup';
import moment from 'moment';



export class PatientInformation extends Component {

    handleClick = (e) => {
        switch (e.currentTarget.id) {
            case `pdf`:
                window.open(this.props.patient.requisitionPdf, '_blank');
                break;
            case `history`:
                this.props.showHistoryPopup(true);
                break;
            default: break;
        }
    }

    transform = () => {
        if (this.props.isCollapsed) this.props.collapsePatient(false);
        else this.props.collapsePatient(true);
    }

    render() {
        if (this.props.patient.diagnosis) {
            const diagnosis = JSON.parse(this.props.patient.diagnosis);
            return (
                <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                    <div onClick={this.transform} className="section-title">Patient Information</div>
                    <p className="marg-orange">
                        {this.props.stage === `case canceled` ||
                            this.props.stage === `case deleted` ||
                            this.props.stage === `Pop Slide` ||
                            this.props.stage === `Cell Block` ? this.props.stage : ``}
                    </p>
                    <div className="flex-vertical-start">
                        <div className="section-info">
                            <div>
                                <p>Patient name:</p>
                                <p>{`${this.props.patient.name} ${this.props.patient.lastName}`}</p>
                            </div>

                            <div>
                                <p>Accession:</p>
                                <p>{this.props.patient.access}</p>
                            </div>

                            <div>
                                <p>Received:</p>
                                <p>{moment(this.props.patient.received).format("MM/DD/YYYY h:mm a")}</p>
                            </div>

                            <div>
                                <p>Dob:</p>
                                <p>{moment(this.props.patient.dob).format("MM/DD/YYYY")}</p>
                            </div>

                            <div>
                                <p>Sex:</p>
                                <p>{this.props.patient.sex}</p>
                            </div>
                            <div>
                                <p>Test Code:</p>
                                <p>{this.props.testCode}</p>
                            </div>
                            <div>
                                <p>Test Description:</p>
                                <p>{this.props.testDescription}</p>
                            </div>

                            <div>
                                <p>Screened by:</p>
                                <p>{this.props.patient.updatedBy}</p>
                            </div>
                            <div>
                                <p>Date:</p>
                                <p>{moment(this.props.patient.lastUpdate).format("MM/DD/YYYY h:mm a")}</p>
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

                    <div id="title">
                        <div className="title-diag">Code</div>
                        <div className="title-diag">Diagnosis</div>
                    </div>

                    <div className="diagnosis-table">
                        <div id="text">
                            {
                                diagnosis.map((diag, i) => {
                                    return (
                                        <div key={i} className="marg6">
                                            <p id="textCode">{diag.code}</p>
                                            <p id="diagnosis">{diag.description}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => ({
    stage: state.patient.stage,
    patient: state.patient,
    isCollapsed: state.patientIsCollapsed,
    testCode: "GYN",
    testDescription: "GYN CYTOLOGY",
})

const mapDispatchToProps = (dispatch) => ({
    collapsePatient: (bool) => dispatch(collapsePatient(bool)),
    showHistoryPopup: (bool) => dispatch(showHistoryPopup(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(PatientInformation)