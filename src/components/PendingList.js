import React, { Component } from 'react';
import { connect } from 'react-redux';
import Analyzes from './Analyzes';
import ContentTable from './ContentTable';



export class PendingList extends Component {


    render() {
        return (
            <div className="pending-lists">
                <div className="top-section-title">PENDING LIST</div>
                <Analyzes />
                <ContentTable />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PendingList)
