import React, { useState } from "react"

const Login = (props) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
      });
     
   
       const handleChange =(event)=> {
setUserData({...userData,
[event.target.name]: event.target.value
})
       }
       
    return (
        <div>

        <form onSubmit={props.handleSubmit}>
<div>
    <input 
    type="text"
    value={props.username}
    name="Username"
    placeholder="Username"
    onChange={handleChange}
    />
</div>
<div>
    <input 
    type='password'
    value={props.password}
    name="Password"
    placeholder="Username"
    onChange={handleChange}
    />
</div>
<button type="submit"> 
    Login 
</button>
        </form>
        </div>
    )
}

export default Login;