import { useState } from "react";
import { ThemeProvider } from "styled-components";

import consts from "./global/consts.json";

import { Header, About, Abilities, Techs, Projects, Contact } from "./components";

import { Style } from "./style";

function App() {
  const [ theme, setTheme ] = useState(consts.themes.dark);
  
  const toggleThemes = () => (
    theme.name == "dark" ?
    setTheme(consts.themes.bright) :
    setTheme(consts.themes.dark)
  );

  return (
    <div className="App">
      <ThemeProvider theme={ theme }>
        <Style />

        <Header toggleThemes={ toggleThemes } />
        <About />
        <Abilities />
        <Techs />
        <Projects />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
