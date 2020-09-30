import React, {createContext,useContext,useReducer} from "react";

export const StateContext = createContext();

export const StateProvider = (function({reducer,initialState,children}){
  return (
  <StateContext.Provider value = {useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
  );
});

export const useStateValue = function(){
  return useContext(StateContext);
}
