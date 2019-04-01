import React, { Component } from 'react';
import { connect } from 'react-redux';



export class Slides extends Component {


    render() {
        return (
            <div className="sldes-list">

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Slides)
