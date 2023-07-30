import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import consts from "./global/consts.json";
import { getUser } from "./services";

import { Header, About, Abilities, Techs } from "./components";

import { Style } from "./style";

function App() {
  useEffect(() => { loadUser(); }, []);
  
  const [ user, setUser ] = useState({});
  const [ theme, setTheme ] = useState(consts.themes.dark);

  const loadUser = () => (
    getUser(consts.user).then(res => setUser(res))
  );
  
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
        <About user={ user }/>
        <Abilities />
        <Techs />
      </ThemeProvider>
    </div>
  );
}

export default App;
