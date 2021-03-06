import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { changeComment } from '../store/actions/InterComment';


export class Interpretation extends Component {
    constructor(props) {
        super(props);
        this.inter = [`Negative`, `Positive 1`, `Positive 1&2`, `Positive 1&3`, `Positive 2`, `Positive 2&3`, `Positive 3`, `Unsatisfactory`, `ABNORMAL, UNSPECIFIED (SEE COMMENT)`];
    }

    handleChange = () => {
        this.props.changeComment();
    }

    render() {        
        return (
            <div>
                <div className="flex-inter">
                    <p className="left-text-ng">Interpretation</p>
                    <div className="inter-drop">
                        <DropDown
                            option={this.props.interpretationOption}
                            status={this.props.interpretationStatus}
                            menu={this.inter}
                            id="interpretation" />
                    </div>
                </div>
                <div className="comm-te">
                    <textarea
                        className="gross-other"
                        value={this.props.comment}
                        onChange={this.handleChange}
                    ></textarea>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    interpretationOption: state.patient.interpretation,
    interpretationStatus: state.dropDown.interpretation,
    comment: state.patient.interpretationComment
})

const mapDispatchToProps = dispatch => ({
    changeComment: (text) => dispatch(changeComment(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Interpretation)
