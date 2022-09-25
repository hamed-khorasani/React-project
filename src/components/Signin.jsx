import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import {BrowserRouter as  Link } from 'react-router-dom';




const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Signin = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='signin'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Sign In</h2>
                <p>
                  Please fill out the form below to Register.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Last Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Address'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Discription'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  REGISTER
                </button>



                

                <button type='submit' className='btn btn-custom btn-lg' >
                            
                   SIGN UP
                </button> 


                <button
                  as={Link}
                  to="/signup"
  	              variant="text">
                	Sign Up
                </button>

                <Link to="/components/signup">
                 <button type="button">
                   Click Me!
                   </button>
                    </Link>

                    <a href="https://react.school" target="_blank">
                    <button> Link Button </button>
</a>


                {/* <button>
                  <Link to="./SignUp.jsx">Click</Link>
                </button> */}









              </form>
              
            </div>
            
          </div>
         
        </div>
        
      </div>
      <div id='footer'>
        
      </div>
    </div>
  )
}
