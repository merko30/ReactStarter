import React from "react";
import ReactDOM from "react-dom";

import style from "./style.css";

import Hello from "./components/Hello";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Starter</h1>
                <Hello />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
