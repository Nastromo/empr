import React, { Component } from 'react';
import { connect } from 'react-redux';
import InstrumType from './InstrumType';
import Instrum from './Instrum';
import GetInstrum from './GetInstrum';
import ChosenInstrums from './ChosenInstrums';




export class InstrumentsPanel extends Component {


    render() {
        return (
            <div>
                <ChosenInstrums />
                <div className="flex-three">
                    <InstrumType />
                    <Instrum />
                    <GetInstrum />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsPanel)
