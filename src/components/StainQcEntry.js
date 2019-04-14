import React, { Component } from 'react';
import { connect } from 'react-redux';
import StainSlides from './StainSlides';
import StainsBtns from './StainsBtns';



export class StainQcEntry extends Component {


    render() {
        return (
            <div className="specimen-processing">
                <div className="top-section-title">STAIN QC ENTRY</div>
                <StainSlides />
                <StainsBtns />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StainQcEntry)
