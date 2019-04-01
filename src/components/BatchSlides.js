import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slides from './Slides';




export class BatchSlides extends Component {


    render() {
        return (
            <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                <div onClick={this.transform} className="section-title">Batch Slides</div>
                <button className="btn-entry-slide" onClick={this.handeClick}>Add Slides</button>
                <div className="flex-tit-batch">
                    <p>Accession</p>
                    <p>Patient Name</p>
                    <p>Results</p>
                    <p>Score</p>
                </div>
                <Slides />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BatchSlides)
