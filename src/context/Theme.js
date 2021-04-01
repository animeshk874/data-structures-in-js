import { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from '../hooks/theme'


const Theme = ({ children }) => {
  // 3: Get the selected theme, font list, etc.
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
      <ThemeProvider theme={selectedTheme || {}}>
        {children}
      </ThemeProvider>
    )
  return (
    <Fragment>
      {children}
    </Fragment >
  )
};


export default Theme;