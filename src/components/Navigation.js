import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { showMenu } from '../store/actions/UserMenu';
import UserMenu from './UserMenu';
import { showDropDown } from '../store/actions/DropDown';




export class Navigation extends Component {
    setActive = (element) => {
        const activeNavItem = document.getElementsByClassName('menu-active');
        activeNavItem[0].classList.remove(`menu-active`);
        element.classList.add(`menu-active`);
    }

    componentDidMount() {
        switch (this.props.location.pathname) {
            case `/account/pending`:
                this.setActive(this.pending);
                break;
            case `/account/processing`:
                this.setActive(this.processing);
                break;
            case `/account/screening`:
                this.setActive(this.screening);
                break;
            case `/account/qc`:
                this.setActive(this.qc);
                break;
            case `/account/batch-control`:
                this.setActive(this.batch);
                break;
            case `/account/stain-qc`:
                this.setActive(this.stain);
                break;
            case `/account/history`:
                this.setActive(this.history);
                break;
            case `/account/stain-maintenance`:
                this.setActive(this.maintenance);
                break;
            default: break;
        }
    }

    handleClick = (e) => {
        switch (e.currentTarget.id) {
            case `pending`:
                this.setActive(this.pending);
                break;
            case `processing`:
                this.setActive(this.processing);
                break;
            case `screening`:
                this.setActive(this.screening);
                break;
            case `qc`:
                this.setActive(this.qc);
                break;
            case `control`:
                this.setActive(this.batch);
                break;
            case `batch`:
                this.setActive(this.batch);
                break;
            case `stain`:
                this.setActive(this.stain);
                break;
            case `history`:
                this.setActive(this.history);
                break;
            case `maintenance`:
                this.setActive(this.maintenance);
                break;
            default: break;
        }
    }

    componentWillMount() {
        document.addEventListener('click', this.handleMenu);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleMenu);
    }

    handleMenu = (e) => {
        if (this.profile.contains(e.target)) {
            this.props.showMenu(`nav-con-menu-transform`);
        } else {
            this.props.showMenu(``);
            // const arr = document.getElementsByClassName("drop-down-show");
            // if (arr[0]) arr[0].classList.remove("drop-down-show");
            // this.props.showDropDown({ 
            //     status: false,
            //     id: this.props.id
            // });
        }
    }


    render() {
        const userChars = this.props.userChars.substring(0, 2).toUpperCase();
        return (
            <div className="white-back">
                <div className="main-nav">
                    <div className="main-categories">
                        <a className="logo-text" href="/account/pending">Cytology</a>
                        <Link
                            id="pending"
                            onClick={this.handleClick}
                            innerRef={el => this.pending = el}
                            className="menu-active"
                            to="/account/pending">Pending</Link>
                        <Link
                            id="processing"
                            onClick={this.handleClick}
                            innerRef={el => this.processing = el}
                            to="/account/processing">Batch processing</Link>
                        <Link
                            id="stain"
                            onClick={this.handleClick}
                            innerRef={el => this.stain = el}
                            to="/account/stain-qc">Stain Qc</Link>
                        <Link
                            id="screening"
                            onClick={this.handleClick}
                            innerRef={el => this.screening = el}
                            to="/account/screening">Screening</Link>
                        <Link
                            id="qc"
                            onClick={this.handleClick}
                            innerRef={el => this.qc = el}
                            to="/account/qc">QC</Link>

                        {/* <div className="relative">
                            <Link
                                id="control"
                                onClick={this.handleClick}
                                className="drop-menu"
                                to="/account/batch-control">Control</Link>
                            <div className="sub-menu">
                                <Link
                                    id="batch"
                                    onClick={this.handleClick}
                                    innerRef={el => this.batch = el}
                                    to="/account/batch-control">Batch Control</Link>
                                <Link
                                    id="stain"
                                    onClick={this.handleClick}
                                    innerRef={el => this.stain = el}
                                    to="/account/stain-qc">Stain Qc</Link>
                            </div>
                        </div> */}

                        <Link
                            id="history"
                            onClick={this.handleClick}
                            innerRef={el => this.history = el}
                            to="/account/history">History</Link>
                        {/* <Link
                            id="maintenance"
                            onClick={this.handleClick}
                            innerRef={el => this.maintenance = el}
                            to="/account/stain-maintenance">Stain Maintenance</Link> */}
                    </div>
                    <div className="work-info">
                        <p>GYN: <span className="blue-text">{this.props.gyn}</span></p>
                        <p>NGYN: <span className="blue-text">{this.props.ngyn}</span></p>
                        <div ref={el => this.profile = el} className="profile">{userChars}</div>

                        <UserMenu />

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gyn: state.gynCounter.gyn,
    ngyn: state.gynCounter.ngyn,
    userChars: state.user.login,
    clickedID: state.dropDown.id,
    isOpen: state.dropDown.status,

})

const mapDispatchToProps = (dispatch) => ({
    showMenu: (css) => dispatch(showMenu(css)),
    showDropDown: (obj) => dispatch(showDropDown(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))
