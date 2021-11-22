import React, {PureComponent} from "react";

import s from './Modal_module.css'
import CurrenciesRates from "../Currencies/CurrenciesRates";

class Modal extends PureComponent {
    render() {
        return (
            this.props.show && (
                <div className="modal_overlay"  onClick={this.props.onHide}>
                    <div className="modal">
                        <CurrenciesRates/>
                    </div></div>

                )
        );
    }
}

export default Modal;
