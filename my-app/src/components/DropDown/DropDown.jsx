import React, {useState} from "react";
import s from "./DropDown.module.css"
import headerArrowUP from "./../../Image/headerImage/arrow-up.png"
import headerArrowDown from "./../../Image/headerImage/arrow-down.png"
import styled from "styled-components";
import Modal from "react-overlays/Modal";


let rand = () => Math.floor(Math.random() * 20) - 10;

const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
`;

const RandomlyPositionedModal = styled(Modal)`
  position: fixed;
  width: 114px;
  height: 169px;
  z-index: 1040;
  top:80px;
  right: 80px;
  border: 1px solid darkslategrey;
  background-color: white;
  padding: 20px;
`;

function DropDown() {
    const [show, setShow] = useState(false);

    const renderBackdrop = (props) => <Backdrop {...props} />;

    return (
        <div className="drop-down">
            <button
                type="button"
                className="btn btn-primary mb-4"
                onClick={() => setShow(true)}>
                <img className={s.arrowDown} src={headerArrowDown}/>
                {/*<img className={s.arrowUp} src={headerArrowUP}/>*/}
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

export default DropDown