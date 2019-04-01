import React, { Component } from 'react';
import { connect } from 'react-redux';



export class BatchEntry extends Component {

    render() {
        return (
            <div className={this.props.isCollapsed ? `sect-hide sect` : `sect`}>
                <div onClick={this.transform} className="section-title">Batch Entry</div>
                <div className="first-line">
                    <div>
                        <p>Slide Date</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p>Slide Post Date</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p>Control #</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p>Probe Lot #</p>
                        <input className="simple-input" type="text" />
                    </div>
                </div>
                <div className="first-line">
                    <div>
                        <p>Control Exp. Date</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p>Control Lot #</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p>Control Exp. Date</p>
                        <input className="simple-input" type="text" />
                    </div>
                    <div>
                        <p>Reagent Lot #</p>
                        <input className="simple-input" type="text" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BatchEntry)
