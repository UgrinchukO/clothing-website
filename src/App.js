import React, {PureComponent} from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import MainContainer from "./components/Main/MainContainer";
import DropDown from "./components/DropDown/DropDown";
import DropDownContainer from "./components/DropDown/DropDownContainer";
import TextNameCategoryContainer from "./components/TextNameCategory/TextNameCategoryContainer";


export class App extends PureComponent {

    render() {

        return (
            <div className="app-wrapper-content">
                <HeaderContainer/>
                <TextNameCategoryContainer/>
                <MainContainer/>
            </div>
        )
    }
}


export default App