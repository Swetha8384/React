import React, {useState} from 'react';
import Result from './Component/Result';
function Registration()
{ 
    
     const [details,setDetails]=useState({firstname:"",lastname:""});

     const [cform,nform]=useState(true)
    const update = (e) => {
        setDetails ({...details, [e.target.name]: [e.target.value]})
        }
        const submit = (e) => {
        e.preventDefault()
        console.log(details)
        }
       
        // const data = {
        //     fname: firstname,
        //     lname:lastname,
        //     mail:email,
        //     passwor: password,
        //     mobile:number
        //};
        //console.log(data);
        
    
    const success=()=>{
        alert("registred successfully")
    }
    return (
        <div>
            <h2>Registrationform</h2>
            <form action="" onSubmit={submit}> 
            <div> 
                <label>Firstname</label>
                <input type="text" name="firstname" placeholder='entername' value={details.firstname} onChange={update}/><br></br><br></br> 
            </div>
            <div> 
                  <label>Lastname</label>
                  <input type="text" name="lastname" value={details.lastname} onChange={update}/><br></br><br></br>
           </div>
                <div> 
                    <label>Email</label>
                    <input type="text" name="email" value={details.email} onChange={update}/><br></br><br></br>
                </div> 
                <div> 
                    <label>Password</label>  
                    <input type="text" name="passw"  value={details.password} onChange={update}/><br></br><br></br>
                </div> 
                {/* <div> 
                <label>Mobile</label>  
                <input type="number" name="number"  value={number} onChange={(e)=>setNumber(e.target.value)}/> 
                </div>   */}
              
                <button type="submit" onClick={success}>submit</button>
                
            </form>
        </div>
    )
}
export default Registration;