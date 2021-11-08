import React, {PureComponent} from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
// import {Route, withRouter} from "react-router-dom";
// import {connect} from "react-redux";
//
// import Men from "./components/Men/Men";
// import {compose} from "redux";
// import Header from "./components/Header/Header";
// import ModalBasketContainer from "./components/ModalBasket/ModalBasketContainer";
import MainContainer from "./components/Main/MainContainer";


class App extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="app-wrapper-content">
                <HeaderContainer/>
                <MainContainer />
                {/*<Route path='/men' render={() => <Men/>}/>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return this.state

}

export default App