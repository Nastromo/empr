import React, { Component } from 'react';
import { connect } from 'react-redux';




export class BatchSlides extends Component {


    render() {
        return (
            <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                <div onClick={this.transform} className="section-title">Batch Slides</div>
                1
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BatchSlides)
