import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fluid from './Fluid';
import Slide from './Slide';



export class SpecimenSource extends Component {


    render() {
        if (this.props.title === `Fluid`) {
            return (
                <div className="pad-15">
                    <div className="border-grey">
                        <Fluid />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="pad-15">
                    <div className="border-grey">
                        <Slide />
                    </div>
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => ({
    title: state.activeGrossTab,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SpecimenSource)
