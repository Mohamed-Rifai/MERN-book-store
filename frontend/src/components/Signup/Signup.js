


import React, { useState } from 'react';
import axios from '../../axios'; 

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Signup() {

 
 const [error,setError] = useState(null)
 const [formData, setFormData] = useState({
     name: "",
     email: "",
     password: "",
     confirmPassword: "",
   });

  const navigate = useNavigate()

   const handleChange = (event) => {
     setFormData({
       ...formData,
       [event.target.name]: event.target.value,
     });
   };


   const handleSubmit = (event) => {
     event.preventDefault();

     //user data send to backend
     axios.post('/signup',{

      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword 

     }).then((res)=>{
      console.log(res.data);
      navigate('/login')

       
     }).catch((err)=>{
      console.log('catck working');
        const obj = err.response.data
     const arr = [...Object.values(obj)];
      setError(arr[0]);

     })
    
   };


  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
               {error && (
        <div style={{ color: 'red', margin: '10px 0' }}>
          {error}
        </div>
         )}
           <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Name' id='form1'
                 type='text'
                 name='name'
                 value={formData.name}
                 onChange={handleChange}
                  required
                  className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' 
                type='email'
                name='email'
                 value={formData.email}
                onChange={handleChange}
                required
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3'
                 type='password'
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                 />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4'
                 type='password'
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                 />
              </div>

             

              <button className='mb-4 btn btn-primary' type='submit'  size='lg'>Register</button>
           </form>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Signup;