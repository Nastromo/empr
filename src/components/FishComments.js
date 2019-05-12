import React, { Component } from 'react';
import { connect } from 'react-redux';
import { externComment, internComment } from '../store/actions/InterComment';


export class FishComments extends Component {
    changeExternal = (e) => {
        this.props.setExternalComment(e.target.value);
    }

    changeInternal = (e) => {
        this.props.setInternalComment(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="comm-te">
                    <p className="left-text-ng">External comments</p>
                    <textarea
                        className="gross-other"
                        value={this.props.exterComment}
                        onChange={this.changeExternal}
                    ></textarea>
                </div>
                <div className="comm-te">
                    <p className="left-text-ng">Internal comments</p>
                    <textarea
                        className="gross-other"
                        value={this.props.interComment}
                        onChange={this.changeInternal}
                    ></textarea>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    exterComment: state.patient.externalComment,
    interComment: state.patient.internalComment,
})

const mapDispatchToProps = dispatch => ({
    setInternalComment: (text) => dispatch(internComment(text)),
    setExternalComment: (text) => dispatch(externComment(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(FishComments)
