import React, { Component } from 'react';
import { connect } from 'react-redux';
import print from '../img/print.svg';
import DropDownPrint from './DropDownPrint';



export class Print extends Component {

    render() {
        return (
            <div className="print">
                <div>
                    <DropDownPrint />
                </div>

                <img src={print} alt="" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Print)
