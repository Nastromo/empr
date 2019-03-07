import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Processing extends Component {

    render() {
        return (
            <div>
                Привет! Я Процессинг!
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Processing)
