import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeReportComment } from '../store/actions/ReportComment';
import DropDown from './DropDown';



export class PreCommentsArea extends Component {
    constructor(props) {
        super(props);
        this.fov = [`Manual`, `22 FOV`, `22 FOV + MAN`];
        this.ngynFov = [
            `Fluid requiring simple smear preparation`,
            `Fluid requiring concentration technique`,
            `Fluid requiring thin layer preparation`,
            `Smear(s) preparated by client`,
            `Smear(s) requiring preparation`,
            `Multiple smears (5 or more) requiring extended study`,
            `Stain for inclusion bobies`,
            `Determination of adequacy of specimen`,
            `FNA interpratation`,
            `Fluid requiringcell block preparation`,
        ];
    }

    handleChange = (e) => {
        this.props.changeReportComment(e.target.value);
    }


    render() {
        return (
            <div className="cyt-comment">
                <p className="field-title">Preparation method:</p>
                <div className="width200-px">
                    <DropDown
                        option={this.props.preparationMethodOption}
                        status={this.props.preparationMethodStatus}
                        menu={this.props.index === 0 ? this.fov : this.ngynFov}
                        id="preparationMethod" />
                </div>

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
    index: state.activeAnalysis,
    comment: state.patient.reportComments,
    preparationMethodOption: state.patient.preparationMethod,
    preparationMethodStatus: state.dropDown.preparationMethod,
})


const mapDispatchToProps = dispatch => ({
    changeReportComment: (text) => dispatch(changeReportComment(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(PreCommentsArea)
