import React, {PureComponent} from "react";
import CurrenciesRates from "../Currencies/CurrenciesRates";
import "../ModalForDrop/ModalForDrop_module.css"


class ModalForDrop extends PureComponent {

    render() {
        return (
            this.props.show && (
                <div className="modal_window_overlay" onClick={this.props.onHide}>
                    <div className="modal_window">
                        <CurrenciesRates/>
                    </div>
                </div>

            )
        );
    }
}

export default ModalForDrop;
