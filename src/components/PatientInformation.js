import React, { Component } from 'react';
import { connect } from 'react-redux';
import pdf from '../img/pdf.svg';
import book from '../img/book.svg';
import { collapsePatient } from '../store/actions/Collapse';
import { showHistoryPopup } from '../store/actions/HistoryPopup';



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
            this.obj = JSON.parse(this.props.patient.diagnosis);
            const diagnosis = this.obj.d;
            return (
                <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                    <div onClick={this.transform} className="section-title">Patient Information</div>
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
                                            <p id="diagnosis">{diag.text}</p>
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
    patient: state.patient,
    isCollapsed: state.patientIsCollapsed
})

const mapDispatchToProps = (dispatch) => ({
    collapsePatient: (bool) => dispatch(collapsePatient(bool)),
    showHistoryPopup: (bool) => dispatch(showHistoryPopup(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(PatientInformation)