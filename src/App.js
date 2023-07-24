import { useState } from "react";
import { ThemeProvider } from "styled-components";

import consts from "./global/consts.json";

import { Style } from "./style";

function App() {
  const [ theme, setTheme ] = useState("dark");

  return (
    <div className="App">
      <ThemeProvider theme={ consts.themes[theme] }>
        <Style />
      </ThemeProvider>
    </div>
  );
}

export default App;
