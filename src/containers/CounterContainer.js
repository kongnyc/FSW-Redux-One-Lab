import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux"

import { incrementCount, decrementCount,resetState } from "../actions/counterActions";

const CounterContainer = () => {
  const count = useSelector(state => state.count)
  const dispatch=useDispatch()

  const increment = () => {
    dispatch(incrementCount())
  };

  const decrement = () => {
    dispatch(decrementCount())

  };

  const restState=()=>{
    dispatch(resetState())
  }

  return (
    <>
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
    />
    <button onClick={restState}>Rest to Zero</button>
    </>
  )
}

export default CounterContainer