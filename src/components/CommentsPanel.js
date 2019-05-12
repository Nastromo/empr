import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInstrumComment } from '../store/actions/InstrumComment';



export class CommentsPanel extends Component {
    handleChange = (e) => {
        this.props.changeInstrumComment(e.target.value);
    }

    render() {
        return (
            <div className="cyt-comment">
                <p className="field-title">Specimen Processing Comments:</p>
                <textarea
                    className="gross-other"
                    ref={el => this.comment = el}
                    value={this.props.comment}
                    onChange={this.handleChange}
                ></textarea>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    comment: state.patient.testComment
})

const mapDispatchToProps = dispatch => ({
    changeInstrumComment: (text) => dispatch(changeInstrumComment(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPanel)
