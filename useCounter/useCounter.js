import { useState } from "react"

export const useCounter = ( initialState = 10 ) => {
  
    const [counter, setCounter] = useState(initialState);

    const increment = (factor = 1) => {
        setCounter((prevState) => prevState + factor);
    }

    const decrement = (factor = 1) => {
        setCounter((prevState) => prevState - factor);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}