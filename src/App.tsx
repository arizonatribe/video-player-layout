import React, { useState } from "react";
import { Player, ToggleButton, SidePanel } from "./components";
import "./App.styles.css";

function App() {
    const [shouldShowPanel, setToggle] = useState(true);

    const handleToggle = () => {
      setToggle(!shouldShowPanel);
    }

    const styles = [
        "app",
        shouldShowPanel && "app-with-nav"
    ].filter(Boolean).join(" ")

    return (
        <div className={styles}>
            {shouldShowPanel && <SidePanel />}
            <Player />
            <ToggleButton handleToggle={handleToggle} />
        </div>
    );
}

export default App;
