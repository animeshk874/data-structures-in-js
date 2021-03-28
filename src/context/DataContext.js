import { createContext, useReducer, useEffect } from 'react';


export const DataContext = createContext([]);

const reducer = (state, newState) => Object.assign({}, state, newState);

export const DataContextProvider = (props) => {
  const [data, dispatch] = useReducer(reducer, {
    dataStructureKey: '',
    dataStructures: [],
    isLoading: false,
    details: null,
    error: null
  })
  useEffect(() => {
    fetch('/data/data-structures.json')
      .then((data) => data.json())
      .then((dataStructures) => {
        if (dataStructures?.length) {
          dispatch({ dataStructures })
        }
      }).catch(error => console.error(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {props.children}
    </DataContext.Provider>
  )
}