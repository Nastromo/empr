import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collapseInfo } from '../store/actions/Collapse';




export class CytologyInformation extends Component {

    transform = () => {
        if (this.props.isCollapsed) this.props.collapseInfo(false);
        else this.props.collapseInfo(true);
    }

    render() {
        return (
            <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                <div onClick={this.transform} className="section-title">Cytology Information</div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isCollapsed: state.infoIsCollapsed,
})

const mapDispatchToProps = (dispatch) => ({
    collapseInfo: (bool) => dispatch(collapseInfo(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(CytologyInformation)
