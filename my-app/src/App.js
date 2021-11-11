import React, {PureComponent} from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import MainContainer from "./components/Main/MainContainer";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        fetch("https://github.com/scandiweb/junior-react-endpoint/src/data");
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