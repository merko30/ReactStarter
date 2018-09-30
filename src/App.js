import React from "react";
import Hello from "./components/Hello/Hello";

import styles from "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>React Starter</h1>
                <Hello />
            </div>
        );
    }
}

export default App;
