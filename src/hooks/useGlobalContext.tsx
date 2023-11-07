"use client";

import { ReactNode, createContext, useContext, useReducer } from "react";

type Action = { type: "CHECKOUT_BOOKING"; id: string; amount: number };
type Dispatch = (action: Action) => void;
type State = { id: string; amount: number };
type ProviderProps = { children: ReactNode };

const Context = createContext<[state: State, dispatch: Dispatch] | undefined>(
  undefined,
);

const initialState = { id: null, amount: null };

export function useGlobalContext() {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a Provider");
  }

  return context;
}

function Reducer(state: State, action: any) {
  switch (action.type) {
    case "CHECKOUT_BOOKING":
      return {
        id: action.id,
        amount: action.amount,
      };

    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
}

export default function Provider(props: ProviderProps) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]} {...props} />;
}
