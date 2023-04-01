import { createContext, useReducer, useEffect } from 'react'


export const AppContext = createContext()

export const appContextReducer = (state, action) => {
    switch (action.type) {
    //   case 'LOGIN':
    //     return { ...state, user: action.payload }
    //   case 'LOGOUT':
    //     return { ...state, user: null }
    //   case 'AUTH_IS_READY':
    //     return { ...state, user: action.payload, authIsReady: true }
    //   case 'ALLOW_LOGIN':
    //     return { ...state, isLoginAllowed: action.payload }
      default:
        return state
    }
  }

export const AppContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(appContextReducer, { 
      user: null,
      authIsReady: false,
      isLoginAllowed: false,
    })
  

  
    return (
      <AppContext.Provider value={{ ...state, dispatch }}>
        { children }
      </AppContext.Provider>
    )
  
  }