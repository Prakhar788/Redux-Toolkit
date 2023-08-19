import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from "../redux/slices/user";

const Login = () => {
    const dispatch=useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Prakhar", age: 20, email: "prakhar@gmail.com" }));
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Login