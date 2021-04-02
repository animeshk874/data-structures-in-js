import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';
import * as themes from '../theme/schema.json';

export const useTheme = () => {
  const Allthemes = themes.default;
  const [theme, setTheme] = useState(Allthemes?.data?.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    setToLS('mode', mode)
    setToLS('theme', Allthemes?.data?.[mode])

    setTheme(Allthemes?.data?.[mode]);
    setThemeLoaded(true);
  };

  // const getFonts = () => {
  //   const allFonts = _.values(_.mapValues(themes.data, 'font'));
  //   return allFonts;
  // }

  useEffect(() => {
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes?.data?.light);
    setThemeLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    theme,
    themeLoaded,
    setMode
  };
};