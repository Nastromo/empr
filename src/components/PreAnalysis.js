import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnalysis } from '../store/actions/AddAnalysis';



export class PreAnalysis extends Component {

    delete = (e) => {
        let list = JSON.parse(this.props.list);
        const i = Number(e.currentTarget.id);
        list.splice(i, 1);
        this.props.addAnalysis(JSON.stringify(list));
    }

    render() {
        const list = JSON.parse(this.props.list);
        return (
            <div>
                <p className="field-title marg27">Analysis</p>
                <div className="flex-analis-title">
                    <div>Id</div>
                    <div>Value</div>
                </div>
                {
                    list.map((item, i) => {
                        return (
                            <div key={i} className="flex-row-diag">
                                <div className="yell-row">
                                    <div className={item.id === `Sa` ? "id-row" : "id-raw"}>{item.id}</div>
                                    <div className="code-row">{item.code}</div>
                                    <div className="action-row">{item.action}</div>
                                </div>
                                <div className="delete" onClick={this.delete} id={i}></div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if (!state.patient.preAnalysis) return { list: `[]` }
    else return { list: state.patient.preAnalysis }
    // list: state.patient.preAnalysis
}

const mapDispatchToProps = dispatch => ({
    addAnalysis: (list) => dispatch(addAnalysis(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(PreAnalysis)
