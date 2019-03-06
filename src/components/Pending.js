import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Pending extends Component {


    render() {
        return (
            <div>
                    Hello I'm Pending page!
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Pending)
