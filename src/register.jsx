import { useState } from "react"
import axiosInstance from "../axios"
import { useNavigate } from "react-router-dom"

export function Register (){
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin =  () => {
    try{
      const response =  axiosInstance.post("/register",{username, password});
      console.log("response",response);
      
    } catch(error) {
console.log(error)
    }
  }
  return(
    <>
      <h1>Register here</h1>
      <label>user name </label>
      <input type="text" placeholder="name" value={username} onChange={(e)=> setUserName(e.target.value)}></input>
      <label>Password </label>
      <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
      <button type="submit" onClick={handleLogin}>Submit</button>
      <span onClick={()=> navigate("/")}>login here</span>
    </>
  )
}