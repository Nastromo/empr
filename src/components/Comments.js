import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Comments extends Component {


    render() {
        return (
            <div>
                Привет! Я Комментс!
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
