import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScreeningList from './ScreeningList';
import ScreeningEntry from './ScreeningEntry';





export class Screening extends Component {

    render() {
        return (
            <div className="pending-wide">
                <ScreeningList />
                <ScreeningEntry />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Screening)
