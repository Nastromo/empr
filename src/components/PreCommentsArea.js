import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeReportComment } from '../store/actions/ReportComment';



export class PreCommentsArea extends Component {
    handleChange = (e) => {
        this.props.changeReportComment(e.target.value);
    }


    render() {
        return (
            <div className="cyt-comment">
                <p className="field-title">Report Comments:</p>
                <textarea
                    className="gross-other"
                    value={this.props.comment}
                    onChange={this.handleChange}
                ></textarea>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    comment: state.patient.reportComments
})

const mapDispatchToProps = dispatch => ({
    changeReportComment: (text) => dispatch(changeReportComment(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(PreCommentsArea)
