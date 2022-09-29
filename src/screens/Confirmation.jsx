import React from 'react'
import icon from '../images/icon.png'
function Confirmation() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">&nbsp;</div>
        <div className="col-lg-4 py-5">
            <div className='mt-5 confirm bg-light px-3 py-3 rounded animate__animated animate__bounceIn'>
              <div className='h4 fw-bold text-center'>Thank you for filling the form {localStorage.getItem('name')}</div>
              <div className='text-center py-4'>
                <img src={icon} alt="success" style={{"width":40+"%"}} />
              </div>
              <div className='text-center'>We have your details and are working on it, our tteam will get in touch with you shortly!</div>
            </div>
        </div>
        <div className="col-lg-4">&nbsp;</div>
      </div>
    </div>
  )
}

export default Confirmation