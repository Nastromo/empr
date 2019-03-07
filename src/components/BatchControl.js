import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BatchControl extends Component {


    render() {
        return (
            <div>
                Привет! Я БэтчКонтрол!
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BatchControl)
