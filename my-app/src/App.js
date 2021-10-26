import React, {PureComponent} from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";


class App extends PureComponent {
    componentDidMount() {

    }
    render() {
        return (
            <div className="app-wrapper-content">
                <HeaderContainer />
            </div>
    )
    }
}

export default App;
