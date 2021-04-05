import { Fragment, useState, useEffect, createContext, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles } from '../theme/GlobalStyles'
import { setToLS, getFromLS } from '../utils/storage'
import * as themes from '../theme/schema.json';

export const ThemeProvider = createContext({})

const ThemeContext = ({ children }) => {
  const Allthemes = themes.default;
  const [selectedTheme, setSelectedTheme] = useState(Allthemes?.data?.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const mode = getFromLS('mode');
    mode === 'dark' ? selectMode('dark') : selectMode('light');
    setThemeLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function selectMode(mode) {
    setToLS('mode', mode)
    setSelectedTheme(Allthemes?.data?.[mode]);
  }

  if (themeLoaded)
    return (
      <ThemeProvider.Provider value={{ selectedTheme, selectMode }}>
        <StyledThemeProvider theme={selectedTheme || {}} >
          <GlobalStyles />
          {children}
        </StyledThemeProvider>
      </ThemeProvider.Provider>
    )
  return (
    <Fragment>
      {children}
    </Fragment >
  )
};


export default ThemeContext;

export const useTheme = () => {
  const context = useContext(ThemeProvider);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
};