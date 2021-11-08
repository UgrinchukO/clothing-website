import React, {useState} from "react";
import Modal from 'react-overlays/Modal'
import styled from 'styled-components';
import headerIconBasket from "../../Image/headerImage/Vector.svg";
import s from "./ModalBasket.module.css"

let rand = () => Math.floor(Math.random() * 20) - 10;

const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

const RandomlyPositionedModal = styled(Modal)`
  position: fixed;
  width: 325px;
  height: 540px;
  z-index: 1040;
  bottom:101px;
  right: 55px;
  border: 1px solid darkslategrey;
  background-color: white;
  padding: 20px;
`;

function ModalBasket() {
    const [show, setShow] = useState(false);

    const renderBackdrop = (props) => <Backdrop {...props} />;

    return (


        <div className="modal-basket">
            <button
                type="button"
                className="btn btn-primary mb-4"
                onClick={() => setShow(true)}>
                <img className={s.iconBasket} src={headerIconBasket}/>
                
            </button>

            <RandomlyPositionedModal show={show}
                                     onHide={() => setShow(false)}
                                     renderBackdrop={renderBackdrop}
                                     aria-labelledby="modal-label">

                <div>
                    <h4 id="modal-label">FUTURE BASKET SECTION</h4>
                </div>
            </RandomlyPositionedModal>
        </div>
    );
}

export default ModalBasket