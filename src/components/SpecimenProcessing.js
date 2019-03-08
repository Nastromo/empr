import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SpecimenProcessing extends Component {


    render() {
        return (
            <div className="specimen-processing">
                <div className="top-section-title">SPECIMEN PROCESSING</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SpecimenProcessing)
