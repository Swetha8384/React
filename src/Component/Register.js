import React from 'react'

const Register = () => {
  return (
    <div>
      <h1>Registration form</h1>
      <div>
           <label>Firstname</label>
           <input type="text" name="firstname"/><br></br>
      </div>
      <div>
           <label>Lastname</label>
           <input type="text" name="lastname"/><br></br>
      </div>
      <div>
           <label>Email</label>
           <input type="text" name="email"/><br></br>
      </div>
      <div>
           <label>Password</label>
           <input type="text" name="password"/><br></br>
      </div>
      <div>
           <label>Mobile</label>
           <input type="text" name="mobile"/><br></br>
      </div>
    </div>
  )
}

export default Register
