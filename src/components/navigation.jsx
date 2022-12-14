import React from 'react'

// **************************************
import {BrowserRouter as  Link } from 'react-router-dom';
// **************************************
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          {/* //******************* */ }

          <button type='submit' className='btn btn-custom btn-lg' >
                            
                   SIGN UP
                </button> 

              
                <Link to="./SignIn">
                 <button type="button">
                   Click Me!
                   </button>
                    </Link>


          {/* ******************************** */}
          <a className='navbar-brand page-scroll' href='#page-top'>
            Find Service Man
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Category
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
              suggestion
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Best In
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
              <a href='#signin' className='page-scroll'>
                Sign In
              </a>
            </li>
            <li>
              <a href='#register' className='page-scroll'>
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
