import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { changeCommentStainQcComment } from '../store/actions/ChangeComment';




export class StainSlides extends Component {
    constructor(props) {
        super(props);
        this.processor = [`T2000 #1`, `T2000 #2`];
        this.sliper = [`Manual`, `Automated`];
        this.goodBad = [`Good`, `Bad`];
        this.passFail = [`Pass`, `Fail`, `N/A`];
    }

    handleChange = (e) => {
        this.props.changeCommentStainQcComment(e.target.value);
    }


    render() {
        return (
            <div>
                <div className="lex-drop">
                    <div>
                        <p>Processor</p>
                        <DropDown
                            option={this.props.processorOption}
                            status={this.props.processorStatus}
                            menu={this.processor}
                            id="processor" />
                    </div>

                    <div>
                        <p>Stain Method</p>
                        <DropDown
                            option={this.props.sliperOption}
                            status={this.props.sliperStatus}
                            menu={this.sliper}
                            id="sliper" />
                    </div>

                    <div>
                        <p>Nuclear</p>
                        <DropDown
                            option={this.props.nuclearOption}
                            status={this.props.nuclearStatus}
                            menu={this.goodBad}
                            id="nuclear" />
                    </div>

                    <div>
                        <p>Cytoplasmic</p>
                        <DropDown
                            option={this.props.cytopOption}
                            status={this.props.cytopStatus}
                            menu={this.goodBad}
                            id="cytop" />
                    </div>

                    <div>
                        <p>Prep Quality</p>
                        <DropDown
                            option={this.props.prepQualityOption}
                            status={this.props.prepQualityStatus}
                            menu={this.goodBad}
                            id="prepQuality" />
                    </div>

                    <div>
                        <p>Contamination</p>
                        <DropDown
                            option={this.props.contaminationOption}
                            status={this.props.contaminationStatus}
                            menu={this.passFail}
                            id="contamination" />
                    </div>

                    <div>
                        <p>QC Results</p>
                        <DropDown
                            option={this.props.qcResultsOption}
                            status={this.props.qcResultsStatus}
                            menu={this.passFail}
                            id="qcResults" />
                    </div>

                </div>
                <div>
                    <p className="comment-sl">Comment</p>
                    <textarea
                        className="gross-other"
                        ref={el => this.comment = el}
                        value={this.props.qcComment}
                        onChange={this.handleChange}
                    ></textarea>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    patient: state.patient,

    processorOption: state.patient.processor,
    processorStatus: state.dropDown.processorStatus,
    sliperOption: state.patient.stainMethod,
    sliperStatus: state.dropDown.sliperStatus,
    nuclearOption: state.patient.nuclear,
    nuclearStatus: state.dropDown.nuclearStatus,
    cytopOption: state.patient.cytoplasmic,
    cytopStatus: state.dropDown.cytopStatus,
    prepQualityOption: state.patient.prepQuality,
    prepQualityStatus: state.dropDown.prepQualityStatus,
    contaminationOption: state.patient.contamination,
    contaminationStatus: state.dropDown.contaminationStatus,
    qcResultsOption: state.patient.qcResults,
    qcResultsStatus: state.dropDown.qcResultsStatus,
    qcComment: state.patient.qcComment
})

const mapDispatchToProps = dispatch => ({
    changeCommentStainQcComment: (text) => dispatch(changeCommentStainQcComment(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StainSlides)
