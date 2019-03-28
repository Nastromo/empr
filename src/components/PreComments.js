import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeReportComment } from '../store/actions/ReportComment';



export class PreComments extends Component {
    constructor(props) {
        super(props);
        this.let = [`Addendum`, `HIST`, `Amended`, `LMP`, `CONCUR`, `RAC`, `QC`, `CORRECT`];
        this.actions = [
            `This report has been modified to include _________. No change has been made to the diagnosis.`,
            `Findings correlate with clinical history provided.`,
            `This case has been amended due to ___________. No change has been made to the diagnosis. / The diagnosis has been changed.`,
            `LMP was not provided. LMP is a NYS-DOH requirement as part of the clinical history of the patient.`,
            `This case has been reviewed by _____________, who concurs with the above interpretation.`,
            `Distinguishing Dysplasia from Marked Atrophic changes may not always be possible. Suggest repeat smear after short course of oral or topical therapy.`,
            `Quality Control was performed on this case`,
            `This case has been amended in order to correct the __________. No change has been made to the diagnosis.`
        ];
    }

    handleClick = (e) => {
        let list = JSON.parse(this.props.list);
        const i = Number(e.currentTarget.id);
        list.push(this.actions[i]);
        this.props.changeReportComment(JSON.stringify(list));
    }

    render() {
        return (
            <div className="pad11">
                <div className="pre-title">
                    <div className="first-t">Value</div>
                    <div className="second-t">Action</div>
                </div>
                {
                    this.actions.map((act, i) => {
                        return (
                            <div key={i} className="pre-acts" id={i} onClick={this.handleClick}>
                                <div className="first-a">{this.let[i]}</div>
                                <div className="second-a">{act}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if (!state.patient.reportComments) return {list: `[]`}
    else return {list: state.patient.reportComments}
    // list: state.patient.preAnalysis
}

const mapDispatchToProps = dispatch => ({
    changeReportComment: (list) => dispatch(changeReportComment(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(PreComments)
