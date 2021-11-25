import React, {PureComponent} from "react";
import headerArrowDown from "../../Image/headerImage/arrow-down.png";
import "./ModalWindowForBasket_module.css"

class ModalWindowForBasket extends PureComponent {
    value = headerArrowDown

    render() {
        return (
            this.props.show && (
                <div className="modal_overlay" onClick={this.props.onHide}>
                    <div className="modal">
                        <p>Basket</p>
                    </div>
                </div>

            )
        );
    }
}

export default ModalWindowForBasket;
