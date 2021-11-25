import React, {PureComponent} from "react";
import headerIconBasket from "../../Image/headerImage/Vector.svg";
import s from "./Basket.module.css";
import ModalWindowForBasket from "../ModalWindowForBasket/ModalWindowForBasket";

class Basket extends PureComponent {
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
                    <img className={s.iconBasket} src={headerIconBasket}/>
                </button>
                <ModalWindowForBasket className={s.modalName} show={this.state.showModal}
                       onHide={() => this.hideModal(false)}/>
            </div>
        );
    }
}

export default Basket;
