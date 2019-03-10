import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import '../datepicker.css';



export class MyDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            focused: null,
        };
    }


    render() {
        return (
            <div className="date-picker">
                <SingleDatePicker
                    id="date_input"
                    numberOfMonths={1}
                    date={this.state.date}
                    focused={this.state.focused}
                    onDateChange={(date) => { this.setState({ date }); }}
                    onFocusChange={({ focused }) => { this.setState({ focused }); }}
                    isOutsideRange={() => false}
                    hideKeyboardShortcutsPanel={true}
                    daySize={32}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MyDatePicker)
