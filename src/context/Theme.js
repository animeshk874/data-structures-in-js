import { Fragment, useState, useEffect, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from '../hooks/theme'
import { GlobalStyles } from '../theme/GlobalStyles'

export const ThemeStateProvider = createContext({})

const Theme = ({ children }) => {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);

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
      <ThemeStateProvider.Provider value={{ selectedTheme, setSelectedTheme }}>
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