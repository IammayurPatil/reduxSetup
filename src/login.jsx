import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../axios"

export function Login (){
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin =  async(e) => {
    e.preventDefault();
    try{
      const response = await axiosInstance.post("/login",{username, password});
      console.log("Token:", response.data.token);
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/profile")
      
    } catch(error) {
console.log(error)
    }
  }
  return(
    <>
      <h1>Login here</h1>
      <label>user name </label>
      <input type="text" placeholder="name" value={username} onChange={(e)=> setUserName(e.target.value)}></input>
      <label>Password </label>
      <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
      <button type="submit" onClick={handleLogin}>Submit</button>
      <span onClick={()=> navigate("/register")}>sign up here</span>
    </>
  )
}