// use of useReducer

import { useReducer } from "react"

export default function Counter(){
    const [count,dispatch] = useReducer(reducer,initialState);
    return(
        <div>
            <button>Increment By One</button>
            <button>Decrement By One</button>
        </div>
    )
}