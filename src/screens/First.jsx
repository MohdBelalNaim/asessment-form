import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Form.css'


function First() {
  const navigate = useNavigate();
  const[name,setName]=useState("")

  function handleForm(e){
    e.preventDefault()
    localStorage.setItem('name',name)
    navigate("/second")  
  }

  return (
    
       <div className="container">
        <div className="row">
          <div className="col-lg-4">&nbsp;</div>
          <div className="col-lg-4 py-5">
            <div className='mt-5 bg-light px-3 py-3 rounded animate__animated animate__slideInRight'>
              <div>
                  <div className='h4 fw-bold'>Let's get started</div>
                  <div>We'll need some of your details</div>
              </div>
              <form onSubmit={e=>handleForm(e)}>
                  <input className="form-control py-2 mt-3" value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Full name" required />
                  <input className="form-control py-2 mt-3" type="tel" placeholder="Phone number" required/>
                  <input className="form-control py-2 mt-3" type="email" placeholder='Email address' required/>
                  <button className="form-control py-2 mt-3 button">Next</button>
              </form>
            </div>
          </div>
          <div className="col-lg-4">&nbsp;</div>
        </div>
       </div>

  )
}

export default First