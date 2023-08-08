import React from 'react'
import { inc,dec } from '../redux/slices/counter';
import {useSelector,useDispatch} from "react-redux";
const Counter = () => {
    const counter=useSelector((state)=>state.counter);
    const dispatch=useDispatch();
  return (
    <>
    <div>Counter:{counter}</div>
  <button onClick={() => dispatch(inc())}>Increment</button>
  <button onClick={() => dispatch(dec())}>Dec</button>
    </>
  )
}

export default Counter