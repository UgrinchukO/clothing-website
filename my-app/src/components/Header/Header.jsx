import React from "react";
import s from "./Header.module.css"
import headerIconReboot from "./../../Image/headerImage/a-logo.png"
import headerIconBasket from "./../../Image/headerImage/Vector.png"
import arrowUP from "./../../Image/headerImage/arrow-up.png"
import arrowDown from "./../../Image/headerImage/arrow-down.png"


const Header = (props) => {
    return (
        <div className={s.headerElement}>
            <div className={s.categoryClothing}>
                <button className={s.firstElement}>Women</button>
                <button>Men</button>
                <button>Kids</button>
            </div>

            <button className={s.iconReboot}>
                <img src={headerIconReboot}/>
            </button>

            <button className={s.iconDollar}>$
            </button>
            <button>
                <img src={s.arrowDown}/>
            </button>
            <button className={s.iconBasket}>
                <img src={headerIconBasket}/>
            </button>
        </div>

    )
}

export default Header