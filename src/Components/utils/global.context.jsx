import { createContext, useReducer, useEffect, useMemo } from "react";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light"};
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_DATA", payload: data }))
      .catch((error) => console.log('Hubo un error al recibir los dentistas: ' + error));
  }, []);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
