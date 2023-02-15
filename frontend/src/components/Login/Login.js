import React, {  useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import HeaderNav from '../HeaderNav';
import {setName,setEmail,setLoggedIn,setUserId} from '../../redux/User'

import axios from '../../axios';

import {
  
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
  
}
from 'mdb-react-ui-kit';

function Login() {

 const [error,setError] = useState(null)
 const [formData, setFormData] = useState({    
     email: "",
     password: "",   
   });
   const dispatch = useDispatch();
 
   const navigate = useNavigate()

    const handleChange = (event) => {
     setFormData({
       ...formData,
       [event.target.name]: event.target.value,
     });
   };


     const handleSubmit = (event) => {
     event.preventDefault();


         //user Login request
      axios.post(`/login`, {
        email: formData.email,
        password: formData.password

      }).then((res)=>{
       
        const { name, email,userId} = res.data
          console.log(userId); 
        //users datas store into redux 
         dispatch(setName(name));
         dispatch(setEmail(email));
         dispatch(setUserId(userId));
         dispatch(setLoggedIn(true));

        //token passed from backend  
        
        const token= res.data.token
         console.log(token);
        
        localStorage.setItem("userToken",token)
        navigate('/') 

      }).catch((error)=>{
        const obj = error.response.data
        const arr = [...Object.values(obj)]
        setError(arr)

      })
    
   };

  return (
    <>
     <HeaderNav/>
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>
   {error && (
        <div style={{ color: 'red', margin: '10px 0' }}>
          {error}
        </div>
         )}
                 <form onSubmit={handleSubmit}>
              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='email'
               type='email'
               name='email'
               value={formData.email}
               onChange={handleChange}
                size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='password'
               type='password'
               name='password'
               value={formData.password}
               onChange={handleChange}
               size="lg"/>

              <p>Don't have an account?<Link to={'/signup'}> <b>Sign up</b></Link></p>
              <button className='btn btn-primary' size='lg' type='submit'>
                Login
              </button>
            </form>
              <hr className="my-4" />

            

            

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default Login;