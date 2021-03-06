import React from "react";
import s from "./Header.module.css"
import headerIconReboot from "./../../Image/headerImage/a-logo.png"
import DropDown from "../DropDown/DropDown";
import ModalBasket from "../ModalBasket/ModalBasket";
import {NavLink} from "react-router-dom";
import DropDownContainer from "../DropDown/DropDownContainer";


class Header extends React.Component {

    render() {
        return (
            <header className={s.headerElement}>
                <div className={s.categoryClothing}>
                    <NavLink to={"/women"} className={s.firstElement} activeClassName={s.active} >Women</NavLink>
                </div>
                <div className={s.categoryClothing}>
                    <NavLink to={'/men'} activeClassName={s.active}>Men</NavLink>
                </div>

                <div className={s.categoryClothing}>
                    <NavLink to={"/kids"} activeClassName={s.active}>Kids</NavLink>
                </div>

                <button className={s.iconReboot}>
                    <img src={headerIconReboot}/>
                </button>
                <div className={s.rightHeader}>
                    <button className={s.iconDollar}>
                        $
                    </button>
                    <ModalBasket/>
                </div>
            </header>

        )
    }
}

export default Header