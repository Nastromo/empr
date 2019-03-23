import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnalyzesProcessing from './AnalyzesProcessing';
import ProcessingTable from './ProcessingTable';




export class Processing extends Component {

    render() {
        return (
            <div className="center-table">
                <div className="center-table-white">
                    <div className="specimen-processing">
                        <div className="top-section-title">PROCESSING LISTS</div>
                            <AnalyzesProcessing />
                            <ProcessingTable />
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

export default connect(mapStateToProps, mapDispatchToProps)(Processing)
