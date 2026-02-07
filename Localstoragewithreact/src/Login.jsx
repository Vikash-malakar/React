import { useState } from "react"
import { Route, Routes } from "react-router-dom"    

function Login(){
   let[ loginval,setloginval] = useState({name:"",age:""})
   

function inputdata(e){
    let {name,value,}=e.target
    setloginval({...loginval,[name]:value})
}

function submitclick(e){
    e.preventDefault()
    let localdata= JSON.parse(localStorage.getItem("userdata"))
    if (loginval.name != localdata.name || loginval.age != localdata.age){
        alert("login  sahi se kar")
    }
    else{
        alert("login nahi hua")
    }
}


 return(    
        <>
       <h1>This is login Page </h1>






  <form onSubmit={submitclick}>
    <label>Username</label><br />
    <input type="text" name="name" placeholder="Enter username" onChange={inputdata} /><br /><br />

    <label>Age</label><br />
    <input type="age" name="age" placeholder="Enter password" onChange={inputdata} /><br /><br />

    <input type="submit" value="Login" />
  </form>


        </>
    )
}

export default Login
