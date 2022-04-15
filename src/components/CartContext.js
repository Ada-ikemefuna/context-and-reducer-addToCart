import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
          return [...state, action.item];
        case "REMOVE":
          const newArr = [...state];
          newArr.splice(action.index, 1);
          return newArr;
        default:
          throw new Error(`unknown action ${action.type}`);
      }
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, [])

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartContext.Provider value={state}>
                {children}
            </CartContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () =>  useContext(CartContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
