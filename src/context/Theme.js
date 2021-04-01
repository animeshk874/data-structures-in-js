import { Fragment, useState, useEffect, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from '../hooks/theme'

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
      <ThemeProvider theme={selectedTheme || {}} >
        <ThemeStateProvider.Provider value={{ selectedTheme, setSelectedTheme }}>
          {children}
        </ThemeStateProvider.Provider>
      </ThemeProvider>
    )
  return (
    <Fragment>
      {children}
    </Fragment >
  )
};


export default Theme;