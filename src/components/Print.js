import React, { Component } from 'react';
import { connect } from 'react-redux';
import print from '../img/print.svg';



export class Print extends Component {


    render() {
        return (
            <div className="print">
                <img src={print} alt=""/>
                <p>Print list</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Print)
