import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddInstrumPanel from './AddInstrumPanel'
import InstrumentsList from './InstrumentsList'


export class Instruments extends Component {


    render() {
        return (
            <div className="center-content">
                <div className="add-instrument">
                    <h2>Add new instrument</h2>
                    <AddInstrumPanel />
                    <InstrumentsList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Instruments)
