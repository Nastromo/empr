import React, { Component } from 'react';
import { connect } from 'react-redux';
import PreliminaryTabs from './PreliminaryTabs';
import PreTabsContent from './PreTabsContent';
import PreAnalysis from './PreAnalysis';
import PreCommentsArea from './PreCommentsArea';



export class Preliminary extends Component {

    render() {
        return (
            <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                <div onClick={this.transform} className="section-title">Preliminary Diagnosis Selection</div>
                <PreliminaryTabs />
                <PreTabsContent />
                <PreAnalysis />
                <PreCommentsArea />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Preliminary)
