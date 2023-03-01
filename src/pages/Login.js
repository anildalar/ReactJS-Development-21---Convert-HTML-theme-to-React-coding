//1. Import Area
import React, { useState } from 'react'


//2. Defination Area
export default function Login() {
  //2.1 Hooks Area Hook Variable
  //let username='';
  //let password='';

  // const [hookVariable,setHookFunction] = useState(initialValue)
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');



  //2.2 Functiond efination area
  let sendData = ()=>{
    //alert('Good Mornign');
    console.log(username);
    console.log(password);
    let data = {
      "identifier": username,
      "password": password
    }
     // Call the api
     fetch(`http://localhost:1337/api/auth/local`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
       if(data.jwt){
          window.localStorage.setItem('userdata',JSON.stringify(data))
          if(data.user.roles === 'ADMIN'){
               //redirect to admin page 
               window.location.href = '/admin';
          }
          if(data.user.roles === 'STUDENT'){
              //redirect to student page 
          }
          if(data.user.roles === 'TEACHER'){
              //redirect to teacher page 
              window.location.href = '/teacher';
          }
          if(data.user.roles === 'PARENT'){

          }
          if(data.user.roles === 'ACCOUNTANT'){

          }
       }
     })
     .catch();
  }

  //2.3 Return 

  return (
    <>
      <section>
          <form>
            <input type="text" name="identifier" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
            <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <input type="button" value="Login" onClick={ ()=>{ sendData() } } />
          </form>

      </section>
    </>
  )
}

//3. Expoer Area
