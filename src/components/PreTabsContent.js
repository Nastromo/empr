import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpecimenAdequacy from './SpecimenAdequacy';
import Diagnosis from './Diagnosis';
import PreComments from './PreComments';



export class PreTabsContent extends Component {

    render() {
        if (this.props.title === `Specimen Adequacy`) {
            return (
                <div className="pad-15">
                    <div className="border-grey">
                        <SpecimenAdequacy />
                    </div>
                </div>
            )
        } else if (this.props.title === `Diagnosis`) {
            return (
                <div className="pad-15">
                    <div className="border-grey">
                        <Diagnosis />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="pad-15">
                    <div className="border-grey">
                        <PreComments />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    title: state.activePreTab
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PreTabsContent)
