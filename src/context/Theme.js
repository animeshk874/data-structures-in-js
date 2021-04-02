import { Fragment, useState, useEffect, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from '../hooks/theme'
import { GlobalStyles } from '../theme/GlobalStyles'
import { setToLS } from '../utils/storage'

export const ThemeStateProvider = createContext({})

const Theme = ({ children }) => {
  const { Allthemes, theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);

  function selectMode(mode) {
    setToLS('mode', mode)
    setSelectedTheme(Allthemes?.data?.[mode]);
  }

  // 4: Load all the fonts
  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: getFonts()
  //     }
  //   });
  // });

  if (themeLoaded)
    return (
      <ThemeStateProvider.Provider value={{ selectedTheme, selectMode }}>
        <ThemeProvider theme={selectedTheme || {}} >
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ThemeStateProvider.Provider>
    )
  return (
    <Fragment>
      {children}
    </Fragment >
  )
};


export default Theme;