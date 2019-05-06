import React, { Component } from 'react';
import { connect } from 'react-redux';
import { externalComment, internalComment } from '../store/actions/InterComment';


export class FishComments extends Component {

    render() {
        return (
            <div>
                <div className="comm-te">
                    <p className="left-text-ng">External comments</p>
                    <textarea
                        className="gross-other"
                        value={this.props.comment}
                        onChange={this.changeExternal}
                    ></textarea>
                </div>
                <div className="comm-te">
                    <p className="left-text-ng">Internal comments</p>
                    <textarea
                        className="gross-other"
                        value={this.props.comment}
                        onChange={this.changeInternal}
                    ></textarea>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FishComments)
