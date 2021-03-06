import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnalysis } from '../store/actions/AddAnalysis';


export class SpecimenAdequacy extends Component {
    constructor(props) {
        super(props);
        this.let = [`NOPR`, `UNINF`, `UNSC`, `UNOB`, `BU`, `UNAB`, `BR`, `CC`, `SCANT`, `ECN`, `SNPG`, `SNOI`, `SNOB`, `LOW`, `S`, `SUBOPTIMAL`, `SN`, `SE`, `PI`];
        this.actions = [
            `Unsatisfactory for evaluation. Specimen rejected / not processed because`,
            `Unsatisfactory for evaluation due to obscuring inflammation`,
            `Unsatisfactory for evaluation due to scanty cellular material`,
            `Unsatisfactory for evaluation due to obscuring blood`,
            `Slide accidentally broken, unrepairable for evaluation`,
            `Unsatisfactory for evaluation due to absence of cellular material`,
            `Slide accidentally broken, but repairable for evaluation`,
            `Scanty epithelial cellularity`,
            `Endocervical/transformation zone component not applicable`,
            `Satisfactory for evaluation endocervical/transformation zone component is absent due to pregnancy`,
            `Satisfactory for evaluation endocervical/transformation zone component is absent due to obscuring/excessive inflammation`,
            `Low cellularity`,
            `Satisfactory for Evaluation`,
            `Satisfactory for evaluation endocervical/transformation zone component cannot be determined due to atrophic cellular changes`,
            `Suboptimal for Evaluation`,
            `Satisfactory for evaluation endocervical/transformation zone component is absent`,
            `Satisfactory for evaluation endocervical/transformation zone component present`,
            `Partially obscuring inflammation`,
        ];
    }

    handleClick = (e) => {
        let list = JSON.parse(this.props.list);
        const i = Number(e.currentTarget.id);
        const specimenAdequacy = {
            id: `Sa`,
            code: this.let[i],
            action: this.actions[i],
        }
        list.push(specimenAdequacy)
        this.props.addAnalysis(JSON.stringify(list));
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
    if (!state.patient.preAnalysis) return {list: `[]`}
    else return {list: state.patient.preAnalysis}
    // list: state.patient.preAnalysis
}

const mapDispatchToProps = dispatch => ({
    addAnalysis: (list) => dispatch(addAnalysis(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpecimenAdequacy)
