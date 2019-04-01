import React, { Component } from 'react';
import { connect } from 'react-redux';
import BatchList from './BatchList';
import ControlEntry from './ControlEntry';




export class BatchControl extends Component {

    render() {
        return (
            <div className="pending">
                <BatchList />
                <ControlEntry />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BatchControl)
