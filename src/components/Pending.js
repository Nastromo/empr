import React, { Component } from 'react';
import { connect } from 'react-redux';
import PendingList from './PendingList';
import SpecimenProcessing from './SpecimenProcessing';




export class Pending extends Component {
    render() {
        return (
            <div className="pending">
                <PendingList />
                <SpecimenProcessing />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Pending)
