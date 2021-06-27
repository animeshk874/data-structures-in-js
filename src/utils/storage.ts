export const setToLS = (key: any, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key: any) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};
