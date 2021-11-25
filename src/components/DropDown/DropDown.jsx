import React, {Component} from "react";
import headerArrowDown from "./../../Image/headerImage/arrow-down.png"
import s from "../DropDown/DropDown.module.css"
import ModalForDrop from '../ModalForDrop/ModalForDrop'


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
                <div className={s.wrapDown}>
                <button className={s.arrowDown} onClick={() => this.getModal(false)}>
                    <img  src={headerArrowDown}/>
                </button>
                </div>
                <ModalForDrop className={s.modalName} show={this.state.showModal}
                              onHide={() => this.hideModal(false)}/>
            </div>
        );
    }
}

export default DropDown;
