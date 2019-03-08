import React, { Component } from 'react';
import { connect } from 'react-redux';
import Analyzes from './Analyzes';



export class PendingList extends Component {


    render() {
        return (
            <div className="pending-lists">
                <div className="top-section-title">PENDING LIST</div>
                <Analyzes />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PendingList)
