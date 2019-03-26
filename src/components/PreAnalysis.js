import React, { Component } from 'react';
import { connect } from 'react-redux';




export class PreAnalysis extends Component {


    render() {
        return (
            <div>
                <p className="field-title marg27">Analysis</p>
                <div className="flex-analis-title">
                    <div>Id</div>
                    <div>Value</div>
                </div>
                {
                    this.props.list.map((item, i) => {
                        return (
                            <div className="flex-analysis">

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // list: state.patient.preAnalysis
    list: []
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PreAnalysis)
