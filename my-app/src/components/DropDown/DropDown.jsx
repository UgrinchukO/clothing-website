import React, {Component} from "react";
import headerArrowDown from "./../../Image/headerImage/arrow-down.png"
import s from "../DropDown/DropDown.module.css"
import Modal from '../Modal/Modal'


class DropDown extends Component {
    state = {
        showModal: false
    };

    getModal() {
        this.setState({showModal: true});
    };

    hideModal() {
        this.setState({showModal: false});
    };

    render() {
        return (
            <div>
                <button onClick={() => this.getModal(false)}>
                    <img className={s.arrowDown} src={headerArrowDown}/>
                </button>
                <Modal className={s.modalName} show={this.state.showModal}
                       onHide={() => this.hideModal(false)}/>
            </div>
        );
    }
}

export default DropDown;
