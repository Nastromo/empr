import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CommentsPanel extends Component {


    render() {
        return (
            <div className="cyt-comment">
                <p className="field-title">Comments:</p>
                <textarea className="gross-other"
                    ref={el => this.comment = el}
                ></textarea>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPanel)
