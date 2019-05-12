import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CyInfo extends Component {


    render() {
        return (
            <div className="flex-part">

                <div className="flex-side">
                    <p className="field-title">No. of Slides:</p>
                    <input className="simple-input width100" type="number" />
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CyInfo)
