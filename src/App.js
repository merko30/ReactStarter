import React from "react";
import Hello from "./components/Hello";

class App extends React.Component {
    render() {
        return (
            <div id="root">
                <h1 className="title">React Starter</h1>
                <Hello />
            </div>
        );
    }
}

export default App;
