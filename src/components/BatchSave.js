import React, { Component } from 'react'
import { connect } from 'react-redux'

export class BatchSave extends Component {


    render() {
        return (
            <div className="right-bind">
                <div className="main-btn-height save">
                    <button className="green-btn" onClick={this.handleClick}>Save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BatchSave)
