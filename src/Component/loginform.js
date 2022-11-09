import React, {useState} from 'react';
import './Login.css';
function Loginform()
{
    const [email,setEmail]=useState(" ");
    const [password,setPasswd]=useState(" ");
    const submit=(e)=>{
		e.preventDefault();
        const data={
        mail:email,
        passwor: password
        }
        console.log(data);
    }
    return (
            <div>
                <h1>LoginPage</h1>
                <form action="" onSubmit={submit}> 
                    <div> 
                         <label>Email</label>            
                        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br><br></br> 
                    </div> 
                    <div> 
                        <label>Password</label>
                    <input type="text" name="passw"  value={password} onChange={(e)=>setPasswd(e.target.value)}/><br></br><br></br> 
                    </div>  
                    <button type="submit">submit</button><br></br><br></br>
                 
                    
                
                </form>
            </div>
      
    );
}
export default Loginform;