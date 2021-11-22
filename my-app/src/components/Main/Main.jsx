import React from "react";
import s from "./Main.module.css"
import DropDown from "../DropDown/DropDown";


class Main extends React.Component {

    render() {
        return (
            <div className={s.productCategory} >
                <h1 >Category name</h1>
            </div>
        )
    }
}

export default Main