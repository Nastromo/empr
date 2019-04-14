import React, { Component } from 'react';
import { connect } from 'react-redux';
import StainQcList from './StainQcList';
import StainQcEntry from './StainQcEntry';



export class StainQc extends Component {


    render() {
        return (
            <div className="pending">
                <StainQcList />
                <StainQcEntry />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StainQc)
